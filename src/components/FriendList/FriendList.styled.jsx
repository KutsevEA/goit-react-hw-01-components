import styled from "@emotion/styled";

export const FriendListContainer = styled.ul`
  margin:0;
  padding:0;
  list-style:none;
`;

export const Friend = styled.li`
  display: flex;
  align-items:center;
  padding: 7px;
  gap:10px;
  box-shadow: 0 3px 5px 0 #333;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FriendStatus = styled.span`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color: ${p => p.online ? 'green' : 'red'};
`;
