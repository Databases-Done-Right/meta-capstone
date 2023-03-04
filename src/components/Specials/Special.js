const Special = (props) => {
    return (
      <div>
        <img src={props.image} alt="Homepage Hero" />
        <h4>{props.name} <span>{props.price}</span></h4>
        <p>{props.description}</p>
        <p class="specials__order_delivery"><a href={props.order_link}>Order Delivery</a></p>
      </div>
    );
  }
  
  export default Special;