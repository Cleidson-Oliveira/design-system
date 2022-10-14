type TStaticClass = string;

export interface IDinamicClass {
    [key: string]: boolean
}

export const clsx = (staticClass: TStaticClass, ...dinamicClasses: IDinamicClass[]) => {

    let dinamicClassTarget = "";

    dinamicClasses.forEach(dinamicClass => {

        dinamicClassTarget += " " + Object.keys(dinamicClass).find((key) => dinamicClass[key] === true);

    })
    
    return `${staticClass} ${dinamicClassTarget}`;
}
