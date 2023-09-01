const List = (props)=>{
  const { list} = props
    return(
        <div className="col-6">
        <table class="table" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    {list.map((form,index) =>{
      return(
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{form.email}</td>
        <td>{form.password}</td>
        <td>{form.username}</td>
      </tr>
      )

    })}
   
  
  </tbody>
</table>
        
        </div>
    )
}


export default List;