
import './App.css'
import { ContactList, IndividualContact, Navbar } from './Components';
import { FaWhatsapp } from "react-icons/fa";

function App() {

  return (
    <div className='w-full bg-black'>
      <h1 className=' text-green-600 pt-4 pb-2 pl-8 text-3xl'><FaWhatsapp /></h1>
      <div className='flex'>
        <Navbar />
        <ContactList />
        <IndividualContact />
      </div>
    </div>
  )
}

export default App
