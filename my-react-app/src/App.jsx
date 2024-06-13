import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List1 from './List1.jsx'
import List2 from './List2.jsx'
import Button2 from './Button.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'

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

      <MyComponent/>
      <Footer/>
    </>
  );
}

export default App
