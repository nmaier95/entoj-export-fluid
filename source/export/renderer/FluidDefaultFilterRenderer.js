'use strict';

// Requirements
const BaseNode = require('../../node/BaseNode.js').BaseNode;
const BaseNodeRenderer = require('../BaseNodeRenderer.js').BaseNodeRenderer;
const co = require('co');


/**
 *
 */
class FluidDefaultFilterRenderer extends BaseNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'transformer.noderenderer.fluid/DefaultFilterRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node instanceof BaseNode &&
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
        const scope = this;
        const promise = co(function*()
        {
            let result = '';
            const value =  yield scope.renderer.renderNode(node.value, configuration);
            let defaultValue = "''";
            if (node.configuration.children.length)
            {
                defaultValue = yield scope.renderer.renderNode(node.configuration.children[0].value, configuration);
            }
            result+= value + ' -> e:default(defaultValue:' + defaultValue + ')';
            return result;
        });
        return promise;
    }
}


// Exports
module.exports.DefaultFilterRenderer = DefaultFilterRenderer;
