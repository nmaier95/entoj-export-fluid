'use strict';

/**
 * Requirements
 */
const FluidMediaQueryFilterRenderer = require(FLUID_SOURCE + '/export/renderer/FluidMediaQueryFilterRenderer.js').FluidMediaQueryFilterRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidMediaQueryFilterRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidMediaQueryFilterRenderer, 'export.renderer/FluidMediaQueryFilterRenderer', undefined, require('./RendererHelper.js').options());
});
