function Card(props) {
  return (
    <div
      style={{
        width: '250px',
    padding: '20px',
    margin: '10px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#F4C2C2',
    color:'black',

      }}
    >
      <h2 style={{ color: 'black' }}> {props.id}</h2>
      <h2 style={{ color: 'black' }}> {props.title}</h2>

      <img
        src={props.image}
        alt={props.title}
        width="150px"
        height="150px"
      />

      <h2 style={{ color: 'black' }}>Title: {props.title}</h2>

      <h2 style={{ color: 'black' }}>Price: ${props.price}</h2>
    </div>
  )
}

export default Card