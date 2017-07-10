'use strict';

/**
 * Requirements
 */
const FluidRenderer = require(FLOW_SOURCE + '/export/FluidRenderer.js').FluidRenderer;
const FluidConfiguration = require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration;
const FluidModuleConfiguration = require(FLOW_SOURCE + '/configuration/FluidConfiguration.js').FluidConfiguration;
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
        configurationCreator: function(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration)
        {
            const fluidModuleConfiguration = new FluidModuleConfiguration(global.fixtures.globalConfiguration);
            return new FluidConfiguration(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, fluidModuleConfiguration);
        },
        basePath: FLOW_FIXTURES + '/renderer',
        createFixture: projectFixture.createDynamic
    };
    rendererSpec(FluidRenderer, 'export/FluidRenderer', undefined, testFixtures, options);
});
