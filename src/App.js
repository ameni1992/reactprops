
import './App.css';
import  {Profile,AlertName}  from './Profile/Profile';

function App() {
  const handleName= fullName=>alert(fullName);
  return (
    <div className="App">
      <Profile><img src="/tulipe.jpg" alt="tulipe" className="fleur"/> </Profile>
      <Profile fullName= "Amani Bouchnak" />
      <div className="part"> 
      <Profile Bio ="I am 29 years old,I have a master's degree in risk management 
      and i like traveling and sport."/>
      <Profile profession="Future fullstask Javascript developer." />
      </div>
      <div className="click">
    <AlertName handleName={handleName}/>
    </div>
    </div>
  );
}

export default App;
