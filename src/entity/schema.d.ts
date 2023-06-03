export interface EntitySchema {
    name: string;
    modules: string[];
    modulePath: string;
    apiPath: string;
    pagePath: string;
}
export declare enum ModulesEnum {
    //api
    api             = "api",
    //modules
    config          = "config",
    //pages
    page            = "page",
}
