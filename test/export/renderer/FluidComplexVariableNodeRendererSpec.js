'use strict';

/**
 * Requirements
 */
const FluidComplexVariableNodeRenderer = require(FLUID_SOURCE + '/export/renderer/FluidComplexVariableNodeRenderer.js').FluidComplexVariableNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidComplexVariableNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidComplexVariableNodeRenderer, 'export.renderer/FluidComplexVariableNodeRenderer', undefined, require('./RendererHelper.js').options());
});
