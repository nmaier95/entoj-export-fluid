/**
 * Registers with default configurations
 */
function register(configuration, options)
{
    // Commands
    configuration.commands.add(require('./index.js').command.FluidExportCommand);

    // Export
    configuration.mappings.add(require('./index.js').export.FluidRenderer,
        {
            '!nodeRenderers': require('./index.js').export.renderer.rendererList
        });
    configuration.mappings.add(require('./index.js').export.FluidTransformer,
        {
            '!nodeTransformers': require('./index.js').export.transformer.transformerList
        });
}


/**
 * Public Api
 */
module.exports =
{
    register: register,
    command: require('./command/index.js'),
    configuration: require('./configuration/index.js'),
    export: require('./export/index.js'),
    task: require('./task/index.js')
};
