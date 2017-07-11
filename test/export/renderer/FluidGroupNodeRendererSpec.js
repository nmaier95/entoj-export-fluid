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
    nodeRendererSpec(FluidGroupNodeRenderer, 'export.renderer/FluidGroupNodeRenderer', undefined, require('./RendererHelper.js').options());
});
