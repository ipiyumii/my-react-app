import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx'
import ReusableList from './assets/ReusableList.jsx';
import ButtonClick from './ButtonClick.jsx';
import ProfilePicture from './profilePicture.jsx';

function App() {

  const fruits = [{id: 1, name: "Banana", calories: 30},
                    {id: 2, name: "orange", calories: 140},
                    {id: 3, name: "Apple", calories: 35},
                    {id: 4, name: "Kivi", calories: 150},
                    {id: 5, name: "pineapple", calories: 55}];

  const vegitable = [{id: 6, name: "carrot", calories: 30},
                    {id: 7, name: "beet root", calories: 140},
                    {id: 8, name: "egg plant", calories: 35},
                    {id: 9, name: "beans", calories: 150},
                    {id: 10, name: "lf", calories: 55}];
  return(
    <>
      <Header/>
      <Food/>
      <Footer/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Button/>
      <Student name="piyumi" age={30} isStudent={true}/>
      <Student name="imalka" age={22} isStudent={false}/>
      <Student name="sinethu" age={11} isStudent={true}/>
      <Student name="piumx" age={50} isStudent={false}/>
      <Student/>
      <UserGreeting isLoggedIn={false} username ="jane"/>
      <UserGreeting isLoggedIn={true} username ="jane"/>
      <UserGreeting/>
      <List/>

      { /* conditional rendering */ }
      {fruits.length > 0? <ReusableList items = {fruits} category = "fruits" /> : null} 
      {vegitable.length > 0 &&  <ReusableList items = {vegitable} category = "Vegitables" />}

      <ButtonClick/>

      <ProfilePicture/>

    </>
    
  );
}

export default App
