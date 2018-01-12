'use strict';

/**
 * Requirements
 */
const FluidFilterNodeRenderer = require(FLUID_SOURCE + '/export/renderer/FluidFilterNodeRenderer.js').FluidFilterNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidFilterNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidFilterNodeRenderer, 'export.renderer/FluidFilterNodeRenderer', undefined, require('./RendererHelper.js').options());
});
