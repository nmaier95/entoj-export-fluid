'use strict';

// Requirements
const NodeListRenderer = require('entoj-system').export.renderer.NodeListRenderer;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const co = require('co');
const VinylFile = require('vinyl');



/**
 * Renders |moduleClasses filter
 */
class FluidModuleClassesFilterRenderer extends NodeListRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidModuleClassesFilterRenderer';
    }


    /**
     * @inheritDocs
     */
    createAdditionalFiles(configuration)
    {
        const result = '{moduleClass} <' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':for each="{types as array}" as="type"><' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':if condition="{type}">{moduleClass}--{type} </' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':if></' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':for>';
        const file = new VinylFile(
            {
                path: 'Resources/Private/' + configuration.fluidConfiguration.partialFilePath + 'Helper/ModuleClassesFilter.html',
                contents: new Buffer(result)
            });
        return Promise.resolve([file]);
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node &&
            node.is('FilterNode') &&
            node.name == 'moduleClasses');
    }


    /**
     * @return {Promise<String>}
     */
    render(node, configuration)
    {
        if (!node || !configuration)
        {
            return Promise.resolve('');
        }
        const promise = co(function*()
        {
            const types = node.value.is('VariableNode')
                ? node.value.fields.join('.')
                : yield configuration.renderer.renderNode(node.value, configuration);
            let moduleClass = '\'\'';
            if (node.arguments && node.arguments.length == 1)
            {
                const argument = node.arguments[0];
                moduleClass = yield configuration.renderer.renderNode(argument.value, configuration);
            }
            let result = '';
            result+= '' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':render(partial: \'Helper/ModuleClassesFilter\', ';
            result+= 'arguments:{types: ' + types + ', moduleClass: ' + moduleClass + '})';
            return result;
        }).catch(ErrorHandler.handler(this));
        return promise;
    }
}


// Exports
module.exports.FluidModuleClassesFilterRenderer = FluidModuleClassesFilterRenderer;
