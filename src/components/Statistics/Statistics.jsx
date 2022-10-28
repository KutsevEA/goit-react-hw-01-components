import PropTypes from 'prop-types';
import { getRandomHexColor } from './Statistics.styled';


import {
  Statistic,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatisticLabel,
  StatisticPercent,
} from './Statistics.styled'

export const Statistics = ({ title, data }) => {
  return (
    <Statistic>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticList>
        {data.map(stats => (
          <StatisticItem key={stats.id} bg={getRandomHexColor()}>
            <StatisticLabel>{stats.label}</StatisticLabel>
            <StatisticPercent>{stats.percentage} %</StatisticPercent>
          </StatisticItem>
        ))}
      </StatisticList>
    </Statistic>
  );
};


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
