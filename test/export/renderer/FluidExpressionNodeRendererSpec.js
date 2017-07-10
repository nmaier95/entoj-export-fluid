'use strict';

/**
 * Requirements
 */
const FluidExpressionNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidExpressionNodeRenderer.js').FluidExpressionNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidExpressionNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidExpressionNodeRenderer, 'export.renderer/FluidExpressionNodeRenderer', undefined, require('./Helper.js').options());
});
