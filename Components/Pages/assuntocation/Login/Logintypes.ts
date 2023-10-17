export type propstype = {
    state_functions: {
            Appcontent: (value : "left" | "right") => void ;
            leftboxcomponent: (componentName:"Register" | "Forget") => void; 
        };
}