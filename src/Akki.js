import './App.css'; 
function Akki(){
const friends=
[
    {id:1,Name:"Somesh Ranjan"},
    {id:2,Name:"Anand yadav"},
    {id:3,Name: "Alok yadav"}
];
return(
    <div>
        <h1>List of my friends name</h1>
    <ul>
        {friends.map((A)=>{
            return<li v={A.id}>{A.Name}</li> 
        })}
        
    </ul>
    </div>
    
)
    }
    export default Akki;