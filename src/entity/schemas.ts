export interface EntitySchema {
    name: string;
    modules: string[];
    srcPath: string;
    appPath: string;
    apiPath: string;
    modulePath: string;    
    pagePath: string;
}

export enum ModulesEnum {   
    //main files
    src             = 'src',
    app             = 'app',  
    //api
    api             = "api",
    //modules
    config          = "config",
    //pages
    page            = "page",
}