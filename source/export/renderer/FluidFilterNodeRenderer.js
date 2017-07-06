'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 * Render expressions used for e.g. in set tags
 *
 * @memberOf export.renderer
 * @extends Base
 */
class FluidFilterNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/FluidFilterNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('FilterNode'));
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
            result+= yield configuration.renderer.renderNode(node.value, configuration);
            result+= ' -> f:' + node.name + '(';

            if (node.arguments)
            {
                for (const index of node.arguments.keys())
                {
                    const argument = node.arguments[index];
                    result+= argument.name || 'param' + index;
                    result+= ':';
                    result+= yield configuration.renderer.renderNode(argument.value, configuration);
                    if (index < node.arguments.length - 1)
                    {
                        result+= ', ';
                    }
                }
            }

            result+= ')';
            return result;
        });
        return promise;
    }
}


// Exports
module.exports.FluidFilterNodeRenderer = FluidFilterNodeRenderer;
