import PropTypes from 'prop-types';

import {
  Transaction,
  TransactionHeader,
  TransactionHeaderCell,
  TransactionRow,
  TransactionCell,
} from './TransactionHistory.styled';


export const TransactionHistory = ({ items }) => {
  return (
    <Transaction>
      <TransactionHeader>
        <tr>
          <TransactionHeaderCell>Type</TransactionHeaderCell>
          <TransactionHeaderCell>Amount</TransactionHeaderCell>
          <TransactionHeaderCell>Currency</TransactionHeaderCell>
        </tr>
      </TransactionHeader>

      <tbody>
        {items.map(item => 
          (<TransactionRow key={item.id}>
            <TransactionCell>{item.type}</TransactionCell>
            <TransactionCell>{Math.round(item.amount)}</TransactionCell>
            <TransactionCell>{item.currency}</TransactionCell>
          </TransactionRow>)
        )}
      </tbody>
    </Transaction>
  );
};


TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount:PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
