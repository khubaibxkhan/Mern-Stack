import "./Card.css"
export const Card = ({name , username , email , phone , company}) => {
  return (
    <div className="card">
        <h2>{name}</h2>
        <p className="username"><span>Username: </span>{username}</p>
        <p><span>Email: </span>{email}</p>
        <p><span>Phone: </span>{phone}</p>
        <p><span>Company: </span>{company}</p>
    </div>
  )
}

