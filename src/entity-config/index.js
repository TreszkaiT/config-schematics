"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
function generateFiles(schema) {
    const path = schema.modulePath + "/"; // + schema.name + "/";
    return (tree, context) => {
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)("./files"), [
            (0, schematics_1.applyTemplates)(Object.assign(Object.assign({}, core_1.strings), schema)),
            (0, schematics_1.move)(path),
        ]);
        return (0, schematics_1.chain)([(0, schematics_1.mergeWith)(templateSource)])(tree, context);
    };
}
function default_1(schema) {
    return (tree, context) => {
        return (0, schematics_1.chain)([generateFiles(schema)])(tree, context);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map