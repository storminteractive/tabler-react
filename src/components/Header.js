import React, { Component, Fragment } from 'react'

export default class Header extends Component {
    render() {
        return (
          <Fragment>
            <div
              className="header collapse d-lg-flex p-0"
              id="headerMenuCollapse"
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-1 ml-auto">
                    <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fa fa-user" /> Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg order-lg-first" />
                </div>
              </div>
            </div>
          </Fragment>
        );
    }
}
