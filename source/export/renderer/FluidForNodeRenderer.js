'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 * Render iterations
 *
 * @memberOf export.fluid.renderer
 * @extends Base
 */
class FluidForNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/FluidForNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('ForNode'));
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

            // Create iteration
            result+= '<f:for as="' + node.valueName + '"';
            if (node.keyName)
            {
                result+= ' key="' + node.keyName + '"';
            }
            result+= ' each="{';
            result+= yield configuration.renderer.renderNode(node.value, configuration);
            result+= '}" iteration="loop">';

            // Render children
            result+= yield configuration.renderer.renderList(node.children, configuration);

            // End Iteration
            result+= '</f:for>';

            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidForNodeRenderer = FluidForNodeRenderer;
