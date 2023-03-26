import styled from '@emotion/styled';
import getRandomColor from './Utility/getRandomColor';

const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  margin: 20px auto 0;
  padding: 25px 10px 0;
  background-color: rgba((150, 150, 150, 0.7));
  box-shadow: 2px -3px 37px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
`;
const StatisticsTitle = styled.h2`
  margin: 0;
  margin-bottom: 0px;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 1px 1px 0 rgb(234, 234, 234), 2px 2px 0 rgb(213, 213, 213),
    3px 3px 0 rgb(191, 191, 191), 4px 4px 0 rgb(170, 170, 170),
    5px 5px 0 rgb(149, 149, 149), 6px 6px 0 rgb(128, 128, 128),
    7px 7px 0 rgb(106, 106, 106), 8px 8px 0 rgb(85, 85, 85),
    9px 9px 0 rgb(64, 64, 64), 10px 10px 0 rgb(43, 43, 43),
    11px 11px 0 rgb(21, 21, 21), 12px 12px 1px rgba(0, 0, 0, 0.76);
  -webkit-text-shadow: 1px 1px 0 rgb(234, 234, 234),
    2px 2px 0 rgb(213, 213, 213), 3px 3px 0 rgb(191, 191, 191),
    4px 4px 0 rgb(170, 170, 170), 5px 5px 0 rgb(149, 149, 149),
    6px 6px 0 rgb(128, 128, 128), 7px 7px 0 rgb(106, 106, 106),
    8px 8px 0 rgb(85, 85, 85), 9px 9px 0 rgb(64, 64, 64),
    10px 10px 0 rgb(43, 43, 43), 11px 11px 0 rgb(21, 21, 21),
    12px 12px 1px rgba(0, 0, 0, 0.76);
  -moz-text-shadow: 1px 1px 0 rgb(234, 234, 234), 2px 2px 0 rgb(213, 213, 213),
    3px 3px 0 rgb(191, 191, 191), 4px 4px 0 rgb(170, 170, 170),
    5px 5px 0 rgb(149, 149, 149), 6px 6px 0 rgb(128, 128, 128),
    7px 7px 0 rgb(106, 106, 106), 8px 8px 0 rgb(85, 85, 85),
    9px 9px 0 rgb(64, 64, 64), 10px 10px 0 rgb(43, 43, 43),
    11px 11px 0 rgb(21, 21, 21), 12px 12px 1px rgba(0, 0, 0, 0.76);
  color: pink;
  font-size: 30px;
  font-family: Verdana, Geneva, sans-serif;
`;
const StatisticsList = styled.ul`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const StatisticsItem = styled.li`
  text-align: center;
  display: inline-flex;
  flex-basis: calc((100% / 5) - 20px - 2px);
  flex-direction: column;
  padding: 10px;
  box-shadow: 1px -3px 7px -3px rgba(0, 0, 0, 0.85);

  text-align: center;
  background-color: ${getRandomColor};
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;
const ItemLabel = styled.span`
  font-size: 15px;
  font-weight: 500;
`;
const ItemPercentage = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export {
  StatisticsSection,
  StatisticsList,
  StatisticsTitle,
  StatisticsItem,
  ItemLabel,
  ItemPercentage,
};
