import React from 'react';
import PropTypes from 'prop-types';

export default function SectionTransactions({ children }) {
    return(
        <table className={"transaction-history"}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>            
            {children}
        </table>
    );
}

SectionTransactions.propTypes={
    children:PropTypes.node,
}