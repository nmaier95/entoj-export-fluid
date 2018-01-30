'use strict';

/**
 * Requirements
 * @ignore
 */
const Configuration = require('entoj-system').export.Configuration;
const FluidModuleConfiguration = require('../configuration/FluidModuleConfiguration.js').FluidModuleConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;
const uppercaseFirst = require('entoj-system').utils.string.uppercaseFirst;
const camelCase = require('lodash.camelcase');


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
     * @inheritDoc
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
     * @inheritDoc
     */
    refineConfiguration(configuration)
    {
        configuration.fluid = this.fluidConfiguration;
        if (configuration.macro)
        {
            const baseFilePath = (configuration.type && configuration.type == 'contentelement')
                ? this.fluidConfiguration.contentElementFilePath
                : this.fluidConfiguration.partialFilePath + configuration.entity.id.category.pluralName.replace(/\s/g, '') + '/';
            const baseIncludePath = (configuration.type && configuration.type == 'contentelement')
                ? this.fluidConfiguration.contentElementIncludePath
                : this.fluidConfiguration.partialIncludePath + configuration.entity.id.category.pluralName.replace(/\s/g, '') + '/';

            if (this.settings.filename)
            {
                configuration.partial = '';
                configuration.filename = 'Resources/Private/';
                if (this.settings.filename.indexOf('/') === -1)
                {
                    configuration.partial+= baseIncludePath;
                    configuration.filename+= baseFilePath;
                }
                configuration.partial+= (this.settings.filename.substr(0, this.settings.filename.lastIndexOf('.')) || this.settings.filename);
                configuration.filename+= (this.settings.filename.substr(0, this.settings.filename.lastIndexOf('.')) || this.settings.filename);
            }
            else
            {
                configuration.partial = baseIncludePath + uppercaseFirst(camelCase(configuration.macro.name.replace(/^[a-z]_/g, '')));
                configuration.filename = 'Resources/Private/' + baseFilePath + uppercaseFirst(camelCase(configuration.macro.name.replace(/^[a-z]_/g, '')));
            }
        }
        else
        {
            if (this.settings.filename)
            {
                configuration.partial = '';
                configuration.filename = 'Resources/Private/';
                if (this.settings.filename.indexOf('/') === -1)
                {
                    configuration.partial+= this.fluidConfiguration.layoutIncludePath;
                    configuration.filename+= this.fluidConfiguration.layoutFilePath;
                }
                configuration.partial+= (this.settings.filename.substr(0, this.settings.filename.lastIndexOf('.')) || this.settings.filename);
                configuration.filename+= (this.settings.filename.substr(0, this.settings.filename.lastIndexOf('.')) || this.settings.filename);
            }
            else
            {
                configuration.partial = this.fluidConfiguration.layoutIncludePath + configuration.entity.idString;
                configuration.filename = 'Resources/Private/' + this.fluidConfiguration.layoutFilePath + configuration.entity.idString;
            }
        }
        if (!configuration.filename.endsWith('.html'))
        {
            configuration.filename+= '.html';
        }
        return Promise.resolve(configuration);
    }
}


// Exports
module.exports.FluidConfiguration = FluidConfiguration;
