import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

export default class EventListTableDT extends Component {

  render() {
    return (
      <div className="table-responsive">
        <DataTable
          noHeader={true}
          columns={this.props.columns}
          data={this.props.domains}
          defaultSortField="last"
          defaultSortAsc={false}
        />
      </div>
    );
  }
}
