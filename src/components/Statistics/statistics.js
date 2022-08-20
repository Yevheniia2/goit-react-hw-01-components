import PropTypes from 'prop-types';
import { StatList, StatItem, Label, Persentage } from './statistics.styled';

export default function Statistics ({ stats }) {
    return (
        <StatList>
            {stats.map(({id, label, percentage}) => (
                <StatItem key={id} style={{ backgroundColor: randomColor() }}>
                    <Label>{label}</Label>
                    <Persentage>{percentage}%</Persentage>
                </StatItem>
            ))}
        </StatList>
    );
}

const randomColor = () =>
'#' + Math.floor(Math.random() * 16777215).toString(16);

Statistics.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    persentage: PropTypes.number.isRequired,
}