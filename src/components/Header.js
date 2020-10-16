import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
  <header className="header">
    <div className="header__title md-padding-h md-padding-v">
      <NavLink className='navlinks' to="/dashboard" activeClassName="is-active" >Expensify</NavLink>
      <button className="button logout_btn" onClick={startLogout}>Logout</button>
    </div>
    <div className="md-padding-h md-padding-v">
      <NavLink className='navlinks addbtn button' to="/create" activeClassName="is-active">Create Expense</NavLink>
    </div>
    
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
