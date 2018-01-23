'use strict';

// Requirements
const NodeListRenderer = require('entoj-system').export.renderer.NodeListRenderer;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const co = require('co');


/**
 * Renders |setProperty/|set filter
 */
class FluidSetFilterRenderer extends NodeListRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidSetFilterRenderer';
    }


    /**
     * @return {Boolean}
     */
    isSet(node, configuration)
    {
        return node &&
               node.is('SetNode') &&
               node.value &&
               node.value.is('ExpressionNode') &&
               node.value.children.length === 1 &&
               node.value.children[0].is('FilterNode') &&
               (node.value.children[0].name == 'set' || node.value.children[0].name == 'setProperty');
    }


    /**
     * @return {Promise<Boolean>}
     */
    isOutput(node, configuration)
    {
        return node &&
               node.is('OutputNode') &&
               node.children.length === 1 &&
               node.children[0].is('FilterNode') &&
               (node.children[0].name == 'set' || node.children[0].name == 'setProperty');
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(this.isSet(node, configuration) ||
            this.isOutput(node, configuration));
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
        const scope = this;
        const promise = co(function*()
        {
            const filter = (scope.isSet(node, configuration)) ? node.value.children[0] : node.children[0];
            const name = yield configuration.renderer.renderNode(filter.value, configuration);
            let key = '';
            let value = '';
            if (filter.arguments.length >= 1)
            {
                key = yield configuration.renderer.renderNode(filter.arguments[0].value, configuration);
            }
            if (filter.arguments.length >= 2)
            {
                value = yield configuration.renderer.renderNode(filter.arguments[1].value, configuration);
            }

            let result = '';
            if (scope.isSet(node))
            {
                result+= '<' + configuration.fluidConfiguration.entojViewHelperNamespace + ':setProperty ';
                result+= 'name="' + name + '" ';
                result+= 'key="' + key + '" ';
                result+= 'value="' + value + '"';
                result+= ' />';
            }
            else
            {
                result+= '{';
                result+= yield configuration.renderer.renderNode(filter.value, configuration);
                result+= ' -> ' + configuration.fluidConfiguration.entojViewHelperNamespace + ':setProperty(';
                result+= 'name: \'' + name + '\', ';
                result+= 'key: ' + key + ', ';
                result+= 'value: ' + value;
                result+= ')';
                result+= '}';
            }

            return result;
        }).catch(ErrorHandler.handler(this));
        return promise;
    }
}


// Exports
module.exports.FluidSetFilterRenderer = FluidSetFilterRenderer;
