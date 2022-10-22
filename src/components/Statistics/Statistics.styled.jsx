import styled from '@emotion/styled';

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistic = styled.section`
  width: 300px;
  margin-top: 20px;
  background-color: #eee;
`;

export const StatisticTitle = styled.h2`
  padding: 10px;
  text-align: center;
`;

export const StatisticList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  list-style: none;
`;

export const StatisticItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  min-width: 33.3333%;
  background-color: ${p => p.bg};
`;

export const StatisticLabel = styled.span`
  display: block;
  text-align: center;
`;

export const StatisticPercent = styled.span`
  display: block;
  text-align: center;
`;