import React from "react"
import { useHistory } from "react-router-dom"
const Notifications = () => {
  const history = useHistory()

  return (
    <div className="section">
      <div className="card">
        <div className="card-content">
          <div className="level-right">
            <button onClick={() => history.push('/')} className="delete"></button>
          </div>
          <div className="content">
            <h1 className="title">Notifications</h1>
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  {/* <img className="is-rounded" src={chat.user.profile.picture} /> */}
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Username</strong> | <small>date</small>
                  </p>
                  <p>Invited you to server</p>
                </div>
              </div>

              <div className="media-right">
                <button className="button is-success"></button>
                <button className="button is-danger"></button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications
