'use strict';

/**
 * Requirements
 */
const FluidBooleanOperandNodeRenderer = require(FLUID_SOURCE + '/export/renderer/FluidBooleanOperandNodeRenderer.js').FluidBooleanOperandNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidBooleanOperandNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidBooleanOperandNodeRenderer, 'export.renderer/FluidBooleanOperandNodeRenderer', undefined, require('./RendererHelper.js').options());
});
