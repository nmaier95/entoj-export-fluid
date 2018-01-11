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
    FluidAnyNodeRenderer: require('entoj-system').export.renderer.AnyNodeRenderer,

    // Renderers
    rendererList:
    [
        // Filters
        require('./FluidDefaultFilterRenderer.js').FluidDefaultFilterRenderer,
        require('./FluidEmptyFilterRenderer.js').FluidEmptyFilterRenderer,
        require('./FluidModuleClassesFilterRenderer.js').FluidModuleClassesFilterRenderer,

        // Standards
        require('./FluidArrayNodeRenderer.js').FluidArrayNodeRenderer,
        require('./FluidBlockNodeRenderer.js').FluidBlockNodeRenderer,
        require('./FluidBooleanOperandNodeRenderer.js').FluidBooleanOperandNodeRenderer,
        require('./FluidCallNodeRenderer.js').FluidCallNodeRenderer,
        require('./FluidComplexVariableNodeRenderer.js').FluidComplexVariableNodeRenderer,
        require('./FluidConditionNodeRenderer.js').FluidConditionNodeRenderer,
        require('./FluidExpressionNodeRenderer.js').FluidExpressionNodeRenderer,
        require('./FluidFilterNodeRenderer.js').FluidFilterNodeRenderer,
        require('./FluidForNodeRenderer.js').FluidForNodeRenderer,
        require('./FluidGroupNodeRenderer.js').FluidGroupNodeRenderer,
        require('./FluidIfNodeRenderer.js').FluidIfNodeRenderer,
        require('./FluidLiteralNodeRenderer.js').FluidLiteralNodeRenderer,
        require('./FluidMacroNodeRenderer.js').FluidMacroNodeRenderer,
        require('./FluidOperandNodeRenderer.js').FluidOperandNodeRenderer,
        require('./FluidOutputNodeRenderer.js').FluidOutputNodeRenderer,
        require('./FluidSetNodeTenaryRenderer.js').FluidSetNodeTenaryRenderer,
        require('./FluidSetNodeRenderer.js').FluidSetNodeRenderer,
        require('./FluidVariableNodeRenderer.js').FluidVariableNodeRenderer,
        require('entoj-system').export.renderer.TextNodeRenderer
    ]
};
