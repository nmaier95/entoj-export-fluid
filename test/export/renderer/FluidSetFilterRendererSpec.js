'use strict';

/**
 * Requirements
 */
const FluidSetFilterRenderer = require(FLUID_SOURCE + '/export/renderer/FluidSetFilterRenderer.js').FluidSetFilterRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidSetFilterRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidSetFilterRenderer, 'export.renderer/FluidSetFilterRenderer', undefined, require('./RendererHelper.js').options());
});
