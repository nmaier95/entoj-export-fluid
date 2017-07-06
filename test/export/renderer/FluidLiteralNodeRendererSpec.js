'use strict';

/**
 * Requirements
 */
const FluidLiteralNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidLiteralNodeRenderer.js').FluidLiteralNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidLiteralNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    nodeRendererSpec(FluidLiteralNodeRenderer, 'export.renderer/FluidLiteralNodeRenderer', undefined, options);
});
