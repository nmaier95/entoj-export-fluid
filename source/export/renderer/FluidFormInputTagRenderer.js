'use strict';

/**
 * Requirements
 * @ignore
 */
const FluidTagNodeRenderer = require('./FluidTagNodeRenderer.js').FluidTagNodeRenderer;
const co = require('co');


/**
 * Render a custom tag node
 *
 * @memberOf export.renderer
 * @extends Base
 */
class FluidFormInputTagRenderer extends FluidTagNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidFormInputTagRenderer';
    }


    /**
     * @return {String}
     */
    getArgumentName(index, argument, configuration)
    {
        //argument.name ist der parameter name übergeben im entoj template beim aufruf des tags
        // if (argument.name == 'class')
        // {
        //     return 'foo';
        // }
        return argument.name || 'param' + index;
    }


    /**
     * @return {String}
     */
    getTagName(node, configuration)
    {
        return configuration.fluidConfiguration.builtinViewHelperNamespace + ':form.textfield';
    }    


    /**
     * @inheritDoc
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && 
            node.is('TagNode') && node.name === 'FormInputTag');
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidFormInputTagRenderer = FluidFormInputTagRenderer;
