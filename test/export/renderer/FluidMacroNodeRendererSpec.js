'use strict';

/**
 * Requirements
 */
const FluidMacroNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidMacroNodeRenderer.js').FluidMacroNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidMacroNodeRenderer.className, function()
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
    nodeRendererSpec(FluidMacroNodeRenderer, 'export.renderer/FluidMacroNodeRenderer', undefined, options);
});
