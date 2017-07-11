'use strict';

/**
 * Requirements
 */
const FluidOperandNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidOperandNodeRenderer.js').FluidOperandNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidOperandNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidOperandNodeRenderer, 'export.renderer/FluidOperandNodeRenderer', undefined, require('./RendererHelper.js').options());
});
