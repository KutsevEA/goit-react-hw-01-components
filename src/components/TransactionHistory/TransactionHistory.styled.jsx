import styled from "@emotion/styled";

export const Transaction = styled.table`
  width: 80%;
  box-shadow: 0 5px 5px 0 #333;
  border-collapse: collapse;
`;

export const TransactionHeader = styled.thead`
  background-color: #459bec;
  color: #fff;
`;

export const TransactionHeaderCell = styled.th`
  padding: 15px;
  &:not(:last-child) {
    border-right: 1px solid #fff;
  }
`;

export const TransactionRow = styled.tr`
  &:nth-of-type(2n) {
    background-color: #eee;
  }
`;

export const TransactionCell = styled.td`
  padding: 15px;
  text-align: center;
  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
`;