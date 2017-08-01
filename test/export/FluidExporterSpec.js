'use strict';

/**
 * Requirements
 */
const FluidExporter = require(FLOW_SOURCE + '/export/FluidExporter.js').FluidExporter;
const FluidModuleConfiguration = require(FLOW_SOURCE + '/configuration/FluidModuleConfiguration.js').FluidModuleConfiguration;
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
        const fixture = projectFixture.createStatic(true);
        const fluidModuleConfiguration = new FluidModuleConfiguration(fixture.globalConfiguration);
        if (parameters && parameters.length)
        {
            parameters.push(fluidModuleConfiguration);
            return parameters;
        }
        else
        {
            return [fixture.globalRepository, fixture.buildConfiguration, fluidModuleConfiguration];
        }
    }

    exporterSpec(FluidExporter, 'export/FluidExporter', prepareParameters);
});
