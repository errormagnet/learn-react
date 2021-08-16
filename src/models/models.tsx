import {Robots} from "./robots";

export interface State {
    robots: Robots[],
    search_query: string
}

export interface ErrorState {
    hasError: boolean
}
