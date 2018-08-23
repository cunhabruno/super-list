/* @flow */
import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'

type ListItemProps = {
    name: string,
    onDelete: (Object, string) => mixed
}

type StateType = {
    active: boolean
}
class ListItem extends React.Component<ListItemProps, StateType> {
    constructor(){
        super();
        this.state = ({
            active: false
        })
    }
    toggleClass = (e) => {
        console.log('aq1' + e.target);
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    handleClick = (e) => {
        e.stopPropagation();
        console.log('aq2' + e.target);

    };

    render() {
        const {name, onDelete} = this.props;
        return (
            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            //checked={this.state.checkedA}
                            onChange={this.toggleClass}
                        />
                    }
                    id={this.state.active ? "itemdone" : "pending"}
                    test-data="list-item"
                    label={name}
                />
                <IconButton aria-label="Delete" onClick={onDelete}>
                    <i className="far fa-trash-alt fa-xs" test-data="trash-button"/>
                </IconButton>
            </div>
        )
    }
}
export default ListItem;