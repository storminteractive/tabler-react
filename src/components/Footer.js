import React, { Component, Fragment } from 'react'

export default class Footer extends Component {
    render() {
        return (
          <Fragment>
            <div className="footer">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row" />
                  </div>
                  <div className="col-lg-4 mt-4 mt-lg-0">
                    Powered by Storm Interactive
                    <br />
                    http://www.storm-interactive.com
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        );
    }
}
