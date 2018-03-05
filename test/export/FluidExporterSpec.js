'use strict';

/**
 * Requirements
 */
const FluidExporter = require(FLUID_SOURCE + '/export/FluidExporter.js').FluidExporter;
const FluidRenderer = require(FLUID_SOURCE + '/export/FluidRenderer.js').FluidRenderer;
const FluidTransformer = require(FLUID_SOURCE + '/export/FluidTransformer.js').FluidTransformer;
const FluidModuleConfiguration = require(FLUID_SOURCE + '/configuration/FluidModuleConfiguration.js').FluidModuleConfiguration;
const JinjaParser = require('entoj-system').export.parser.JinjaParser;
const exporterSpec = require('entoj-system/test').export.ExporterShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(FluidExporter.className, function()
{
    /**
     * Configuration Test
     */
    function prepareParameters(parameters)
    {
        const options =
        {
            mappings:
            [
                {
                    type: FluidRenderer,
                    '!nodeRenderers': require(FLUID_SOURCE + '/export/renderer/index.js').rendererList
                },
                {
                    type: FluidTransformer,
                    '!nodeTransformers': require(FLUID_SOURCE + '/export/transformer/index.js').transformerList
                }
            ]
        };
        const fixture = projectFixture.createDynamic(options);
        const moduleConfiguration = fixture.context.di.create(FluidModuleConfiguration);
        const jinjaParser = fixture.context.di.create(JinjaParser);
        const fluidRenderer = fixture.context.di.create(FluidRenderer);
        const fluidTransformer = fixture.context.di.create(FluidTransformer);
        if (parameters && parameters.length)
        {
            parameters.push(moduleConfiguration);
            parameters.push(jinjaParser);
            parameters.push(fluidRenderer);
            parameters.push(fluidTransformer);
            return parameters;
        }
        else
        {
            return [fixture.globalRepository, fixture.buildConfiguration, moduleConfiguration, jinjaParser, fluidRenderer, fluidTransformer];
        }
    }

    exporterSpec(FluidExporter, 'export/FluidExporter', prepareParameters);
});
