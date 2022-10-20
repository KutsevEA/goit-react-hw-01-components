import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 200px;
  padding-top: 20px;
  border: 1px solid #bbb;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 #999;
`;

export const ProfileDescription = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const ProfileAvatar = styled.img`
  display: block;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const ProfileName = styled.p`
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
  font-size: 21px;
`;

export const ProfileTag = styled.p`
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
  color: #999;
  font-size: 16px;
`;

export const ProfileLocation = styled.p`
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
  color: #999;
  font-size: 16px;
`;

export const ProfileStats = styled.ul`
  margin: 0;
  display: flex;
  padding: 0;

  border-top: 1px solid #bbb;
  background-color: rgb(230, 230, 230);
  list-style: none;
`;

export const StatItem = styled.li`
  flex-basis: 33.3333%;
  text-align: center;
  padding: 10px;
  &:not(:last-child) {
    border-right: 1px solid #bbb;
  }
`;

export const StatItemLabel = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
  color: #999;
`;

export const StatItemValue = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 700;
`;