'use strict';

// Requirements
const Transformer = require('entoj-system').export.Transformer;


/**
 * @memberOf export
 * @extends export.Transformer
 */
class FluidTransformer extends Transformer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/FluidTransformer';
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': ['export/FluidTransformer.nodeTransformers'] };
    }
}


// Exports
module.exports.FluidTransformer = FluidTransformer;
