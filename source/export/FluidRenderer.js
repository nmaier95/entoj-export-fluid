'use strict';

// Requirements
const Renderer = require('entoj-system').export.Renderer;


/**
 * @memberOf export
 * @extends export.Renderer
 */
class FluidRenderer extends Renderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/FluidRenderer';
    }

    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': ['export/FluidRenderer.nodeRenderers', 'export/FluidRenderer.options'] };
    }
}


// Exports
module.exports.FluidRenderer = FluidRenderer;
