'use strict';

/**
 * Requirements
 */
const FluidGroupNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidGroupNodeRenderer.js').FluidGroupNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidGroupNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    nodeRendererSpec(FluidGroupNodeRenderer, 'export.renderer/FluidGroupNodeRenderer', undefined, options);
});
