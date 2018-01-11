'use strict';

// Requirements
const Configuration = require('entoj-system').export.Configuration;
const FluidModuleConfiguration = require('../configuration/FluidModuleConfiguration.js').FluidModuleConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;
const uppercaseFirst = require('entoj-system').utils.string.uppercaseFirst;


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
    refineConfiguration(configuration)
    {
        configuration.fluid = this.fluidConfiguration;
        if (configuration.macro)
        {
            const basePath = (configuration.type && configuration.type == 'contentelement')
                ? 'Templates/ContentElement/'
                : 'Partials/' + configuration.entity.id.category.pluralName.replace(/\s/g, '') + '/';
            if (this.settings.filename)
            {
                configuration.partial = '';
                if (this.settings.filename.indexOf('/') === -1)
                {
                    configuration.partial+= basePath;
                }
                configuration.partial+= (this.settings.filename.substr(0, this.settings.filename.lastIndexOf('.')) || this.settings.filename);
            }
            else
            {
                configuration.partial = basePath + uppercaseFirst(configuration.macro.name.replace(/^[a-z]_/g, ''));
            }
        }
        else
        {
            if (this.settings.filename)
            {
                configuration.partial = '';
                if (this.settings.filename.indexOf('/') === -1)
                {
                    configuration.partial+= 'Layouts/Page/';
                }
                configuration.partial+= (this.settings.filename.substr(0, this.settings.filename.lastIndexOf('.')) || this.settings.filename);
            }
            else
            {
                configuration.partial = 'Layouts/Page/' + configuration.entity.idString;
            }
        }
        configuration.filename = 'Resources/Private/' + configuration.partial + '.html';
        return Promise.resolve(configuration);
    }
}


// Exports
module.exports.FluidConfiguration = FluidConfiguration;
