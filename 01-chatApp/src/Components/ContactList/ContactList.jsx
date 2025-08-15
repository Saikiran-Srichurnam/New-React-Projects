import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiCheckDoubleLine } from "react-icons/ri";

function ContactList() {
  return (
    <div className='min-w-sm h-screen rounded-l-2xl overflow-hidden bg-neutral-900'>
      {/* SearchBar Start */}
      <div className='mx-4 mt-10 '>
        <div className='flex justify-start items-center bg-transparent text-white w-full px-3 py-2 rounded-lg border-1 border-gray-400'>
          <IoMdSearch className="font-bold size-8 mr-2 text-neutral-700" />
          <input type="text" placeholder='Search or input.. ' className=' focus:ring-none w-full focus:outline-none' />
        </div>
        {/* SearchBat ends here.. */}

        {/* Contact-Details */}
        <section className='Contact-details mt-1'>
          <div className='flex gap-2 w-full items-center hover:bg-neutral-800'>
            <div className=''><CgProfile className='size-12 mr-2 text-gray-500 rounded-full p-0.5' /></div>
            <div className="gap-2 text-white text-[14px]">
              <div className='flex  mt-2 gap-36'>
                <h2 className='font-bold text-md'>Kiran</h2>
                <h2>15-08-2025</h2>
              </div>
              <div className='flex justify-start gap-1 mb-2'>
                <div><RiCheckDoubleLine className='size-6 text-blue-400' /></div>
                <div>good night bye</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div >
  )
}

export default ContactList;

