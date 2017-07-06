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
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    nodeRendererSpec(FluidExpressionNodeRenderer, 'export.renderer/FluidExpressionNodeRenderer', undefined, options);
});
