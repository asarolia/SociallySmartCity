import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComments, faHeart, faRetweet } from '@fortawesome/free-solid-svg-icons'

class Feed extends React.Component {
  render() {
    return (
      <>
        <div className="tabs is-centered">
          <ul>
            <li className="is-active"><a>All</a></li>
            <li><a>Issues</a></li>
            <li><a>Events</a></li>
            <li><a>Alerts</a></li>
          </ul>
        </div>
        <div className="columns ">
          <div className="column is-3">
            <div className="card">
              <div className="card-content">
                <div className="content">
                   Streetlight on right side of Riverside parking is broken, did any body notice ?
                   <br/>
                  <a href="#">#streetlight</a>. <a href="#">#stategov</a> <a href="#">#Noida</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faComments} size="lg" />2</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faRetweet} size="lg" />14</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faHeart} size="lg" />134</a>
              </footer>
            </div>
          </div>
          <div className="column is-3">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  Community gathering for felicitations of Northern High school kids.
                  <a href="#">#felicitations</a>. <a href="#">#NorthernHigh</a> <a href="#">#Noida</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer className="card-footer">
              <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faComments} size="lg" />8</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faRetweet} size="lg" />64</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faHeart} size="lg" />334</a>
              </footer>
            </div>
          </div>
          <div className="column is-3">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  Community gathering for felicitations of Northern High school kids.
                  <a href="#">#felicitations</a>. <a href="#">#NorthernHigh</a> <a href="#">#Noida</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer className="card-footer">
              <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faComments} size="lg" />2</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faRetweet} size="lg" />14</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faHeart} size="lg" />134</a>
              </footer>
            </div>
          </div>
          <div className="column is-3">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  Community gathering for felicitations of Northern High school kids.
                  <a href="#">#felicitations</a>. <a href="#">#NorthernHigh</a> <a href="#">#Noida</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer className="card-footer">
              <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faComments} size="lg" />2</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faRetweet} size="lg" />14</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faHeart} size="lg" />134</a>
              </footer>
            </div>
          </div>
          <div className="column is-3">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  Community gathering for felicitations of Northern High school kids.
                  <a href="#">#felicitations</a>. <a href="#">#NorthernHigh</a> <a href="#">#Noida</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer className="card-footer">
              <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faComments} size="lg" />2</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faRetweet} size="lg" />14</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faHeart} size="lg" />134</a>
              </footer>
            </div>
          </div>
          <div className="column is-3">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  Community gathering for felicitations of Northern High school kids.
                  <a href="#">#felicitations</a>. <a href="#">#NorthernHigh</a> <a href="#">#Noida</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer className="card-footer">
              <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faComments} size="lg" />2</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faRetweet} size="lg" />14</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faHeart} size="lg" />134</a>
              </footer>
            </div>
          </div>
          
        </div>
        <div className="columns">
          <div className="column is-3">
            <div className="card">
              <div className="card-content">
                <div className="content">
                   Street light on right side of Riverside parking is broken.
                  <a href="#">#streetlight</a>. <a href="#">#stategov</a> <a href="#">#Noida</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faComments} size="lg" />2</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faRetweet} size="lg" />14</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faHeart} size="lg" />134</a>
              </footer>
            </div>
          </div>
          <div className="column is-3">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  Community gathering for felicitations of Northern High school kids.
                  <a href="#">#felicitations</a>. <a href="#">#NorthernHigh</a> <a href="#">#Noida</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer className="card-footer">
              <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faComments} size="lg" />2</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faRetweet} size="lg" />14</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faHeart} size="lg" />134</a>
              </footer>
            </div>
          </div>
          <div className="column is-3">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  Community gathering for felicitations of Northern High school kids.
                  <a href="#">#felicitations</a>. <a href="#">#NorthernHigh</a> <a href="#">#Noida</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer className="card-footer">
              <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faComments} size="lg" />2</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faRetweet} size="lg" />14</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faHeart} size="lg" />134</a>
              </footer>
            </div>
          </div>
          <div className="column is-3">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  Community gathering for felicitations of Northern High school kids.
                  <a href="#">#felicitations</a>. <a href="#">#NorthernHigh</a> <a href="#">#Noida</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer className="card-footer">
              <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faComments} size="lg" />2</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faRetweet} size="lg" />14</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faHeart} size="lg" />134</a>
              </footer>
            </div>
          </div>
          <div className="column is-3">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  Community gathering for felicitations of Northern High school kids.
                  <a href="#">#felicitations</a>. <a href="#">#NorthernHigh</a> <a href="#">#Noida</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer className="card-footer">
              <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faComments} size="lg" />2</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faRetweet} size="lg" />14</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faHeart} size="lg" />134</a>
              </footer>
            </div>
          </div>
          <div className="column is-3">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  Community gathering for felicitations of Northern High school kids.
                  <a href="#">#felicitations</a>. <a href="#">#NorthernHigh</a> <a href="#">#Noida</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer className="card-footer">
              <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faComments} size="lg" />2</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faRetweet} size="lg" />14</a>
                <a href="#" className="card-footer-item has-text-grey"><FontAwesomeIcon icon={faHeart} size="lg" />134</a>
              </footer>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Feed;