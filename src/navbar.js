import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://localhost:1234/">
            <strong>Socially Smart City</strong>
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start" style={{ flexGrow: 1, justifyContent: "center" }}>
            <div className="navbar-item is-centered">
              <div className="field">
                <p className="control has-icons-right">
                  <input className="input" type="email" placeholder="Search issues, cities .." />
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon icon={faSearch} size="sm" />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <Link className="navbar-item" to="/City">My City </Link>
            <Link className="navbar-item" to="/CityMaps">City Map</Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Shadab
               </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Account
                        </a>
                <a className="navbar-item">
                  Task
                        </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Sign Out
                        </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;