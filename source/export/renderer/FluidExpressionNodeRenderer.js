'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeListRenderer = require('entoj-system').export.renderer.NodeListRenderer;
const co = require('co');


/**
 * Render expressions used for e.g. in set tags
 *
 * @memberOf export.renderer
 * @extends Base
 */
class FluidExpressionNodeRenderer extends NodeListRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/FluidExpressionNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('ExpressionNode'));
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
            let useCurly = false;            
            // use curly when operands with numbers are used
            if (node.find('OperandNode') && node.find('LiteralNode', { valueType: 'number' }))
            {
                useCurly = true;
            }
            // use curly when filters are used
            if (node.find('FilterNode'))
            {
                useCurly = true;
            }
            // use curly when tag and only one variable
            if (node.parent.is('ArgumentNode') &&
                node.isChildOf('TagNode') &&
                node.children.length == 1 &&
                node.find('VariableNode'))
            {
                useCurly = true;
            }            
            const result = yield configuration.renderer.renderList(node.children, configuration);
            if (useCurly)
            {
                return '{' + result + '}';
            }
            return result;
        });
        return promise;
    }
}


// Exports
module.exports.FluidExpressionNodeRenderer = FluidExpressionNodeRenderer;
