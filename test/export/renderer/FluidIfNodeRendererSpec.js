'use strict';

/**
 * Requirements
 */
const FluidIfNodeRenderer = require(FLUID_SOURCE + '/export/renderer/FluidIfNodeRenderer.js').FluidIfNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidIfNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidIfNodeRenderer, 'export.renderer/FluidIfNodeRenderer', undefined, require('./RendererHelper.js').options());
});
