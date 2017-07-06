'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 * Render a static array value
 *
 * @memberOf export.renderer
 * @extends Base
 */
class FluidArrayNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/FluidArrayNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('ArrayNode'));
    }


    /**
     * @inheritDocs
     */
    render(node, configuration)
    {
        if (!node)
        {
            return Promise.resolve('');
        }
        const promise = co(function*()
        {
            let result = '';
            result+= '{';
            for (let index = 0; index < node.children.length; index++)
            {
                const item = yield configuration.renderer.renderNode(node.children[index], configuration);
                result+= index + ':' + item;
                if (index < node.children.length - 1)
                {
                    result+= ', ';
                }
            }
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
module.exports.FluidArrayNodeRenderer = FluidArrayNodeRenderer;
