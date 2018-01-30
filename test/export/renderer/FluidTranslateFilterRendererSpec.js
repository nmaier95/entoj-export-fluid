'use strict';

/**
 * Requirements
 */
const FluidTranslateFilterRenderer = require(FLUID_SOURCE + '/export/renderer/FluidTranslateFilterRenderer.js').FluidTranslateFilterRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidTranslateFilterRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidTranslateFilterRenderer, 'export.renderer/FluidTranslateFilterRenderer', undefined, require('./RendererHelper.js').options());
});
