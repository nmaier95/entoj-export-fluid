'use strict';

/**
 * Requirements
 */
const FluidConfiguration = require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration;
const configurationSpec = require('entoj-system/test').export.ConfigurationShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(FluidConfiguration.className, function()
{
    /**
     * Configuration Test
     */
    function prepareParameters(parameters)
    {
        const fixture = projectFixture.createStatic(true);
        return [undefined, undefined, {}, undefined, undefined, undefined, fixture.globalRepository, fixture.buildConfiguration];
    }

    configurationSpec(FluidConfiguration, 'export/FluidConfiguration', prepareParameters);
});
