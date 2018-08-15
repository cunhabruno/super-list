/* @flow */
import * as React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import '@fortawesome/fontawesome-free/css/all.css'

type searchBoxType = {
    value: string,
    onSearchTermChange: (SyntheticInputEvent<HTMLInputElement>) => mixed,
    onClickAddButton: () => mixed,
    handleKeyPress: (SyntheticKeyboardEvent<HTMLInputElement>) => mixed
}
class SearchBox extends React.Component {
    constructor() {
        super();
        this.state = ({
            open: false
        })
    }

    handleTooltipClose = () => {
        this.setState({ open: false });
    };

    handleTooltipOpen = () => {
        this.setState({ open: true });
    };

    render() {
        const {value, onSearchTermChange, onClickAddButton, handleKeyPress} = this.props;
        return (
            <div>
                <TextField
                    id="with-placeholder"
                    label="Find Item"
                    placeholder="Find or Add"
                    type="search"
                    margin="normal"
                    value={value}
                    onChange={onSearchTermChange}
                    onKeyPress={handleKeyPress}
                />
                <Tooltip
                    id="tool-tip-add-button"
                    onClose={this.handleTooltipClose}
                    onOpen={this.handleTooltipOpen}
                    open={this.state.open}
                    title="Add"
                >
                    <Button
                        id="add-button"
                        variant="fab"
                        mini color="primary"
                        onClick={onClickAddButton}>
                        <i className="fas fa-plus"/>
                    </Button>
                </Tooltip>
            </div>
        );
    }
}
export default SearchBox;