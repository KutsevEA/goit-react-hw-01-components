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
      <StatisticTitle>{title}</StatisticTitle>
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
data : PropTypes.array.isRequired,
};
