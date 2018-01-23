'use strict';

// Requirements
const NodeListRenderer = require('entoj-system').export.renderer.NodeListRenderer;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const co = require('co');


/**
 * Renders |mediaQuery filter
 */
class FluidMediaQueryFilterRenderer extends NodeListRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidMediaQueryFilterRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node &&
            node.is('FilterNode') &&
            node.name == 'mediaQuery');
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
            const name = yield configuration.renderer.renderNode(node.value, configuration);
            let result = 'settings.entoj.mediaQueries';
            if (node.value.is('LiteralNode'))
            {
                result+= '.' + name;
            }
            else
            {
                result+= '.{' + name + '}';
            }
            return result;
        }).catch(ErrorHandler.handler(this));
        return promise;
    }
}


// Exports
module.exports.FluidMediaQueryFilterRenderer = FluidMediaQueryFilterRenderer;
