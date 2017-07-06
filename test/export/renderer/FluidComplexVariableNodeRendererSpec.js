'use strict';

/**
 * Requirements
 */
const FluidComplexVariableNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidComplexVariableNodeRenderer.js').FluidComplexVariableNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidComplexVariableNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    nodeRendererSpec(FluidComplexVariableNodeRenderer, 'export.renderer/FluidComplexVariableNodeRenderer', undefined, options);
});
