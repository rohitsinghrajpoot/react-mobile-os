import "./App.css"

function App() {
  const data1 = ["Android","iphone","BlackBerry","Windows Phone"]
  const data2 =["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
      <h1>Mobile Operation System</h1>
      <ul>
        {data1.map((e) =>{
        return <Data DATA={e} />
        })}
          </ul>
          <h1>Mobile Manufacturer</h1>
          <ul>
            {
              data2.map((e)=>{
                return <Data2 DATA2={e} />
              })
            }
          </ul>
      </div>
  
  );
}

function Data(props){
  return <li>{props.DATA}</li>
}
function Data2(props){
  return <li>{props.DATA2}</li>}
  

export default App;
