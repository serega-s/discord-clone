import React, { useEffect, useState } from "react"
import DataNotLoaded from "../../components/DataNotLoaded"
import { sendNewInvitation } from "../../services/notifications"
import {
  createNewCategory,
  createNewChannel,
  getServerData,
} from "../../services/servers"
import MainChat from "../Chat/MainChat"
import AddCategoryModal from "./components/AddCategoryModal"
import AddChannelModal from "./components/AddChannelModal"
import Members from "./components/Members"
import UserInvitationModal from "./components/UserInvitationModal"

const Server = ({
  servers,
  activeServer,
  setChatData,
  textChannel,
  setTextChannel,
  chatData,
}) => {
  const [serverDetail, setServerDetail] = useState()
  const [dataLoaded, setDataLoaded] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  // Category state
  const [titleNewCtg, setTitleNewCtg] = useState()
  // Channel state
  const [titleNewCh, setTitleNewCh] = useState()
  const [topicNewCh, setTopicNewCh] = useState()
  const [ctgForNewChannel, setCtgForNewChannel] = useState()

  const [username, setUsername] = useState()

  useEffect(() => {
    if (activeServer) {
      getServerData(activeServer).then((response) => {
        setServerDetail(response.data)

        if (response.is_admin) {
          setIsAdmin(true)
        }
        setDataLoaded(true)
      })
    }
  }, [activeServer])

  const modalTrigger = (parameter, category_id) => {
    const modal = document.getElementById(parameter)
    setCtgForNewChannel(category_id)
    modal.style.display = "block"
  }

  const modalClose = (parameter) => {
    const modal = document.getElementById(parameter)
    setCtgForNewChannel("")
    modal.style.display = "none"
  }

  const handleSubmitCategory = (e) => {
    e.preventDefault()

    createNewCategory(serverDetail.id, titleNewCtg).then((response) => {
      serverDetail.categories.push(response)
      modalClose("add-category-modal")
    })
  }

  const handleSubmitChannel = (e) => {
    e.preventDefault()
    createNewChannel(
      serverDetail.id,
      ctgForNewChannel,
      titleNewCh,
      topicNewCh
    ).then((response) => {
      // Filtering objects and adding them to top
      serverDetail.categories
        .filter((obj) => obj.id === ctgForNewChannel)[0]
        ["text_channels"].push(response)
      modalClose("add-channel-modal")
    })
  }

  const handleSubmitInvitation = (e) => {
    e.preventDefault()
    sendNewInvitation(username, serverDetail.id).then((response) => {
      modalClose("invite-user-modal")
    })
  }

  const handleCLick = (parameter, e) => {
    setTextChannel(parameter)
  }

  return (
    <>
      {dataLoaded ? (
        <main>
          <AddCategoryModal
            handleSubmitCategory={handleSubmitCategory}
            modalClose={modalClose}
            setTitleNewCtg={setTitleNewCtg}
          />
          <AddChannelModal
            handleSubmitChannel={handleSubmitChannel}
            modalClose={modalClose}
            setTopicNewCh={setTopicNewCh}
            setTitleNewCh={setTitleNewCh}
          />
          <UserInvitationModal
            handleSubmitInvitation={handleSubmitInvitation}
            setUsername={setUsername}
            username={username}
            modalClose={modalClose}
          />
          <div className="columns pt-1">
            <div className="column is-2">
              <div className="card">
                <div className="card-image">
                  {/* is-4by3 */}
                  <figure className="image">
                    <img src={serverDetail.banner} />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">{serverDetail.title}</p>
                  <p className="subtitle is-6">{serverDetail.description}</p>
                </div>
                <div className="card-footer">
                  <a
                    onClick={modalTrigger.bind(this, "invite-user-modal")}
                    className="card-footer-item"
                  >
                    Invite People
                  </a>
                  <a className="card-footer-item">Leave Server</a>
                </div>
              </div>

              <br />

              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <button
                      onClick={modalTrigger.bind(this, "add-category-modal")}
                      className="button is-small is-primary is-rounded"
                    >
                      <span className="icon is-small">
                        <i className="material-icons">add</i>
                      </span>
                      <span>Category</span>
                    </button>
                    {serverDetail.categories.map((category) => (
                      <aside className="menu" key={category.id}>
                        <p className="menu-label">{category.title}</p>

                        <button
                          onClick={modalTrigger.bind(
                            this,
                            "add-channel-modal",
                            category.id
                          )}
                          className="button is-small is-primary is-rounded"
                        >
                          <span className="icon is-small">
                            <i className="material-icons">add</i>
                          </span>
                          <span>Channel</span>
                        </button>

                        <ul className="menu-list">
                          {category.text_channels.map((text_channel) => (
                            <li key={text_channel.id}>
                              <a onClick={handleCLick.bind(this, text_channel)}>
                                {text_channel.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </aside>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-7">
              <MainChat
                textChannel={textChannel}
                chatData={chatData}
                setChatData={setChatData}
                isAdmin={isAdmin}
                server={serverDetail.id}
              />
            </div>
            <div className="column is-2">
              <Members
                members={serverDetail.members}
                isAdmin={isAdmin}
                server={serverDetail.id}
              />
            </div>
          </div>
        </main>
      ) : (
        <DataNotLoaded>
          Click on any server to get the information about that.
        </DataNotLoaded>
      )}
    </>
  )
}

export default Server
// https://rt.bongacams.cam/Brilliant444
