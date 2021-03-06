'use strict';

/**
 * Requirements
 */
const FluidSetNodeRenderer = require(FLUID_SOURCE + '/export/renderer/FluidSetNodeRenderer.js').FluidSetNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidSetNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidSetNodeRenderer, 'export.renderer/FluidSetNodeRenderer', undefined, require('./RendererHelper.js').options());
});
