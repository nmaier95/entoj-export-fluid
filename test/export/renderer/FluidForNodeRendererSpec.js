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
    nodeRendererSpec(FluidForNodeRenderer, 'export.renderer/FluidForNodeRenderer', undefined, require('./Helper.js').options());
});
