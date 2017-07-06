'use strict';

/**
 * Requirements
 */
const FluidForNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidForNodeRenderer.js').FluidForNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidForNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    nodeRendererSpec(FluidForNodeRenderer, 'export.renderer/FluidForNodeRenderer', undefined, options);
});
