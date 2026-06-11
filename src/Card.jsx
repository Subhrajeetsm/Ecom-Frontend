
function Card(props) {
  return (
    <div style={{border:"1px red solid",
      width:"300px",
      padding:"20px",
      margin:"10px",
      borderRadius:"10px"
     }}  >
       <img height={250} width={250}  src={props.img} alt="" />
        <h2>{props.title}</h2>
        <h3>price:{props.price}</h3>
    
    </div>
  )
}

export default Card