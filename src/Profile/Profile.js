
import PropTypes from 'prop-types'
const style={color:"brown"}
export const Profile =(props)=>{
return(<div style={style}>
    
<h1>  {props.fullName} </h1>
<h3>{props.Bio} {props.profession}</h3>
{props.children}
</div>)
};
export const AlertName=props=>{
    return(
     <button  onClick={()=>props.handleName('Hello my name is Amani Bouchnak')}> 
     clickMe
     </button>   
    )
}
//propTypes//
Profile.propTypes={
fullName: PropTypes.string.isRequired,
Bio : PropTypes.string.isRequired
}
//default props//
Profile.defaultProps={
    fullName:""
}
