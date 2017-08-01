'use strict';

/**
 * Requirements
 * @ignore
 */
const ExportCommand = require('entoj-system').command.ExportCommand;
const Context = require('entoj-system').application.Context;
const FluidExportTask = require('../task/FluidExportTask.js').FluidExportTask;
const FluidConfiguration = require('../configuration/FluidConfiguration.js').FluidConfiguration;
const BeautifyHtmlTask = require('entoj-html').task.BeautifyHtmlTask;


/**
 * @memberOf command
 */
class FluidExportCommand extends ExportCommand
{
    /**
     * @param {application.Context} context
     */
    constructor(context)
    {
        super(context);

        // Assign options
        this._exportName = 'fluid';
        this._exportConfigurationClass = FluidConfiguration;
        this._exportTaskClass = FluidExportTask;
        this._loggerPrefix = 'command.export.fluid';
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [Context] };
    }


    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'command/FluidExportCommand';
    }


    /**
     * @inheritDocs
     */
    addTasks(task, mapping)
    {
        return Promise.resolve(task.pipe(this.context.di.create(BeautifyHtmlTask, mapping)));
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidExportCommand = FluidExportCommand;
