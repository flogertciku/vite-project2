const Details = (props)=>{
    return (
        <div className="row">
            <div class="card col-6" style={{width: `18 rem`}}>
  <div class="card-body">
    <h5 class="card-title">{props.userName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{props.email}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">{props.password}</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
        </div>
    )
}

export default Details;