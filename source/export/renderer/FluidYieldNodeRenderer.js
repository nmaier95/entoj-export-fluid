'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;


/**
 * Render a static array value
 *
 * @memberOf export.renderer
 * @extends Base
 */
class FluidYieldNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/FluidYieldNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('YieldNode'));
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
        return Promise.resolve('{caller -> f:format.raw()}');
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidYieldNodeRenderer = FluidYieldNodeRenderer;
