'use strict';

/**
 * Requirements
 * @ignore
 */
const FluidFilterNodeRenderer = require('./FluidFilterNodeRenderer.js').FluidFilterNodeRenderer;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const co = require('co');


/**
 * Renders view helpers
 *
 * @memberOf export.renderer
 * @extends Base
 */
class FluidLengthFilterRenderer extends FluidFilterNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidLengthFilterRenderer';
    }

    /**
     * @inheritDoc
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node &&
            node.is('FilterNode') &&
            node.name == 'length');
    }

    /**
     * @return {String}
     */
    getFiltertName(node, configuration)
    {
        return 'f:count';
    }

}


// Exports
module.exports.FluidLengthFilterRenderer = FluidLengthFilterRenderer;
