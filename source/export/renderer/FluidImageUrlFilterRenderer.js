'use strict';

/**
 * Requirements
 * @ignore
 */
const FluidFilterNodeRenderer = require('./FluidFilterNodeRenderer.js').FluidFilterNodeRenderer;


/**
 * Renders the imageUrl filter
 */
class FluidImageUrlFilterRenderer extends FluidFilterNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'transformer.noderenderer.fluid/FluidImageUrlFilterRenderer';
    }


    /**
     * @inheritDoc
     */
    getArgumentName(index, argument, configuration)
    {
        switch(index)
        {
            case 0:
                return 'ratio';

            case 1:
                return 'width';

            case 2:
                return 'height';

            default:
                return argument.name || 'param' + index;
        }
    }


    /**
     * @inheritDoc
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node &&
            node.is('FilterNode') &&
            (node.name == 'imageUrl'));
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidImageUrlFilterRenderer = FluidImageUrlFilterRenderer;
