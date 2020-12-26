import React from "react"
import "./Chat.css"
import ChatHeader from "./ChatHeader"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions"
import GifIcon from "@material-ui/icons/Gif"
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard"

function Chat() {
    return(
        <div className="chat">
            <ChatHeader /> 

            <div className="chat__messages">
            
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input placeholder={`Message #Test Channel`} />
                    <button className="chat__inputButton" type="submit">Send message</button>
                </form>  

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div> 
        </div>
    )
}

export default Chat