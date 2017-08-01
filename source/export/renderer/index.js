/**
 * @namespace export.renderer
 */
module.exports =
{
    // Filters
    FluidDefaultFilterRenderer: require('./FluidDefaultFilterRenderer.js').FluidDefaultFilterRenderer,
    FluidEmptyFilterRenderer: require('./FluidEmptyFilterRenderer.js').FluidEmptyFilterRenderer,
    FluidModuleClassesFilterRenderer: require('./FluidModuleClassesFilterRenderer.js').FluidModuleClassesFilterRenderer,

    // Standards
    FluidArrayNodeRenderer: require('./FluidArrayNodeRenderer.js').FluidArrayNodeRenderer,
    FluidBlockNodeRenderer: require('./FluidBlockNodeRenderer.js').FluidBlockNodeRenderer,
    FluidBooleanOperandNodeRenderer: require('./FluidBooleanOperandNodeRenderer.js').FluidBooleanOperandNodeRenderer,
    FluidCallNodeRenderer: require('./FluidCallNodeRenderer.js').FluidCallNodeRenderer,
    FluidComplexVariableNodeRenderer: require('./FluidComplexVariableNodeRenderer.js').FluidComplexVariableNodeRenderer,
    FluidConditionNodeRenderer: require('./FluidConditionNodeRenderer.js').FluidConditionNodeRenderer,
    FluidExpressionNodeRenderer: require('./FluidExpressionNodeRenderer.js').FluidExpressionNodeRenderer,
    FluidFilterNodeRenderer: require('./FluidFilterNodeRenderer.js').FluidFilterNodeRenderer,
    FluidForNodeRenderer: require('./FluidForNodeRenderer.js').FluidForNodeRenderer,
    FluidGroupNodeRenderer: require('./FluidGroupNodeRenderer.js').FluidGroupNodeRenderer,
    FluidIfNodeRenderer: require('./FluidIfNodeRenderer.js').FluidIfNodeRenderer,
    FluidLiteralNodeRenderer: require('./FluidLiteralNodeRenderer.js').FluidLiteralNodeRenderer,
    FluidMacroNodeRenderer: require('./FluidMacroNodeRenderer.js').FluidMacroNodeRenderer,
    FluidOperandNodeRenderer: require('./FluidOperandNodeRenderer.js').FluidOperandNodeRenderer,
    FluidOutputNodeRenderer: require('./FluidOutputNodeRenderer.js').FluidOutputNodeRenderer,
    FluidSetNodeTenaryRenderer: require('./FluidSetNodeTenaryRenderer.js').FluidSetNodeTenaryRenderer,
    FluidSetNodeRenderer: require('./FluidSetNodeRenderer.js').FluidSetNodeRenderer,
    FluidVariableNodeRenderer: require('./FluidVariableNodeRenderer.js').FluidVariableNodeRenderer,
    FluidTextNodeRenderer: require('entoj-system').export.renderer.TextNodeRenderer,

    // Fallback
    FluidAnyNodeRenderer: require('entoj-system').export.renderer.AnyNodeRenderer
};
