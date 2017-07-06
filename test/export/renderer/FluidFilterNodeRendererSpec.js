'use strict';

/**
 * Requirements
 */
const FluidFilterNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidFilterNodeRenderer.js').FluidFilterNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidFilterNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    nodeRendererSpec(FluidFilterNodeRenderer, 'export.renderer/FluidFilterNodeRenderer', undefined, options);
});
