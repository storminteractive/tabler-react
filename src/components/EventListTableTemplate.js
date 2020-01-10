import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

export default class EventListTableTemplate extends Component {

  render() {
    return (
      <div className="table-responsive">
        <table className="table card-table table-vcenter text-nowrap">
          <thead>
            <tr>
              <th className="w-1">Last update</th>
              <th>DOMAIN</th>
              <th>LAST IP</th>
              <th className="w-1" />
            </tr>
          </thead>
          <tbody>
            {this.props.domains.map((d, index) => {
              return (
                <tr key={"row" + index}>
                  <td>
                    <span className="text-muted">{d.last}</span>
                  </td>
                  <td>
                    <a href={"http://" + d.domain} className="text-inherit">
                      {d.domain}
                    </a>
                  </td>
                  <td>
                    <a href="invoice.html" className="text-inherit">
                      {d.lastip}
                    </a>
                  </td>
                  <td className="text-right">
                    <a
                      href={"http://" + d.domain}
                      className="btn btn-secondary btn-sm"
                    >
                      GO
                    </a>{" "}
                    <a className="icon" href="/">
                      <i className="fe fe-edit" />
                    </a>{" "}
                    <a className="icon" href="/">
                      <i className="fe fe-delete" />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
