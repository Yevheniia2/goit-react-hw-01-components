import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsBox, Title } from './statistics.styled';

export default function SectionStatistics({title, children}) {
    return(
        <StatisticsBox>
            {title && <Title>{title}</Title>}
            {children}
        </StatisticsBox>
    );
}

SectionStatistics.propTypes={
    title:PropTypes.string,
    children:PropTypes.node,
}