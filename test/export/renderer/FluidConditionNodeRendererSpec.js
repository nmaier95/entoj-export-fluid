'use strict';

/**
 * Requirements
 */
const FluidConditionNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidConditionNodeRenderer.js').FluidConditionNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidConditionNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    nodeRendererSpec(FluidConditionNodeRenderer, 'export.renderer/FluidConditionNodeRenderer', undefined, options);
});
