'use strict';

/**
 * Requirements
 * @ignore
 */
const FluidFilterNodeRenderer = require('./FluidFilterNodeRenderer.js').FluidFilterNodeRenderer;


/**
 * Renders the set/setProperty filter
 */
class FluidSetFilterRenderer extends FluidFilterNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'transformer.noderenderer.fluid/FluidSetFilterRenderer';
    }


    /**
     * @inheritDoc
     */
    getFiltertName(node, configuration)
    {
        return configuration.fluidConfiguration.entojViewHelperNamespace + ':setProperty';
    }


    /**
     * @inheritDoc
     */
    getArgumentName(index, argument, configuration)
    {
        switch(index)
        {
            case 0:
                return 'key';

            case 1:
                return 'value';

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
            (node.name == 'set' || node.name == 'setProperty'));
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidSetFilterRenderer = FluidSetFilterRenderer;
