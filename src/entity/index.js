"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
function default_1(schema) {
    return (_tree, context) => {
        const moduleSchematics = [];
        ['src', 'app', 'api', 'config', 'page'].forEach((moduleName) => {
            if (schema.modules.includes(moduleName)) {
                moduleSchematics.push((0, schematics_1.schematic)(`entity-${moduleName}`, schema));
            }
        });
        context.logger.info(moduleSchematics.length.toString());
        return (0, schematics_1.chain)(moduleSchematics);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map