'use strict';

/**
 * Requirements
 */
const FluidOutputNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidOutputNodeRenderer.js').FluidOutputNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidOutputNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    nodeRendererSpec(FluidOutputNodeRenderer, 'export.renderer/FluidOutputNodeRenderer', undefined, options);
});
