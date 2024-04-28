import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';

function App() {

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

    </>
    
  );
}

export default App
