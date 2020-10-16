import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div className="expenseListItem">
    <Link to={`/edit/${id}`}>
      <div className="expenseListItem__title">
        <h3>{description}</h3>
        <p>{numeral(amount / 100).format('$0,0.00')}</p>
      </div>
    </Link>
    <p>
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;
