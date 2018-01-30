'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 * Render if tags
 *
 * @memberOf export.renderer
 * @extends Base
 */
class FluidIfNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/FluidIfNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('IfNode'));
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
        const promise = co(function*()
        {
            let result = '';

            // ... ? ... : ....
            if (node.parent && node.parent.is('ExpressionNode'))
            {
                result+= '(';
                result+= yield configuration.renderer.renderNode(node.condition, configuration);
                result+= ') ';
                result+= '? (';
                result+= yield configuration.renderer.renderList(node.children, configuration);
                result+= ') ';
                result+= ': (';
                result+= yield configuration.renderer.renderList(node.elseChildren, configuration);
                result+= ')';
            }
            // if .... else if .... else
            else
            {
                result+= '<' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':if condition="';
                result+= yield configuration.renderer.renderNode(node.condition, configuration);
                result+= '">';
                if (node.elseChildren.length || node.elseIfChildren.length)
                {
                    result+= '<' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':then>';
                }
                result+= yield configuration.renderer.renderList(node.children, configuration);
                if (node.elseChildren.length || node.elseIfChildren.length)
                {
                    result+= '</' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':then>';
                }
                if (node.elseIfChildren.length)
                {
                    for (const elseIfNode of node.elseIfChildren)
                    {
                        result+= '<' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':else if="';
                        result+= yield configuration.renderer.renderNode(elseIfNode.condition, configuration);
                        result+= '">';
                        result+= yield configuration.renderer.renderList(elseIfNode.children, configuration);
                        result+= '</' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':else>';
                    }
                }
                if (node.elseChildren.length)
                {
                    result+= '<' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':else>';
                    result+= yield configuration.renderer.renderList(node.elseChildren, configuration);
                    result+= '</' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':else>';
                }
                result+= '</' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':if>';
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
module.exports.FluidIfNodeRenderer = FluidIfNodeRenderer;
