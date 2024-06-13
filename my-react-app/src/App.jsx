import Header from './1Header.jsx'
import Footer from './2Footer.jsx'
import Food from './3Food.jsx'
import Card from './4Card.jsx'
import Button from './5Button/Button.jsx'
import Student from './6Student.jsx'
import UserGreeting from './7UserGreeting.jsx'
import List1 from './8List1.jsx'
import List2 from './9List2.jsx'
import Button2 from './10Button.jsx'
import ProfilePicture from './11ProfilePicture.jsx'
import UseState from './12useStateHook.jsx'
import OnChange from './13onChangeHandler.jsx'
import UpdaterFunction from './14UpdaterFunction.jsx'
import UFObjects from './15U.F-Objects.jsx'
import UFArrays from './16U.F-Arrays.jsx'
import UFAO from './17U.F-ArrayOfObjects.jsx'
import UseEffect from './18UseEffect.jsx'
import UseEffect2 from './18.1UseEffect.jsx'

function App() {

  const fruits = [{id: 1, name: "Apple", calories: 95}, 
                      {id: 2, name: "Orange", calories: 45}, 
                      {id: 3, name: "Banana", calories: 105}, 
                      {id: 4, name: "Coconut", calories: 159}, 
                      {id: 5, name: "Pineapple", calories: 37}];

  const vegetables = [{id: 6, name: "Potatoes", calories: 110}, 
                      {id: 7, name: "Celery", calories: 15}, 
                      {id: 8, name: "Carrots", calories: 25}, 
                      {id: 9, name: "Corn", calories: 63}, 
                      {id: 10, name: "Broccoli", calories: 50}];

  return(
    <>
      <Header/>
      {/* <Food/> */}
      <Card/>
      
      <Button/>

      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student/>

      <UserGreeting isLoggedIn={true} username="Ajai"/>

      <List1/>
      {/* dont render component if list is empty */}
      {fruits.length > 0 ? <List2 items={fruits} category="Fruits"/> : null}
      {vegetables.length > 0 && <List2 items={vegetables} category="Vegetables"/>}
      
      <Button2/>
      <ProfilePicture/>

      <UseState/>
      <OnChange/>
      <UpdaterFunction/>
      <UFObjects/>
      <UFArrays/>
      <UFAO/>

      <UseEffect/>
      <UseEffect2/>

      <Footer/>
    </>
  );
}

export default App
