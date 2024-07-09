import React from 'react'

function Contacts() {
  return (
    <>
    <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] ">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              

              <h3 className="font-bold text-lg">Contact Us</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  
                />
                <br />
               
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  
                />
                <br />
                
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Message"
                  className="w-80 h-[80px] px-3 py-1 border rounded-md outline-none"
                  
                />
                <br />
                
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Submit
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Contacts