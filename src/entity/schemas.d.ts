export interface EntitySchema {
    name: string;
    modules: string[];
    modulePath: string;
    apiPath: string;
    pagePath: string;
}
export declare enum ModulesEnum {
    api = "api",
    config = "config",
    page = "page"
}
