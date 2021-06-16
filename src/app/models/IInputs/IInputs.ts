export interface IInputs {
    class: string;
    label: ILabel
    iatribs: IAtribs
}

export interface ILabel{
    for: string,
    class: string,
    show: boolean,
    value: string
}

export interface IAtribs {
    type: string,
    class: string,
    id: string,
    name: string,
    placeHolder: string,
    value: string
}

