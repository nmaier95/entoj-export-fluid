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
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    nodeRendererSpec(FluidOperandNodeRenderer, 'export.renderer/FluidOperandNodeRenderer', undefined, options);
});
