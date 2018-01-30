'use strict';

/**
 * Requirements
 * @ignore
 */
const FluidFilterNodeRenderer = require('./FluidFilterNodeRenderer.js').FluidFilterNodeRenderer;


/**
 * Renders view helpers
 *
 * @memberOf export.renderer
 * @extends Base
 */
class FluidSafeFilterRenderer extends FluidFilterNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidSafeFilterRenderer';
    }

    /**
     * @inheritDoc
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node &&
            node.is('FilterNode') &&
            node.name == 'safe');
    }

    /**
     * @return {String}
     */
    getFiltertName(node, configuration)
    {
        return '' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':format.raw';
    }


    /**
     * @return {String}
     */
    getArgumentName(index, argument, configuration)
    {
        return argument.name || 'param' + index;
    }

}


// Exports
module.exports.FluidSafeFilterRenderer = FluidSafeFilterRenderer;
