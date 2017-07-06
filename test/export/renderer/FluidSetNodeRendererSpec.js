'use strict';

/**
 * Requirements
 */
const FluidSetNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidSetNodeRenderer.js').FluidSetNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidSetNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    nodeRendererSpec(FluidSetNodeRenderer, 'export.renderer/FluidSetNodeRenderer', undefined, options);
});
