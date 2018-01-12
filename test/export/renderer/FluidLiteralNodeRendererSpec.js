'use strict';

/**
 * Requirements
 */
const FluidLiteralNodeRenderer = require(FLUID_SOURCE + '/export/renderer/FluidLiteralNodeRenderer.js').FluidLiteralNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidLiteralNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidLiteralNodeRenderer, 'export.renderer/FluidLiteralNodeRenderer', undefined, require('./RendererHelper.js').options());
});
