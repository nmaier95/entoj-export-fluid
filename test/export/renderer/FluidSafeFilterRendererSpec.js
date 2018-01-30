'use strict';

/**
 * Requirements
 */
const FluidSafeFilterRenderer = require(FLUID_SOURCE + '/export/renderer/FluidSafeFilterRenderer.js').FluidSafeFilterRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidSafeFilterRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidSafeFilterRenderer, 'export.renderer/FluidSafeFilterRenderer', undefined, require('./RendererHelper.js').options());
});
