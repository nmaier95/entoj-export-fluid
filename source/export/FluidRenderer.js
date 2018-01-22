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
     * @inheritDoc
     */
    static get className()
    {
        return 'export/FluidRenderer';
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': ['export/FluidRenderer.nodeRenderers', 'export/FluidRenderer.options'] };
    }


    /**
     * @inheritDoc
     */
    renderComment(text, configuration)
    {
        return Promise.resolve('<f:comment> ' + text + ' </f:comment>');
    }
}


// Exports
module.exports.FluidRenderer = FluidRenderer;
