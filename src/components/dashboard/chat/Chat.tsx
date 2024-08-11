import ChatContent from "./ChatContent";
import NavChat from "./NavChat";
import TypeBar from "./TypeBar";
import classes from './Chat.module.css'

const Chat = () => {
  
  return <div className={classes['chat-container']}>
    <NavChat />
    <ChatContent/>
    <TypeBar />
  </div>
}

export default Chat;