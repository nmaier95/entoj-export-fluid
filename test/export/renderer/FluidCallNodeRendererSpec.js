'use strict';

/**
 * Requirements
 */
const FluidCallNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidCallNodeRenderer.js').FluidCallNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidCallNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer',
        createFixture: require('entoj-system/test').fixture.project.createDynamic
    };
    nodeRendererSpec(FluidCallNodeRenderer, 'export.renderer/FluidCallNodeRenderer', undefined, options);
});
