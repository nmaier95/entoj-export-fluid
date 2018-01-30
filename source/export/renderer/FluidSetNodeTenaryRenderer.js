'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 *
 */
class FluidSetNodeTenaryRenderer extends NodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'transformer.renderer/FluidSetNodeTenaryRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node &&
            node.is('SetNode') &&
            node.value &&
            node.value.find('IfNode'));
    }


    /**
     * @return {Promise<String>}
     */
    render(node, configuration)
    {
        const promise = co(function*()
        {
            const ifNode = node.value.find('IfNode');
            let result = '';
            result+= '<' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':if condition="';
            result+= yield configuration.renderer.renderNode(ifNode.condition, configuration);
            result+= '">';
            result+= '<' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':then>';
            result+= '<' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':variable';
            result+= ' name="';
            result+= yield configuration.renderer.renderNode(node.variable, configuration);
            result+= '" value="';
            result+= yield configuration.renderer.renderList(ifNode.children, configuration);
            result+= '" />';
            result+= '</' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':then>';
            result+= '<' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':else>';
            result+= '<' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':variable';
            result+= ' name="';
            result+= yield configuration.renderer.renderNode(node.variable, configuration);
            result+= '" value="';
            result+= yield configuration.renderer.renderList(ifNode.elseChildren, configuration);
            result+= '" />';
            result+= '</' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':else>';
            result+= '</' + configuration.fluidConfiguration.builtinViewHelperNamespace + ':if>';
            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidSetNodeTenaryRenderer = FluidSetNodeTenaryRenderer;
