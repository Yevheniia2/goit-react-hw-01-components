import PropTypes from 'prop-types';

export default function Transactions ({ items }) {
    return (
        <tbody>
        {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        ))}
        </tbody>
    );
}

Transactions.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}