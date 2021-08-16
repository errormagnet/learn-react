import { Robots } from "./models/robots";
import CardList from "./card/CardList";
import React from "react";
import Search from "./shared/Search";
import { State } from "./models/models";
import Scroll from "./shared/Scroll";
import ErrorBoundary from "./shared/ErrorBoundary";

class App extends React.Component<{}, State> {
    constructor(state: Robots) {
        super(state);
        this.state = {
            robots: [],
            search_query: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(botsResponse => botsResponse.json())
            .then(bots => this.setState({...this.state, robots: bots}));
    }

    onSearch = (event: any) => {
        this.setState({...this.state, search_query: event.target.value});
    }

    render() {
        return (!(this.state.robots || []).length) ?
            <h1 className='tc'>Populating</h1>
            : (
                <div className='pa2 tc'>
                    <h1>Robot Friends</h1>
                    <Search search={this.onSearch}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList state={this.state}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
    };
}

export default App;
