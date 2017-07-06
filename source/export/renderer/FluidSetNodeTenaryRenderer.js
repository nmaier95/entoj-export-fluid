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
            result+= '<f:if condition="';
            result+= yield configuration.renderer.renderNode(ifNode.condition, configuration);
            result+= '">';
            result+= '<f:then>';
            result+= '<e:variable';
            result+= ' name="';
            result+= yield configuration.renderer.renderNode(node.variable, configuration);
            result+= '" value="';
            result+= yield configuration.renderer.renderList(ifNode.children, configuration);
            result+= '" />';
            result+= '</f:then>';
            result+= '<f:else>';
            result+= '<e:variable';
            result+= ' name="';
            result+= yield configuration.renderer.renderNode(node.variable, configuration);
            result+= '" value="';
            result+= yield configuration.renderer.renderList(ifNode.elseChildren, configuration);
            result+= '" />';
            result+= '</f:else>';
            result+= '</f:if>';
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
