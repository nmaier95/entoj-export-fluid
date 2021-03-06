'use strict';

/**
 * Requirements
 * @ignore
 */
const ExportCommand = require('entoj-system').command.ExportCommand;
const Context = require('entoj-system').application.Context;
const FluidExportTask = require('../task/FluidExportTask.js').FluidExportTask;
const FluidModuleConfiguration = require('../configuration/FluidModuleConfiguration.js').FluidModuleConfiguration;
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
        this._moduleConfigurationClass = FluidModuleConfiguration;
        this._exportTaskClass = FluidExportTask;
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
        if (!task)
        {
            return Promise.resolve();
        }
        return Promise.resolve(task.pipe(this.context.di.create(BeautifyHtmlTask, mapping)));
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidExportCommand = FluidExportCommand;
