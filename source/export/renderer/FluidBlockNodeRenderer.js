'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 * Render a macro invocation
 *
 * @memberOf export.renderer
 * @extends Base
 */
class FluidBlockNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/FluidBlockNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('BlockNode'));
    }


    /**
     * @inheritDocs
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
            result+= '<' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':section name="' + node.name + '">';
            if (node.children && node.children.length)
            {
                result+= yield configuration.renderer.renderList(node.children, configuration);
            }
            result+= '</' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':section>';
            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidBlockNodeRenderer = FluidBlockNodeRenderer;
