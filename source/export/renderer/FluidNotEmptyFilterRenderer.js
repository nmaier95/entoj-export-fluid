'use strict';

/**
 * Requirements
 * @ignore
 */
const BaseNode = require('../../node/BaseNode.js').BaseNode;
const BaseNodeRenderer = require('../BaseNodeRenderer.js').BaseNodeRenderer;
const co = require('co');


/**
 *
 */
class FluidNotEmptyFilterRenderer extends BaseNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'transformer.noderenderer.fluid/NotEmptyFilterRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node instanceof BaseNode &&
            node.is('FilterNode') &&
            node.name == 'notempty');
    }


    /**
     * @return {Promise<String>}
     */
    render(node, configuration)
    {
        const scope = this;
        const promise = co(function*()
        {
            let result = '';
            result+= yield scope.renderer.renderNode(node.value, configuration);
            result+= ' is not empty ';
            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidNotEmptyFilterRenderer = FluidNotEmptyFilterRenderer;
