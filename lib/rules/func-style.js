/**
 * @fileoverview Rule to enforce a particular function style
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var style = context.options[0],
        enforceDeclarations = (style === "declaration");

    return {

        "FunctionDeclaration": function(node) {
            if (!enforceDeclarations) {
                context.report(node, "Expected a function expression.");
            }
        },

        "FunctionExpression": function() {
            var parent = context.getAncestors().pop();

            if (enforceDeclarations && parent.type === "VariableDeclarator") {
                context.report(parent, "Expected a function declaration.");
            }
        }
    };

};
