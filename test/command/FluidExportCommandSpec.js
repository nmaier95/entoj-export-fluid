'use strict';

/**
 * Requirements
 */
const FluidExportCommand = require(FLOW_SOURCE + '/command/FluidExportCommand.js').FluidExportCommand;
const exportCommandSpec = require('entoj-system/test').command.ExportCommandShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(FluidExportCommand.className, function()
{
    /**
     * Command Test
     */
    function prepareParameters()
    {
        const fixture = projectFixture.createDynamic();
        return [fixture.context];
    }

    exportCommandSpec(FluidExportCommand, 'command/FluidExportCommand', prepareParameters, { action: 'fluid' });
});
