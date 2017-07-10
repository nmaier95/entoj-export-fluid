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
            const FluidModuleConfiguration = require(FLOW_SOURCE + '/configuration/FluidConfiguration.js').FluidConfiguration;
            const FluidConfiguration = require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration;
            const fluidModuleConfiguration = new FluidModuleConfiguration(global.fixtures.globalConfiguration);
            return new FluidConfiguration(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, fluidModuleConfiguration);
        },
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    if (dynamic === true)
    {
        result.createFixture = require('entoj-system/test').fixture.project.createDynamic;
    }
    return result;
};
