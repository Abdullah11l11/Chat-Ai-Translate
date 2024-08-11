import classes from './Message.module.css'

const Message: React.FC<{ message: string | JSX.Element | undefined, me: boolean }> = ({ message, me }) => {
  

  return <div className={classes.message} style={{flexDirection: me ? 'row-reverse' : 'row', justifyContent:'flex-start'}}>
    <div className={classes.icon}>{me ? 'You' : "Bot"}</div>
    <div className={classes['message-content']}>{message}</div>
  </div>
}

export default Message