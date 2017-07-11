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
    nodeRendererSpec(FluidOutputNodeRenderer, 'export.renderer/FluidOutputNodeRenderer', undefined, require('./RendererHelper.js').options());
});
