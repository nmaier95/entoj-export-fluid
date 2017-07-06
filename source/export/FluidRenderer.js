'use strict';

// Requirements
const Renderer = require('entoj-system').export.Renderer;
const renderers = require('./renderer/index.js');


/**
 * @memberOf export
 * @extends export.Renderer
 */
class FluidRenderer extends Renderer
{
    /**
     * @ignore
     */
    constructor(nodeRenderers, options)
    {
        let instances = nodeRenderers;
        if (!instances || !instances.length)
        {
            instances = Object.keys(renderers).map((value) => new renderers[value]());
        }
        super(instances, options);
    }

    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/FluidRenderer';
    }
}


// Exports
module.exports.FluidRenderer = FluidRenderer;
