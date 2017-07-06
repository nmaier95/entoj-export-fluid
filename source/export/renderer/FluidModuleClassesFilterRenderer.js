'use strict';

// Requirements
const BaseNode = require('../../node/BaseNode.js').BaseNode;
const BaseNodeRenderer = require('../BaseNodeRenderer.js').BaseNodeRenderer;
const co = require('co');


/**
 *
 */
class FluidModuleClassesFilterRenderer extends BaseNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'transformer.renderer/FluidModuleClassesFilterRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node instanceof BaseNode &&
            node.is('FilterNode') &&
            node.name == 'moduleClasses');
    }


    /**
     * @return {Promise<String>}
     */
    render(node, configuration)
    {
        const scope = this;
        const promise = co(function*()
        {
            let result = '';
            const modificators =  yield scope.renderer.renderNode(node.value, configuration);
            let moduleclass= '\'\'';
            if (node.configuration.children.length)
            {
                moduleclass= yield scope.renderer.renderNode(node.configuration.children[0].value, configuration);
            }
            result+= moduleclass + ' -> e:moduleClasses(modificators:' + modificators + ')';
            return result;
        });
        return promise;
    }
}


// Exports
module.exports.FluidModuleClassesFilterRenderer = FluidModuleClassesFilterRenderer;
