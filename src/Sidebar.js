import React from "react"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import './Sidebar.css'
import AddIcon from "@material-ui/icons/Add"
import SidebarChannel from "./SidebarChannel"

function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Clever Pogrammer</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon className="sidebar__addChannel"/>
                </div>
            </div>

            <div className="sidebar__channelsList">
                <SidebarChannel />
            </div>
        </div>
    )
}

export default Sidebar;