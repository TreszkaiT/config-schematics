export interface EntitySchema {
    name: string;
    modules: string[];
    appPath: string;
    modulePath: string;
    apiPath: string;
    pagePath: string;
}

export enum ModulesEnum {   
    //main files
    app             = 'app',  
    //api
    api             = "api",
    //modules
    config          = "config",
    //pages
    page            = "page",
}