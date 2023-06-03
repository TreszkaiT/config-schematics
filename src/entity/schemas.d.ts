export interface EntitySchema {
    name: string;
    modules: string[];
    srcPath: string;
    appPath: string;
    apiPath: string;
    modulePath: string;
    pagePath: string;
}
export declare enum ModulesEnum {
    src = "src",
    app = "app",
    api = "api",
    config = "config",
    page = "page"
}
