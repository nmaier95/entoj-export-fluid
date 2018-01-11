'use strict';

// Requirements
const Exporter = require('entoj-system').export.Exporter;
const GlobalRepository = require('entoj-system').model.GlobalRepository;
const BuildConfiguration = require('entoj-system').model.configuration.BuildConfiguration;
const JinjaParser = require('entoj-system').export.parser.JinjaParser;
const FluidRenderer = require('./FluidRenderer.js').FluidRenderer;
const FluidTransformer = require('./FluidTransformer.js').FluidTransformer;
const FluidConfiguration = require('./FluidConfiguration.js').FluidConfiguration;
const FluidModuleConfiguration = require('../configuration/FluidModuleConfiguration.js').FluidModuleConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;


/**
 * @memberOf export
 * @extends export.Renderer
 */
class FluidExporter extends Exporter
{
    /**
     * @ignore
     */
    constructor(globalRepository, buildConfiguration, fluidConfiguration, renderer, transformer)
    {
        super(globalRepository, buildConfiguration, new JinjaParser(), renderer, transformer);

        // Check params
        assertParameter(this, 'fluidConfiguration', fluidConfiguration, true, FluidModuleConfiguration);

        // Assign options
        this._fluidConfiguration = fluidConfiguration;
        this._configurationClass = FluidConfiguration;
    }


    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/FluidExporter';
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': [GlobalRepository, BuildConfiguration, FluidModuleConfiguration, FluidRenderer, FluidTransformer] };
    }


    /**
     * @type {configuration.FluidConfiguration}
     */
    get fluidConfiguration()
    {
        return this._fluidConfiguration;
    }


    /**
     * @protected
     * @param {model.entity.EntityAspect} entity
     * @param {model.documentation.DocumentationCallable} macro
     * @param {Object} settings
     * @returns {Configuration}
     */
    createConfigurationInstance(entity, macro, settings)
    {
        return new this._configurationClass(entity, macro, settings,
            this.parser, this.renderer, this.transformer,
            this.globalRepository, this.buildConfiguration, this.fluidConfiguration);
    }
}


// Exports
module.exports.FluidExporter = FluidExporter;
