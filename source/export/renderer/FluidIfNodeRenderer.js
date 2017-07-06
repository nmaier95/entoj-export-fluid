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
            // If ...
            else if (!node.elseChildren.length)
            {
                result+= '<f:if condition="';
                result+= yield configuration.renderer.renderNode(node.condition, configuration);
                result+= '">';
                result+= yield configuration.renderer.renderList(node.children, configuration);
                result+= '</f:if>';
            }
            // If ... else ...
            else
            {
                result+= '<f:if condition="';
                result+= yield configuration.renderer.renderNode(node.condition, configuration);
                result+= '">';
                result+= '<f:then>';
                result+= yield configuration.renderer.renderList(node.children, configuration);
                result+= '</f:then>';
                result+= '<f:else>';
                result+= yield configuration.renderer.renderList(node.elseChildren, configuration);
                result+= '</f:else>';
                result+= '</f:if>';
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
