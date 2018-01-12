'use strict';

/**
 * Requirements
 */
const FluidBlockNodeRenderer = require(FLUID_SOURCE + '/export/renderer/FluidBlockNodeRenderer.js').FluidBlockNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidBlockNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidBlockNodeRenderer, 'export.renderer/FluidBlockNodeRenderer', undefined, require('./RendererHelper.js').options());
});
