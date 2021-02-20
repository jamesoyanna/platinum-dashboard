import React, { Component } from "react";

import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from "reactstrap";

import { Link } from "react-router-dom";

// Import menuDropdown
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

//Import i18n
import { withNamespaces } from "react-i18next";


// Redux Store
import { toggleRightSidebar } from "../../store/actions";

//Import logo Images
import logolight from "../../assets/images/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      isSocialPf: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleRightbar = this.toggleRightbar.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
  }
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.toggleMenuCallback();
  }

  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar();
  }


  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
               

                <Link to="#" className="logo logo-light">
                  <span className="logo-lg">
                    <img src={logolight} alt="" height="20" />
                  </span>
                </Link>
              </div>

              <Button
                size="sm"
                color="none"
                type="button"
                onClick={this.toggleMenu}
                className="px-3 font-size-24 header-item waves-effect"
                id="vertical-menu-btn"
              >
                <i className="ri-menu-2-line align-middle"></i>
              </Button>

              <Form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder={this.props.t("Search")}
                  />
                  <span className="ri-search-line"></span>
                </div>
              </Form>
             
            </div>
            <div className="d-flex">
              <div className="dropdown d-inline-block d-lg-none ml-2">
                <button
                  type="button"
                  onClick={() => {
                    this.setState({ isSearch: !this.state.isSearch });
                  }}
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                >
                  <i className="ri-search-line"></i>
                </button>
                <div
                  className={
                    this.state.isSearch === true
                      ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show"
                      : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                  }
                  aria-labelledby="page-header-search-dropdown"
                >
                  <Form className="p-3">
                    <FormGroup className="m-0">
                      <InputGroup>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder={this.props.t("Search")}
                        />
                        <InputGroupAddon addonType="append">
                          <Button color="primary" type="submit">
                            <i className="ri-search-line"></i>
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </div>
              </div>

              <div className="dropdown d-none d-lg-inline-block ml-1">
                <Button
                  color="none"
                  type="button"
                  className="header-item noti-icon waves-effect"
                  onClick={this.toggleFullscreen}
                >
                  <i className="ri-fullscreen-line"></i>
                </Button>
              </div>

              <NotificationDropdown />
              <ProfileMenu />
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  const { layoutType } = state.Layout;
  return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(withNamespaces()(Header));
