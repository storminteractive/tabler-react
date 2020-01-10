import React, { Component, Fragment } from 'react';
import faker from 'faker';
import EventListTableTemplate from './EventListTableTemplate';
import EventListTableDT from './EventListTableDT';

export default class EventList extends Component {
 
  data = [
    {
      last: faker.date
        .past()
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, ""),
      domain: faker.internet.domainName(),
      lastip: faker.internet.ip()
    },
    {
      last: faker.date
        .past()
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, ""),
      domain: faker.internet.domainName(),
      lastip: faker.internet.ip()
    },
    {
      last: faker.date
        .past()
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, ""),
      domain: faker.internet.domainName(),
      lastip: faker.internet.ip()
    }
  ];

  columns = [
    {
      name: "LAST UPDATE",
      selector: "last",
      sortable: true
    },
    {
      name: "DOMAIN",
      selector: "domain",
      sortable: true
    },
    {
      name: "LAST IP",
      selector: "lastip",
      sortable: true
    },
    {
      cell: r => {
        return (
          <Fragment>
            <a href={"http://" + r.domain} className="btn btn-secondary btn-sm">
              GO
            </a>{" "}
            <a className="icon" href="/" style={this.iconStyle}>
              <i className="fe fe-edit" />
            </a>{" "}
            <a className="icon" href="/" style={this.iconStyle}>
              <i className="fe fe-delete" />
            </a>{" "}
          </Fragment>
        );
      },
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    }
  ];

  iconStyle = { marginLeft: 5 };

  constructor(props) {
    super(props)
  
    this.state = {
       domains: this.data,
       data: this.data
    }
  }
  
  updateDomains(e){
    if(!e) { 
      this.setState({domains: this.data});
      return;
    }
    let domains = this.state.domains;
    //console.log("Will update domains with filter: ",e);
    let newdomains = domains.filter(d=>d.domain.includes(e));
    //console.log(`TCL: EventList -> updateDomains -> newdomains`, newdomains);
    this.setState({domains: newdomains});
  }

  render() {
    if(this.props.f){
      console.log("Will filter");
    }
    return (
      <Fragment>
        <div className="my-5 my-md-5">
          <div className="container">
            <div className="page-header">
              <h1 className="page-title">Events</h1>
            </div>

            <div className="row row-cards">
              <div className="card">
                <div className="card-header">
                  <div className="col-lg-9">
                    <h3 className="card-title">Updates</h3>
                  </div>
                  <div className="col-lg-3">
                    <form className="input-icon my-3 my-lg-0">
                      <input
                        type="search"
                        className="form-control header-search"
                        placeholder="Search…"
                        tabIndex={1}
                        onKeyUp={(t)=>this.updateDomains(t.target.value)}
                      />
                      <div className="input-icon-addon">
                        <i className="fe fe-search" />
                      </div>
                    </form>
                  </div>
                </div>
                <EventListTableTemplate domains={this.state.domains} columns={this.columns}/>
                </div>
            </div>

            <div className="row row-cards">
              <div className="card">
                <div className="card-header">
                  <div className="col-lg-9">
                    <h3 className="card-title">Updates</h3>
                  </div>
                  <div className="col-lg-3">
                    <form className="input-icon my-3 my-lg-0">
                      <input
                        type="search"
                        className="form-control header-search"
                        placeholder="Search…"
                        tabIndex={1}
                        onKeyUp={(t)=>this.updateDomains(t.target.value)}
                      />
                      <div className="input-icon-addon">
                        <i className="fe fe-search" />
                      </div>
                    </form>
                  </div>
                </div>
                <EventListTableDT domains={this.state.domains} columns={this.columns}/>
                </div>
            </div>


            </div>
        </div>
      </Fragment>
    );
  }
}
