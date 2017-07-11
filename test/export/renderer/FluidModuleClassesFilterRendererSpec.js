'use strict';

/**
 * Requirements
 */
const FluidModuleClassesFilterRenderer = require(FLOW_SOURCE + '/export/renderer/FluidModuleClassesFilterRenderer.js').FluidModuleClassesFilterRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidModuleClassesFilterRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidModuleClassesFilterRenderer, 'export.renderer/FluidModuleClassesFilterRenderer', undefined, require('./RendererHelper.js').options());
});
