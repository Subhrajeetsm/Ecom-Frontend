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
    color: 'black',
  }}
>
  <h2 style={{ color: 'black' }}>{props.id}</h2>

  <img
    src={props.img}
    alt={props.title}
    width="150px"
    height="150px"
  />

  <h2 style={{ color: 'black' }}>Title: {props.title}</h2>

  <h2 style={{ color: 'black' }}>Price: ${props.price}</h2>

  {/* Add Buttons Here */}
  <div style={{ marginTop: '15px' }}>
    <button
      style={{
        padding: '8px 12px',
        backgroundColor: '#2D6A4F',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        marginRight: '8px',
      }}
    >
      🛒 Cart
    </button>

    <button
      style={{
        padding: '8px 12px',
        backgroundColor: '#1D3557',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      Buy Now
    </button>
  </div>
</div>
  )
}

export default Card