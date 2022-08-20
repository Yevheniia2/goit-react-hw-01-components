import React from 'react';
import PropTypes from 'prop-types';
import { TableBox, TableHeadBox, TableRow, TableHeadName } from './transactions.styled';

export default function SectionTransactions({ children }) {
    return(
        <TableBox>
            <TableHeadBox>
                <TableRow>
                    <TableHeadName>Type</TableHeadName>
                    <TableHeadName>Amount</TableHeadName>
                    <TableHeadName>Currency</TableHeadName>
                </TableRow>
            </TableHeadBox>            
            {children}
        </TableBox>
    );
}

SectionTransactions.propTypes={
    children:PropTypes.node,
}