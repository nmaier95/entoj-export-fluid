'use strict';

/**
 * Requirements
 */
const FluidEmptyFilterRenderer = require(FLOW_SOURCE + '/export/renderer/FluidEmptyFilterRenderer.js').FluidEmptyFilterRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidEmptyFilterRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidEmptyFilterRenderer, 'export.renderer/FluidEmptyFilterRenderer', undefined, require('./Helper.js').options());
});
