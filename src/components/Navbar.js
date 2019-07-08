import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import languages from '../data/languages'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {

    const {langKey} = this.props;
    const url = `/${langKey}`

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="menu-container">
          <div className="menu-item menu-item-left">
            <Link to={url} title="Logo">
              <img className="logo" src={logo} alt="CBMC Ukraine"/>
            </Link>
          </div>
          <div className="menu-item">
          <Link to={url} title="Logo">
              <img className="logo-mobile" src={logo} alt="CBMC Ukraine"/>
            </Link>
          </div>
          <div className="menu-item">

            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>

            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-end has-text-centered">
                <Link className="navbar-item" to={`${url}/about`}>
                  About
                </Link>
                <Link className="navbar-item" to={`${url}/events`}>
                  Events
                </Link>
                <Link className="navbar-item" to={`${url}/contact`}>
                  Contact
                </Link>
                {
                  languages.langs.map( (language, index) => language != langKey ? (
                    <Link key={`${language}-${index}`} className="navbar-item" to={`/${language}`}>
                      {languages.labels[index]}
                    </Link>
                  ) : null)
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    )

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img className="logo" src={logo} alt="CBMC Ukraine"/>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              
            </div>
            <div className="navbar-end has-text-centered" style={{display: 'flex', alignItems: 'center'}}>
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <Link className="navbar-item" to="/events">
                  Events
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
