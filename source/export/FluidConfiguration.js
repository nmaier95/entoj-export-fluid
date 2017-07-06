'use strict';

// Requirements
const Configuration = require('entoj-system').export.Configuration;


/**
 * @memberOf export.fluid
 * @extends export.Configuration
 */
class FluidConfiguration extends Configuration
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/FluidConfiguration';
    }


    /**
     * @inheritDocs
     */
    refineMacroConfiguration(configuration)
    {
        configuration.partial = configuration.macro.name.replace(/_/g, '-');
        configuration.filename = 'Resources/Private/' + configuration.partial + '.html';
        return Promise.resolve(configuration);
    }
}


// Exports
module.exports.FluidConfiguration = FluidConfiguration;
