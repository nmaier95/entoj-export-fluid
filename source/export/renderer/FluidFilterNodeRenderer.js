'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const co = require('co');


/**
 * Renders view helpers
 *
 * @memberOf export.renderer
 * @extends Base
 */
class FluidFilterNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/FluidFilterNodeRenderer';
    }


    /**
     * @return {String}
     */
    getFiltertName(node, configuration)
    {
        return configuration.fluidConfiguration.entojViewHelperNamespace + ':' + node.name;
    }


    /**
     * @return {String}
     */
    getArgumentName(index, argument, configuration)
    {
        return argument.name || 'param' + index;
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('FilterNode'));
    }


    /**
     * @inheritDocs
     */
    render(node, configuration)
    {
        if (!node)
        {
            return Promise.resolve('');
        }
        const scope = this;
        const promise = co(function*()
        {
            let result = '';

            // Open curly?
            let useCurly = false;
            // When condition
            if (node.isChildOf(['ConditionNode']))
            {
                //result+='>CN<';
                useCurly = true;
            }
            if (useCurly)
            {
                result+= '{';
            }
            result+= yield configuration.renderer.renderNode(node.value, configuration);
            result+= ' -> ' + scope.getFiltertName(node, configuration) + '(';
            if (node.arguments)
            {
                for (const index of node.arguments.keys())
                {
                    const argument = node.arguments[index];
                    result+= scope.getArgumentName(index, argument, configuration);
                    result+= ':';
                    result+= yield configuration.renderer.renderNode(argument.value, configuration);
                    if (index < node.arguments.length - 1)
                    {
                        result+= ', ';
                    }
                }
            }
            result+= ')';
            if (useCurly)
            {
                result+= '}';
            }
            return result;
        }).catch(ErrorHandler.handler(this));
        return promise;
    }
}


// Exports
module.exports.FluidFilterNodeRenderer = FluidFilterNodeRenderer;
