'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const trimQuotes = require('entoj-system').utils.string.trimQuotes;
const co = require('co');


/**
 * Renders a macro as a partial
 */
class FluidMacroNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidMacroNodeRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('MacroNode'));
    }


    /**
     * @return {Promise<String>}
     */
    render(node, configuration)
    {
        if (!node)
        {
            return Promise.resolve('');
        }
        const promise = co(function*()
        {
            // Prepare
            let result = '';

            // Get all default configuration
            const config = yield configuration.getMacroConfiguration(node.name);
            if (config)
            {
                result+= yield configuration.renderer.renderComment('macro ' + node.name + ' default values');
                if (config.macro)
                {
                    for (const parameter of config.macro.parameters)
                    {
                        if (parameter.name === 'model')
                        {
                            // Disabled for now
                            //result+= '<' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':variable name="model" value="{model -> ' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':or(alternative: data)}" />';
                        }
                        else
                        {
                            if (typeof parameter.defaultValue !== 'undefined' &&
                                parameter.defaultValue !== '' &&
                                parameter.defaultValue !== '\'\'' &&
                                parameter.defaultValue !== false &&
                                parameter.defaultValue !== 'false')
                            {
                                let defaultValue = parameter.defaultValue;
                                if (parameter.type[0] == 'Enumeration')
                                {
                                    defaultValue = '\'' + trimQuotes(defaultValue) + '\'';
                                }
                                else if(parameter.type[0] == 'Boolean' || defaultValue === 'true')
                                {
                                    //same logic as if it was a literal-node of type boolean
                                    defaultValue = defaultValue === 'true' ? '1' : '0';
                                }
                                result+= '<' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':variable name="' + parameter.name + '" value="{' + parameter.name + ' -> ' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':or(alternative: ' + defaultValue + ')}" />';
                            }
                        }
                    }
                }
            }

            // Children
            result+= yield configuration.renderer.renderComment('macro ' + node.name + ' body');
            result+= yield configuration.renderer.renderList(node.children, configuration);
            result+= yield configuration.renderer.renderComment('macro ' + node.name + ' body end');

            return result;
        });
        return promise;
    }
}


// Exports
module.exports.FluidMacroNodeRenderer = FluidMacroNodeRenderer;
