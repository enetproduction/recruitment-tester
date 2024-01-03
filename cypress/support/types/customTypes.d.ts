export type Selector = (...args: number[] | string[]) => Cypress.Chainable<JQuery<HTMLElement>>;

type SelectorsObject = Record<string, Selector>;
type NestedSelectorsObject = Record<string, SelectorsObject>;
export type Selectors = SelectorsObject | NestedSelectorsObject;
