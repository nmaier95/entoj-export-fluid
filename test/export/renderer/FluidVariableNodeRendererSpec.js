'use strict';

/**
 * Requirements
 */
const FluidVariableNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidVariableNodeRenderer.js').FluidVariableNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidVariableNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidVariableNodeRenderer, 'export.renderer/FluidVariableNodeRenderer', undefined, require('./Helper.js').options());
});
