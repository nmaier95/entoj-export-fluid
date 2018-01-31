'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;


/**
 * @memberOf export.renderer
 * @extends Base
 */
class FluidLiteralNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/FluidLiteralNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('LiteralNode'));
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
        let result = '';
        if ((node.isChildOf(['ConditionNode', 'ArrayNode', 'ParameterNode'])) &&
             node.valueType == 'string')
        {
            result+= '\'' + node.value.replace(/"/g, '\\"') + '\'';
        }
        else if (node.valueType == 'string')
        {
            result+= node.value.replace(/"/g, '\\"');
        }
        else if(node.valueType == 'boolean')
        {
            node.value === true ? result+= 1 : result+= 0;
        }
        else
        {
            result+= node.value;
        }
        return Promise.resolve(result);
    }
}


// Exports
module.exports.FluidLiteralNodeRenderer = FluidLiteralNodeRenderer;
