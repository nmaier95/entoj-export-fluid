'use strict';

/**
 * Requirements
 */
const FluidIfNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidIfNodeRenderer.js').FluidIfNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidIfNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    nodeRendererSpec(FluidIfNodeRenderer, 'export.renderer/FluidIfNodeRenderer', undefined, options);
});
