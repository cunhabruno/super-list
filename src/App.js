/* @flow */
import React, {Component} from 'react';
import './App.css';
import SearchBox from './Components/SearchBox'
import List from './Components/List';
import uuid from 'uuid';

type stateType = {
    searchTerm: string,
    list: Object[]
}

class App extends Component<void, stateType> {
    constructor() {
        super();
        this.state = ({
            searchTerm: '',
            list: []
        });
    }

    clearSearchTerm = () => {
        this.setState({
            searchTerm: ''
        });
    };

    onClickAddButton = () => {
        let list = this.state.list;
        let newItem = {
            id: uuid.v4(),
            item: this.state.searchTerm
        };
        if(newItem.item.length > 0) {
            list.push(newItem);
            this.setState({
                list: list
            });
            this.clearSearchTerm();
        }
    };

    onClickRemoveButton = (event: SyntheticMouseEvent<HTMLButtonElement>, id: string) => {
        event.stopPropagation();
        this.setState(({
            list: this.state.list.filter(item => item.id !== id)
        }))
    };

    onSearchTermChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
        this.setState({
            searchTerm: event.target.value
        })
    };

    handleKeyPress = (target: SyntheticKeyboardEvent<HTMLInputElement>) => {
      if(target.charCode === 13){
          this.onClickAddButton();
      }
    };

    render() {
        const {searchTerm, list} = this.state;
        const filteredRList = list.filter(listItem =>
            listItem.item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return (
            <div className="App">
                <SearchBox
                    value={searchTerm}
                    onSearchTermChange={this.onSearchTermChange}
                    onClickAddButton={this.onClickAddButton}
                    handleKeyPress={this.handleKeyPress}
                />
                <List listItems={filteredRList} onDelete={this.onClickRemoveButton}/>
            </div>
        );
    }
}

export default App;
