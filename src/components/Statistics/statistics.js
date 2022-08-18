import PropTypes from 'prop-types';

export default function Statistics ({ stats }) {
    return (
        <ul className={"stat-list"}>
            {stats.map(({id, label, percentage}) => (
                <li key={id} className={"item"}>
                    <span className={"label"}>{label}</span>
                    <span className={"percentage"}>{percentage}%</span>
                </li>
            ))}
        </ul>
    );
}

Statistics.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    persentage: PropTypes.number.isRequired,
}