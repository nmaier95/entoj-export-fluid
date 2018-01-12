'use strict';

/**
 * Requirements
 */
const FluidForNodeRenderer = require(FLUID_SOURCE + '/export/renderer/FluidForNodeRenderer.js').FluidForNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidForNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidForNodeRenderer, 'export.renderer/FluidForNodeRenderer', undefined, require('./RendererHelper.js').options());
});
