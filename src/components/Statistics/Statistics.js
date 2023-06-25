import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  ItemLabel,
  ItemPercentage,
} from './Statistics.styled.jsx';

export const Statistics = ({ title, statisticalData = [] }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title.toUpperCase()}</StatisticsTitle>}

      <StatisticsList>
        {statisticalData.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <ItemLabel>{label}</ItemLabel>
            <ItemPercentage>{percentage}%</ItemPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statisticalData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
