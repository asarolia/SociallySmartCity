import React from 'react'

class Profile extends React.Component {
  render() {
    return (
      <section class="hero is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <nav className="level is-mobile">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">New Issues</p>
                  <p className="title">456</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Your Score</p>
                  <p className="title">13</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">City Score</p>
                  <p className="title">87</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Badges</p>
                  <p className="title">2</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section >
    )
  }
}

export default Profile;