import React from 'react';
import PropTypes from 'prop-types';

export default function SectionStatistics({title, children}) {
    return(
        <section className={"statistics"}>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
}

SectionStatistics.propTypes={
    title:PropTypes.string,
    children:PropTypes.node,
}