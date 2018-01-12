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
                result+= '<!-- macro ' + node.name + ' default values -->';
                if (config.macro)
                {
                    for (const parameter of config.macro.parameters)
                    {
                        if (parameter.name === 'model')
                        {
                            // Disabled for now
                            //result+= '<f:variable name="model" value="{model -> f:or(alternative: data)}" />';
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
                                result+= '<f:variable name="' + parameter.name + '" value="{' + parameter.name + ' -> f:or(alternative: ' + defaultValue + ')}" />';
                            }
                        }
                    }
                }
            }

            // Children
            result+= '<!-- macro ' + node.name + ' body -->';
            result+= yield configuration.renderer.renderList(node.children, configuration);

            return result;
        });
        return promise;
    }
}


// Exports
module.exports.FluidMacroNodeRenderer = FluidMacroNodeRenderer;
