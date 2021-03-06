'use strict';

/**
 * Requirements
 */
const FluidMacroNodeRenderer = require(FLUID_SOURCE + '/export/renderer/FluidMacroNodeRenderer.js').FluidMacroNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidMacroNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidMacroNodeRenderer, 'export.renderer/FluidMacroNodeRenderer', undefined, require('./RendererHelper.js').options(true));
});
