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
    nodeRendererSpec(FluidArrayNodeRenderer, 'export.renderer/FluidArrayNodeRenderer', undefined, require('./Helper.js').options());
});
