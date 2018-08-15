/* @flow */
import * as React from 'react';
import ListItem from './ListItem';

type listArrayType = {
    id: string,
    item: string
}

type listType = {
    listItems: Array<listArrayType>,
    onDelete: (any, any) => mixed
}

const List = ({listItems, onDelete}: listType) => {
    const itemsArray = listItems.map(({id, item}) => {
        return <ListItem key={id} name={item} onDelete={(e) => onDelete(e, id)}/>
    });
    return (
        <div>
            {itemsArray}
        </div>

    );
};

export default List;