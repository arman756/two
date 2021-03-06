import React, { Component } from "react";
import { connect } from "react-redux";

import $ from "jquery";

import Waypoint from "react-waypoint";

import { FaListUl } from "react-icons/fa";

import whiteLogo from "../../style/resources/img/Arman-logo-white.png";
import blackLogo from "../../style/resources/img/Arman-logo-black.png";
class Navbar extends Component {
  constructor() {
    super();
    this.state={
      open: false
    }

    this.stickyNavbar = this.stickyNavbar.bind(this);
    this.scroolSoft = this.scroolSoft.bind(this);
    this.mobileNav = this.mobileNav.bind(this);
  }

  stickyNavbar() {
    // console.log("yep");

    var header = document.getElementById("navOne");
    // var sticky = header.offsetTop;

    if (window.pageYOffset > 110) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  mobileNav(e){

    let list = document.getElementById('list');
    let nav = $('.js--main-nav');
    nav.slideToggle(200);

    if (this.state.open===false) {
      this.setState({ open:true })
    } else {
      this.setState({ open:false })
    }

    // /* Mobile navigation */
    // $('.js--nav-icon').click(function () {
    //   var nav = $('.js--main-nav');
    //   var icon = $('.js--nav-icon i');

    //   nav.slideToggle(200);

    //   if (icon.hasClass('ion-navicon-round')) {
    //     icon.addClass('ion-close-round');
    //     icon.removeClass('ion-navicon-round');
    //   } else {
    //     icon.addClass('ion-navicon-round');
    //     icon.removeClass('ion-close-round');
    //   }
    // });
  }

  scroolSoft() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if ($("#navOne").hasClass("sticky")) {
        // console.log("has");

        if (prevScrollpos > currentScrollPos) {
          document.querySelector(".sticky").style.top = "0";
        } else {
          document.querySelector(".sticky").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
        // console.log('sticky runs')
      }
      if (!$("#navOne").hasClass("sticky")) {
        document.getElementById("navOne").style.top = "-50px";
        // console.log('nav runs')
      }
    };
  }

  componentDidMount() {
    this.stickyNavbar();
    this.scroolSoft();
    // window.onscroll = () => {
    //   this.stickyNavbar();
    // };
  }
  render() {
    return (
      <div>
        <header id="home">
          <div id="navOne">
            <div className="row" id="navScroll">
              <a href="#home">
                <img src={whiteLogo} alt="Arman-Logo" className="logo" />
                <img src={blackLogo} alt="Arman-Logo" className="logo-sticky" />
              </a>
              <a className="mobile-nav-icon js--nav-icon" onClick={this.mobileNav} id="list">
                    <FaListUl className="icon-big" />
              </a>
              <ul className="main-nav js--main-nav">
                <li>
                  <a href="#home" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#footer">Contact</a>
                </li>
              </ul>
              
            
            </div>
          </div>
          <Waypoint
            onEnter={this.stickyNavbar}
            onLeave={this.stickyNavbar}
            topOffset="-20px"
            bottomOffset="0px"
          />
        </header>
        <section className=" blue-gradient-topToBottom js--section-title button-container">
          <div className="col span-1-of-1 box js--wp-1">
            <h1 className="hero-text-box js--wp-1">Arman Feili</h1>
          </div>
          <div className="row button-couple">
            <a href="#about" className="col span-1-of-2 btn btn-full">
              Biography
            </a>
            <a href="#footer" className="col span-1-of-2 btn btn-ghost">
              Contact
            </a>
          </div>
        </section>
      </div>
    );
  }
}

Navbar.propTypes = {};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps)(Navbar);
