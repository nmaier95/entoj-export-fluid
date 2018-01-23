'use strict';

// Requirements
const NodeListRenderer = require('entoj-system').export.renderer.NodeListRenderer;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const co = require('co');


/**
 * Renders |mediaQuery filter
 */
class FluidSvgUrlFilterRenderer extends NodeListRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidSvgUrlFilterRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node &&
            node.is('FilterNode') &&
            node.name == 'svgUrl');
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
            // @todo this is rather a hack than a solution.
            // we are relying on the outer rendering providing a { ... }
            let result = 'settings.entoj.svgUrl';
            result+= '}{' + name + '}';
            result+= '{f:format.raw(\'.svg#icon\')';
            return result;
        }).catch(ErrorHandler.handler(this));
        return promise;
    }
}


// Exports
module.exports.FluidSvgUrlFilterRenderer = FluidSvgUrlFilterRenderer;
