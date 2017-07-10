'use strict';

/**
 * Requirements
 * @ignore
 */
const Base = require('entoj-system').Base;
const GlobalConfiguration = require('entoj-system').model.configuration.GlobalConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;


/**
 * @memberOf configuration
 */
class FluidConfiguration extends Base
{
    /**
     * @param  {model.configuration.GlobalConfiguration} globalConfiguration
     */
    constructor(globalConfiguration)
    {
        super();

        //Check params
        assertParameter(this, 'globalConfiguration', globalConfiguration, true, GlobalConfiguration);

        // Create configuration
        this._exportPath = globalConfiguration.get('fluid.exportPath', '${cache}/fluid/export');
        this._builtinViewHelperNamespace = globalConfiguration.get('fluid.builtinViewHelperNamespace', 'f');
        this._entojViewHelperNamespace = globalConfiguration.get('fluid.entojViewHelperNamespace', 'e');
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': [GlobalConfiguration] };
    }


    /**
     * @inheritDocss
     */
    static get className()
    {
        return 'configuration/FluidConfiguration';
    }


    /**
     * The path to the folder where files are exported to
     *
     * @type {String}
     */
    get exportPath()
    {
        return this._exportPath;
    }


    /**
     * The namespace used to adress built in view helpers (f -> name())
     *
     * @type {String}
     */
    get builtinViewHelperNamespace()
    {
        return this._builtinViewHelperNamespace;
    }


    /**
     * The namespace used to adress entoj view helpers
     *
     * @type {String}
     */
    get entojViewHelperNamespace()
    {
        return this._entojViewHelperNamespace;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidConfiguration = FluidConfiguration;
