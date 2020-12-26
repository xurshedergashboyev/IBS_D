import styled from 'styled-components';

export const AboutStatistics = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin: 32px -12px -15px;
  justify-content: center;
  background: #ececec;
  border-radius: 18px;
  align-items: center;
  @media screen and (max-width: 479px) {
    margin-top: 30px;
  };
`;

export const StatisticsItem = styled.div `
  box-sizing: border-box;
  margin: 40px 12px;
  text-align: center;
  width: calc(25% - 24px);
  @media screen and (max-width: 991px) {
    width: calc(41.6666667% - 24px);
  };
  @media screen and (max-width: 767px) {
    width: calc(50% - 24px);
  };
  @media screen and (max-width: 479px) {
    width: calc(100% - 24px);
  };
`;

export const StatDesc = styled.p `
  font-size: 18px;
  margin: 0;
`;
