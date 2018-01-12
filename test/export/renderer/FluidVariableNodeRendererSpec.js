'use strict';

/**
 * Requirements
 */
const FluidVariableNodeRenderer = require(FLUID_SOURCE + '/export/renderer/FluidVariableNodeRenderer.js').FluidVariableNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidVariableNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidVariableNodeRenderer, 'export.renderer/FluidVariableNodeRenderer', undefined, require('./RendererHelper.js').options());
});
