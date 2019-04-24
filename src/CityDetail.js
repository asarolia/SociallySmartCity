import React from 'react'

class CityDetail extends React.Component {

  componentDidMount(){
    require('./module-chart.js')
  }
  render() {
    return (
      <div className="columns box">
        <aside className="column is-2 menu">
          <p className="menu-label">
            General
         </p>
          <ul className="menu-list">
            <li><a>Monitoring Services</a></li>
            <li><a>CrowdSourced Data</a></li>
            <li><a>Facility Reviews</a></li>
          </ul>
         
        </aside>
        <div className="column ">

        {/* level starts */}
        <div className="columns is-multiline">
          <div className="column">
            <div className="box notification is-primary">
              <div className="heading">Security Cameras</div>
              <div className="title">560</div>
              <div className="level">
                <div className="level-item">
                  <div className="">
                    <div className="heading">Working</div>
                    <div className="title is-5">508</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading">Damaged </div>
                    <div className="title is-5">52</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading"> Change %</div>
                    <div className="title is-5">11% &darr;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box notification is-warning">
              <div className="heading">Security Microphones</div>
              <div className="title">860</div>
              <div className="level">
                <div className="level-item">
                  <div className="">
                    <div className="heading">Working</div>
                    <div className="title is-5">701</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading">Damaged </div>
                    <div className="title is-5">159</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading"> Change %</div>
                    <div className="title is-5">16% &uarr;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box notification is-info">
            <div className="heading">Traffic Sensor</div>
              <div className="title">786</div>
              <div className="level">
                <div className="level-item">
                  <div className="">
                    <div className="heading">Working</div>
                    <div className="title is-5">731</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading">Damaged </div>
                    <div className="title is-5">55</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading"> Change %</div>
                    <div className="title is-5">3% &uarr;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box notification is-danger">
            <div className="heading">Weather Sensors</div>
              <div className="title">65</div>
              <div className="level">
                <div className="level-item">
                  <div className="">
                    <div className="heading">Working</div>
                    <div className="title is-5">58</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading">Damaged </div>
                    <div className="title is-5">7</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading"> Change %</div>
                    <div className="title is-5">1% &uarr;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* level ends */}

        {/* charts start */}
        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="panel">
              <p class="panel-heading">
               Air Quality Index  
              </p>
              <div class="panel-block">
                <canvas id="chartLine" width="400" height="400"></canvas>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="panel">
              <p class="panel-heading">
                Power Disruption 
              </p>
              <div class="panel-block">
                <canvas id="chartScatter" width="400" height="400"></canvas>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="panel">
              <p class="panel-heading">
             Crime Distribution (last 6 Months)
              </p>
              <div class="panel-block">
                <canvas id="chartDoughnut" width="400" height="400"></canvas>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="panel">
              <p class="panel-heading">
                Transportation Distribution
              </p>
              <div class="panel-block">
                <canvas id="chartBar" width="400" height="400"></canvas>
              </div>
            </div>
          </div>
        </div>
        {/* Charts ends */}

           {/* level 2 starts */}
           {/* <div className="columns is-multiline">
          <div className="column">
            <div className="box notification is-primary">
              <div className="heading">Hostpital Count</div>
              <div className="title">5</div>
              <div className="level">
                <div className="level-item">
                  <div className="">
                    <div className="heading">Average Rating</div>
                    <div className="title is-5">4.5</div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box notification is-warning">
              <div className="heading">Security Microphones</div>
              <div className="title">860</div>
              <div className="level">
                <div className="level-item">
                  <div className="">
                    <div className="heading">Working</div>
                    <div className="title is-5">701</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading">Damaged </div>
                    <div className="title is-5">159</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading"> Change %</div>
                    <div className="title is-5">16% &uarr;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box notification is-info">
            <div className="heading">Traffic Sensor</div>
              <div className="title">786</div>
              <div className="level">
                <div className="level-item">
                  <div className="">
                    <div className="heading">Working</div>
                    <div className="title is-5">731</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading">Damaged </div>
                    <div className="title is-5">55</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading"> Change %</div>
                    <div className="title is-5">3% &uarr;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box notification is-danger">
            <div className="heading">Weather Sensors</div>
              <div className="title">65</div>
              <div className="level">
                <div className="level-item">
                  <div className="">
                    <div className="heading">Working</div>
                    <div className="title is-5">58</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading">Damaged </div>
                    <div className="title is-5">7</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading"> Change %</div>
                    <div className="title is-5">1% &uarr;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   */}
        {/* level 2 ends */}

        </div>
      </div>
    )
  }
}

export default CityDetail;