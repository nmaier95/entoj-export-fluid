'use strict';

/**
 * Requirements
 */
const FluidRenderer = require(FLOW_SOURCE + '/export/FluidRenderer.js').FluidRenderer;
const FluidConfiguration = require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration;
const rendererSpec = require('entoj-system/test').export.RendererShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(FluidRenderer.className, function()
{
    /**
     * Renderer Test
     */
    const testFixtures =
    {
        'should render conditions': 'conditions',
        'should render loops': 'loops',
        'should render filter': 'filter',
        'should render assignments': 'assignments',
        'should render calls': 'calls'
    };
    const options =
    {
        configurationClass: FluidConfiguration,
        basePath: FLOW_FIXTURES + '/renderer',
        createFixture: projectFixture.createDynamic
    };
    rendererSpec(FluidRenderer, 'export/FluidRenderer', undefined, testFixtures, options);
});
