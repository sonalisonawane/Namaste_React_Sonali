const User = (props)=>{
    const{name} = props
    return(
    <>
    <div className="user-class">
        <h1 className="name">Name:{name}</h1>
        <h2>Location:Pune</h2>
        <h3>Contact: 8855941561</h3>
    </div>
    
    </>)
}
export default User;