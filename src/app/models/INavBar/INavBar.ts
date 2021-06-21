export interface Navbar {
    items: Item[],
    brand: Brand,
    class: string,
}

export interface Item {
    label:      string,
    icon:       string,
    showIcon:   boolean,
    showLabel:  boolean,
    href:       string
}

export interface Brand {
    label:      string,
    icon:       string,
    image:      string,
    showLabel:  boolean,
    showIcon:   boolean,
    showImage:  boolean
}