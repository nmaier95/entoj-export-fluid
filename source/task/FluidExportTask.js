'use strict';

/**
 * Requirements
 * @ignore
 */
const FluidExporter = require('../export/FluidExporter.js').FluidExporter;
const ExportTask = require('entoj-system').task.ExportTask;
const GlobalRepository = require('entoj-system').model.GlobalRepository;
const CliLogger = require('entoj-system').cli.CliLogger;
const EntitiesRepository = require('entoj-system').model.entity.EntitiesRepository;


/**
 * @memberOf task
 */
class FluidExportTask extends ExportTask
{
    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [CliLogger, EntitiesRepository, GlobalRepository, FluidExporter] };
    }

    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'task/FluidExportTask';
    }


    /**
     * @inheritDocs
     */
    get sectionName()
    {
        return 'Exporting fluid files';
    }


    /**
     * @inheritDocs
     */
    get exportName()
    {
        return 'fluid';
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidExportTask = FluidExportTask;
