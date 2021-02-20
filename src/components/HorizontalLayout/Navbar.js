import React, { Component } from "react";
import {Collapse, Container } from "reactstrap";
import { Link, withRouter } from "react-router-dom";


//i18n
import { withNamespaces } from "react-i18next";

import { connect } from 'react-redux';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
          this.setState({ });
        }
    }

    componentDidMount() {
        var matchingMenuItem = null;
        var ul = document.getElementById("navigation");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {
            if (this.props.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;
        if (parent) {
            parent.classList.add("active"); // li
            const parent2 = parent.parentElement;
            parent2.classList.add("active"); // li
            const parent3 = parent2.parentElement;
            if (parent3) {
                parent3.classList.add("active"); // li
                const parent4 = parent3.parentElement;
                if (parent4) {
                    parent4.classList.add("active"); // li
                    const parent5 = parent4.parentElement;
                    if (parent5) {
                        parent5.classList.add("active"); // li
                        const parent6 = parent5.parentElement;
                        if (parent6) {
                            parent6.classList.add("active"); // li
                        }
                    }
                }
            }
        }
        return false;
    };

    render() {
        return (
          <React.Fragment>
            <div className="topnav">
              <Container fluid>
                <nav
                  className="navbar navbar-light navbar-expand-lg topnav-menu"
                  id="navigation"
                >
                  <Collapse
                    isOpen={this.props.menuOpen}
                    className="navbar-collapse"
                    id="topnav-menu-content"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          <i className="ri-dashboard-line mr-2"></i>{" "}
                          {this.props.t("Dashboard")}
                        </Link>
                      </li>

                      {/* 
    
                      */}
                    </ul>
                  </Collapse>
                </nav>
              </Container>
            </div>
          </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { leftSideBarType, leftSideBarTheme } = state.Layout;
    return { leftSideBarType, leftSideBarTheme };
}

export default withRouter(connect(mapStatetoProps, {})(withNamespaces()(Navbar)));
