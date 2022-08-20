import PropTypes from 'prop-types';
import { TableBody, TableRow, TableCell } from './transactions.styled';

export default function Transactions ({ items }) {
    return (
        <TableBody>
        {items.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
                <TableCell>{type}</TableCell>
                <TableCell>{amount}</TableCell>
                <TableCell>{currency}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    );
}

Transactions.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}