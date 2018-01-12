'use strict';

/**
 * Requirements
 */
const FluidCallNodeRenderer = require(FLUID_SOURCE + '/export/renderer/FluidCallNodeRenderer.js').FluidCallNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidCallNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidCallNodeRenderer, 'export.renderer/FluidCallNodeRenderer', undefined, require('./RendererHelper.js').options(true));
});
