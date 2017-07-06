'use strict';

/**
 * Requirements
 */
const FluidBooleanOperandNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidBooleanOperandNodeRenderer.js').FluidBooleanOperandNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidBooleanOperandNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    nodeRendererSpec(FluidBooleanOperandNodeRenderer, 'export.renderer/FluidBooleanOperandNodeRenderer', undefined, options);
});
