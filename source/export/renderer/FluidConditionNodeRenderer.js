'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeListRenderer = require('entoj-system').export.renderer.NodeListRenderer;


/**
 * Render conditions used in if tags
 *
 * @memberOf export.renderer
 * @extends Base
 */
class FluidConditionNodeRenderer extends NodeListRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/FluidConditionNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('ConditionNode'));
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidConditionNodeRenderer = FluidConditionNodeRenderer;
