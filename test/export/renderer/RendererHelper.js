'use strict';

/**
 * Exports
 * @ignore
 */
module.exports.options = function(dynamic)
{
    const result =
    {
        configurationCreator: function(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration)
        {
            const FluidModuleConfiguration = require(FLUID_SOURCE + '/configuration/FluidModuleConfiguration.js').FluidModuleConfiguration;
            const FluidConfiguration = require(FLUID_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration;
            const fluidModuleConfiguration = new FluidModuleConfiguration(global.fixtures.globalConfiguration);
            return new FluidConfiguration(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, fluidModuleConfiguration);
        },
        basePath: FLUID_FIXTURES + '/nodeRenderer'
    };
    if (dynamic === true)
    {
        result.createFixture = require('entoj-system/test').fixture.project.createDynamic;
    }
    return result;
};
