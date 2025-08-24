
const Message = ({status, color}) => {
  return (
    <div className="message">
      <h4>Message</h4>
      <p>{status}</p>
      <div className={`progress-bar ${color}`}></div>
    </div>
  )
}

export default Message
