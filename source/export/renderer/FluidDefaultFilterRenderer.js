'use strict';

// Requirements
const NodeListRenderer = require('entoj-system').export.renderer.NodeListRenderer;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const co = require('co');


/**
 * Renders |default filter
 */
class FluidDefaultFilterRenderer extends NodeListRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidDefaultFilterRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node &&
            node.is('FilterNode') &&
            node.name == 'default' &&
            node.parent &&
            node.parent.is('OutputNode'));
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
            let result = '';
            result+= yield configuration.renderer.renderNode(node.value, configuration);
            result+= ' -> f:or(alternative:';
            if (node.arguments.length)
            {
                result+= yield configuration.renderer.renderNode(node.arguments[0].value, configuration);
            }
            else
            {
                result+= '\'\'';
            }
            result+= ')';
            return result;
        }).catch(ErrorHandler.handler(this));
        return promise;
    }
}


// Exports
module.exports.FluidDefaultFilterRenderer = FluidDefaultFilterRenderer;
