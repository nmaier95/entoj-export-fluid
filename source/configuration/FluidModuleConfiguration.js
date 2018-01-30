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
class FluidModuleConfiguration extends Base
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
        this._translationExtension = globalConfiguration.get('fluid.translationExtension', 'local');
        this._contentElementFilePath = globalConfiguration.get('fluid.contentElementFilePath', 'Templates/ContentElement/');
        this._contentElementIncludePath = globalConfiguration.get('fluid.contentElementIncludePath', 'Templates/ContentElement/');
        this._partialFilePath = globalConfiguration.get('fluid.partialFilePath', 'Partials/');
        this._partialIncludePath = globalConfiguration.get('fluid.partialIncludePath', 'Partials/');
        this._layoutFilePath = globalConfiguration.get('fluid.layoutFilePath', 'Layouts/Page/');
        this._layoutIncludePath = globalConfiguration.get('fluid.layoutIncludePath', 'Layouts/Page/');
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [GlobalConfiguration] };
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'configuration/FluidModuleConfiguration';
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


    /**
     * The TYPO3 extension used for translation strings
     *
     * @type {String}
     */
    get translationExtension()
    {
        return this._translationExtension;
    }


    /**
     * The file path to ContentElement inside of Resources/Private
     *
     * @type {String}
     */
    get contentElementFilePath()
    {
        return this._contentElementFilePath;
    }


    /**
     * The include path to ContentElement inside of Resources/Private
     *
     * @type {String}
     */
    get contentElementIncludePath()
    {
        return this._contentElementIncludePath;
    }


    /**
     * The file path to Partials inside of Resources/Private
     *
     * @type {String}
     */
    get partialFilePath()
    {
        return this._partialFilePath;
    }


    /**
     * The include path to Partials inside of Resources/Private
     *
     * @type {String}
     */
    get partialIncludePath()
    {
        return this._partialIncludePath;
    }


    /**
     * The file path to Layouts inside of Resources/Private
     *
     * @type {String}
     */
    get layoutFilePath()
    {
        return this._layoutFilePath;
    }


    /**
     * The include path to Layouts inside of Resources/Private
     *
     * @type {String}
     */
    get layoutIncludePath()
    {
        return this._layoutIncludePath;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidModuleConfiguration = FluidModuleConfiguration;
