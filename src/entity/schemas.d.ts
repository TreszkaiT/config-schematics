export interface EntitySchema {
    name: string;
    modules: string[];
    appPath: string;
    modulePath: string;
    apiPath: string;
    pagePath: string;
}
export declare enum ModulesEnum {
    app = "app",
    api = "api",
    config = "config",
    page = "page"
}
