'use strict';

// Requirements
const Configuration = require('entoj-system').export.Configuration;
const FluidModuleConfiguration = require('../configuration/FluidConfiguration.js').FluidConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;
const urlify = require('entoj-system').utils.urls.urlify;


/**
 * @memberOf export.fluid
 * @extends export.Configuration
 */
class FluidConfiguration extends Configuration
{
    /**
     * @ignore
     */
    constructor(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, fluidConfiguration)
    {
        super(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration);

        // Check params
        assertParameter(this, 'fluidConfiguration', fluidConfiguration, true, FluidModuleConfiguration);

        // Assign options
        this._fluidConfiguration = fluidConfiguration;
        this._identifier = 'fluid';
    }


    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/FluidConfiguration';
    }


    /**
     * @type {configuration.FluidConfiguration}
     */
    get fluidConfiguration()
    {
        return this._fluidConfiguration;
    }


    /**
     * @inheritDocs
     */
    refineMacroConfiguration(configuration)
    {
        configuration.fluid = this.fluidConfiguration;
        configuration.partial = configuration.entity.id.category.pluralName + '/' + configuration.macro.name.replace(/_/g, '-');
        configuration.filename = 'Resources/Private/' + configuration.partial + '.html';
        return Promise.resolve(configuration);
    }
}


// Exports
module.exports.FluidConfiguration = FluidConfiguration;
