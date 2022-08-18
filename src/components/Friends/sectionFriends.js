import React from 'react';
import PropTypes from 'prop-types';

export default function SectionFriends({children}) {
    return(
        <ul className={"friend-list"}>
            {children}
        </ul>
    );
}

SectionFriends.propTypes={
    children:PropTypes.node,
}