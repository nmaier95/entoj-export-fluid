'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const MissingConfigurationError = require('entoj-system').error.MissingConfigurationError;
const co = require('co');


/**
 * Render a macro invocation
 *
 * @memberOf export.renderer
 * @extends Base
 */
class FluidCallNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidCallNodeRenderer';
    }


    /**
     * @inheritDoc
     */
    needsEval(node)
    {
        // When expression with a string literal
        if (node.find('LiteralNode', { valueType: 'string' }))
        {
            return true;
        }
        // When expression without an operand and not a parameter
        if (node.find('OperandNode'))
        {
            return true;
        }
        return false;
    }


    /**
     * @inheritDoc
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('CallNode'));
    }


    /**
     * @inheritDocs
     */
    render(node, configuration)
    {
        if (!node || !configuration)
        {
            return Promise.resolve('');
        }
        const scope = this;
        const promise = co(function*()
        {
            let result = '';
            const config = yield configuration.getMacroConfiguration(node.name);
            if (!config)
            {
                throw new MissingConfigurationError('CallNodeRenderer::render - no configuration for macro ' + node.name + ' found.');
            }
            result+= '<f:render partial="' + config.partial.replace('Partials/', '') + '"';
            if (node.arguments)
            {
                result+= ' arguments="{';
                for (let index = 0; index < node.arguments.length; index++)
                {
                    const param = node.arguments[index];
                    const needsEval = scope.needsEval(param);
                    result+= param.name + ': ';
                    if (needsEval)
                    {
                        result+= '\'';
                    }
                    result+= yield configuration.renderer.renderNode(param.value, configuration);
                    if (needsEval)
                    {
                        result+= '\'';
                    }
                    if (index < node.arguments.length - 1)
                    {
                        result+= ', ';
                    }
                }
                result+= '}"';
            }

            if (!node.children || !node.children.length)
            {
                result+= ' />';
            }
            else
            {
                result+= '>';
                result+= yield configuration.renderer.renderList(node.children, configuration);
                result+= '</f:render>';
            }
            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidCallNodeRenderer = FluidCallNodeRenderer;
