'use strict';

// Requirements
const Configuration = require('entoj-system').export.Configuration;
const FluidModuleConfiguration = require('../configuration/FluidModuleConfiguration.js').FluidModuleConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;


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
            if (this.settings.filename)
            {
                configuration.partial = '';
                if (this.settings.filename.indexOf('/') === -1)
                {
                    //configuration.partial+= 'Templates/ContentElements/' + configuration.entity.id.category.pluralName + '/';
                    configuration.partial+= 'Templates/ContentElements/';
                }
                configuration.partial+= (this.settings.filename.substr(0, this.settings.filename.lastIndexOf('.')) || this.settings.filename);
            }
            else
            {
                //configuration.partial = 'Templates/ContentElements/' + configuration.entity.id.category.pluralName + '/' + configuration.macro.name.replace(/_/g, '-');
                configuration.partial = 'Templates/ContentElements/' + configuration.macro.name.replace(/_/g, '-');
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
