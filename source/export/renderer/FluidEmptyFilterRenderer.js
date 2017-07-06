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
class FluidEmptyFilterRenderer extends BaseNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'transformer.noderenderer.fluid/EmptyFilterRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, context)
    {
        return Promise.resolve(node instanceof BaseNode &&
            node.is('FilterNode') &&
            (node.name == 'empty' || node.name == 'notempty') &&
            node.parent &&
            node.parent.is('ConditionNode'));
    }


    /**
     * @return {Promise<String>}
     */
    render(node, context)
    {
        const scope = this;
        const promise = co(function*()
        {
            let result = '';
            if (node.name == 'empty')
            {
                result+= '!';
            }
            result+= '{';
            result+= yield scope.renderer.renderNode(node.value, context);
            result+= '}';
            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidEmptyFilterRenderer = FluidEmptyFilterRenderer;
