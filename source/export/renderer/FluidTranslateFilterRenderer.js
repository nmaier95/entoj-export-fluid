'use strict';

/**
 * Requirements
 * @ignore
 */
const FluidFilterNodeRenderer = require('./FluidFilterNodeRenderer.js').FluidFilterNodeRenderer;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const co = require('co');


/**
 *
 */
class FluidTranslateFilterRenderer extends FluidFilterNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidTranslateFilterRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node &&
            node.is('FilterNode') &&
            node.name == 'translate');
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
            let key = yield configuration.renderer.renderNode(node.value, configuration);
            if (node.value.is('LiteralNode'))
            {
                key = '\'' + key + '\'';
            }
            let result = '';
            result+= 'f:translate(';
            result+= 'key: ' + key;
            result+= ', extensionName: \'' + configuration.fluidConfiguration.translationExtension + '\'';
            result+= ')';
            return result;
        }).catch(ErrorHandler.handler(this));
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidTranslateFilterRenderer = FluidTranslateFilterRenderer;