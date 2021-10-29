import React, { useEffect, useState } from "react"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import Server from "../layout/Server"
import ServersNav from "../layout/ServersNav"
import { getSideNavServers } from "./services/servers"

const Home = () => {
  const [sideNavServers, setSideNavServers] = useState([])
  const [activeServer, setActiveServer] = useState()
  const [textChannel, setTextChannel] = useState()
  const [chatData, setChatData] = useState()

  useEffect(() => {
    getSideNavServers().then((response) => {
      setSideNavServers(response)
    })
  }, [])

  return (
    <div>
      <Header />
      <div className="columns">
        <div className="column is-1">
          <ServersNav
            servers={sideNavServers}
            setActiveServer={setActiveServer}
            setTextChannel={setTextChannel}
            setChatData={setChatData}
          />
        </div>
        <div className="column is-11">
          <Server
            servers={sideNavServers}
            activeServer={activeServer}
            textChannel={textChannel}
            setTextChannel={setTextChannel}
            chatData={chatData}
            setChatData={setChatData}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
