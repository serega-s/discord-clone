import React, { useEffect, useState } from "react"
import {
  deleteMessage,
  getChatData,
  getMoreChatData,
  sendMessage,
} from "../components/services/chat"
import DataNotLoaded from "./DataNotLoaded"

const MainChat = ({ textChannel, chatData, setChatData, isAdmin, server }) => {
  const [body, setBody] = useState()
  const [chatFile, setChatFile] = useState()
  const [dataLoaded, setDataLoaded] = useState(false)

  const userData = JSON.parse(localStorage.getItem("user"))

  const [hasNext, setHasNext] = useState()



  useEffect(() => {
    if (textChannel) {
      getChatData(textChannel.id).then((response) => {
        setChatData(response.results)
        setDataLoaded(true)

        if (response.next) {
          setHasNext(response.next)
          document.getElementById("loadmorebtn").style.display = "flex"
        }
      })
    }
  }, [textChannel])

  const handleSubmit = (e) => {
    e.preventDefault()

    sendMessage(body, chatFile, textChannel.id).then((response) => {
      setChatData([response, ...chatData])
      setBody("")
      setChatFile("")
    })
  }

  const handleLoadMore = (e) => {
    e.preventDefault()
    getMoreChatData(hasNext).then((response) => {
      setChatData([...chatData, ...response.results])
      if (response.next) {
        setHasNext(response.next)
      } else {
        setHasNext(null)
        document.getElementById("loadmorebtn").style.display = "none"
      }
    })
  }

  const handleDeleteMsg = (e) => {
    e.preventDefault()
    deleteMessage(e.target.id, server).then((response) => {
      document.getElementById(e.target.id).parentNode.parentNode.style.display =
        "none"
    })
  }

  return (
    <>
      {dataLoaded ? (
        <div>
          <section className="hero is-link">
            <div className="hero-body">
              <p className="title">{textChannel ? textChannel.title : ""}</p>
              <p className="subtitle">{textChannel ? textChannel.topic : ""}</p>
            </div>
          </section>

          <div className="level-item">
            <button
              className="button is-success"
              onClick={handleLoadMore}
              id="loadmorebtn"
              style={{ display: "none" }}
            >
              <i className="material-icons">more_horiz</i>
            </button>
          </div>

          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column-reverse",
            }}
            className="collection"
          >
            {chatData.map((chat) => (
              // Turn to component Message 
              <li className="pt-3" key={chat.id}>
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-64x64">
                      <img
                        className="is-rounded"
                        src={chat.user.profile.picture}
                      />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{chat.user.username}</strong>
                        <small>{chat.date}</small>
                      </p>
                      <p>{chat.body}</p>
                      {allowedAudioExtensions.exec(chat.file) ? (
                        <audio controls preload="auto" muted>
                          <source src={chat.file} />
                          Not supported
                        </audio>
                      ) : allowedVideoExtensions.exec(chat.file) ? (
                        <video
                          width="320"
                          height="240"
                          controls
                          loop
                          autoPlay={false}
                        >
                          <source src={chat.file} />
                          Not supported
                        </video>
                      ) : allowedImageExtensions.exec(chat.file) ? (
                        <img src={chat.file} />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  {isAdmin ? (
                    <div className="media-right">
                      <button
                        onClick={handleDeleteMsg}
                        className="delete"
                        id={chat.id}
                      ></button>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </article>
              </li>
              // /Turn to component Message
            ))}
          </ul>

          <br />

          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img className="is-rounded" src={userData.picture} />
              </p>
            </figure>
            <div className="media-content">
              {/* Turn form to component SendMessageForm */}
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <p className="control">
                    <textarea
                      className="textarea"
                      placeholder="Write message..."
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                  </p>
                </div>
                <div className="field">
                  <nav className="level">
                    <div className="level-left">
                      <div className="level-item">
                        <button className="button is-info" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="level-right">
                      <div className="level-item">
                        <div className="file is-right is-info">
                          <label className="file-label">
                            <input
                              className="file-input"
                              type="file"
                              name="resume"
                              onChange={(e) => setChatFile(e.target.files[0])}
                            />
                            <span className="file-cta">
                              <span className="file-icon">
                                <i className="material-icons">file_upload</i>
                              </span>
                            </span>
                            <span className="file-name">
                              {chatFile ? chatFile?.name : "Add a File..."}
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </form>
              {/* /Turn form to component SendMessageForm */}
            </div>
          </article>
        </div>
      ) : (
        <DataNotLoaded>
          Click on any channel to get information about that.
        </DataNotLoaded>
      )}
    </>
  )
}

export default MainChat
