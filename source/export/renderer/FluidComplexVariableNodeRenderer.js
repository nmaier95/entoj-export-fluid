'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const isPlainObject = require('lodash.isplainobject');
const Node = require('entoj-system').export.ast.Node;
const waitForPromise = require('entoj-system').utils.synchronize.waitForPromise;



/**
 * Render objects
 *
 * @memberOf export.fluid.renderer
 * @extends Base
 */
class FluidComplexVariableNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/FluidComplexVariableNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('ComplexVariableNode'));
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
        const render = (data) =>
        {
            if (!data)
            {
                return '';
            }

            let result = '';
            // Node
            if (data instanceof Node)
            {
                result+= waitForPromise(configuration.renderer.renderNode(data, configuration));
            }
            // Object
            else if (isPlainObject(data))
            {
                const keys = Object.keys(data);
                for (let index = 0; index < keys.length; index++)
                {
                    const key = keys[index];
                    if (isPlainObject(data[key]) || Array.isArray(data[key]))
                    {
                        result+= key + ': {' + render(data[key]) + '}';
                    }
                    else
                    {
                        result+= key + ': ' + render(data[key]);
                    }
                    if (index < keys.length - 1)
                    {
                        result+= ', ';
                    }
                }
            }
            // Array
            else if (Array.isArray(data))
            {
                for (let index = 0; index < data.length; index++)
                {
                    result+= index + ': ' + render(data[index]);
                    if (index < data.length - 1)
                    {
                        result+= ', ';
                    }
                }
            }
            // Simple
            else
            {
                if (typeof data === 'string')
                {
                    result+= '\'' + data + '\'';
                }
                else
                {
                    result+= data;
                }
            }
            return result;
        };
        return Promise.resolve('{ ' + render(node.value) + ' }');
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidComplexVariableNodeRenderer = FluidComplexVariableNodeRenderer;
