export type Employes = [{
    id: string,
    firstname: string,
    lastname: string,
    birtplace: string,
    birthday: string,
    phone: string,
    job: string,
    state: string,
}];

export type HTMLElement = HTMLTableRowElement | HTMLTableCellElement | HTMLAnchorElement | HTMLSpanElement | HTMLSelectElement | HTMLTableElement;

export type RequestData = {
    method: string,
    headers: { [key: string] : string },
    body?: { [key: string] : any }
}