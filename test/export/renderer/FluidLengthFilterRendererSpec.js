'use strict';

/**
 * Requirements
 */
const FluidLengthFilterRenderer = require(FLUID_SOURCE + '/export/renderer/FluidLengthFilterRenderer.js').FluidLengthFilterRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidLengthFilterRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidLengthFilterRenderer, 'export.renderer/FluidLengthFilterRenderer', undefined, require('./RendererHelper.js').options());
});
