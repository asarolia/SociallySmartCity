import React from 'react'

class CityName extends React.Component {
  render() {
    return (
      <section className="hero is-info is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="coulmn is-6">
                <h1 className="title is-size-1">
                  Noida
                </h1>
                <h2 className="subtitle">
                  First Class Smart City with a terrific score of 83/100 
                </h2>
              </div>
              <div className="column is-6 is-pulled-right">
                  <div className="tile is-pulled-right ">
                  {/* <p className="title">99/100</p> */}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default CityName;