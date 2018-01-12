'use strict';

/**
 * Requirements
 */
const FluidConditionNodeRenderer = require(FLUID_SOURCE + '/export/renderer/FluidConditionNodeRenderer.js').FluidConditionNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidConditionNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidConditionNodeRenderer, 'export.renderer/FluidConditionNodeRenderer', undefined, require('./RendererHelper.js').options());
});
