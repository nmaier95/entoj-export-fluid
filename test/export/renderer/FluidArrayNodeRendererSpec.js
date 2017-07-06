'use strict';

/**
 * Requirements
 */
const FluidArrayNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidArrayNodeRenderer.js').FluidArrayNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidArrayNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    nodeRendererSpec(FluidArrayNodeRenderer, 'export.renderer/FluidArrayNodeRenderer', undefined, options);
});
