import Logo from '../../assets/mypngs/logo.png'
import rafiki from '../../assets/mypngs/rafiki.png'
import { useForm } from '../postcontext/Formcontext/Form';
import React, { useContext } from 'react'
import { PostContext } from '../postcontext/Post';



function Signup(){
  const {dispatch } = useForm();
  // const {handleSubmit} = useContext(PostContext)

  function getSurname(e){
    dispatch({ type: 'DATA_FETCHED', payload: e.target.value });
  }

  function getEmail(e) {
    dispatch({ type: 'DATA_FETCHED', payload: e.target.value });
  }
    return(
        <div className="px-[6rem] h-screen sm:px-7">
             <div>
                <span className=''>
            <img src={Logo} alt="" className="sm:ml-[6rem]" />
            </span>
            
                </div>
             

            <div className="flex gap-[5rem] mt-4 items-center sm:flex-col">



            <div className='sm:mt-8'>
                <img src={rafiki} alt="" className='w-[30rem] sm:w-[35rem]'  />
            </div>
                
                <div>
                <div className="text-center mb-8">
                    <h1  className="text-[2rem] mb-4 w-[30rem] font-bold sm:w-[25rem] sm:ml-5">Sign Up for an Account</h1>
                    <p className="text-[18px] w-[30rem] font-medium  text-gray-600 sm:w-[23rem] sm:ml-[2rem]">Lets Get you all set up for the Carbon Experience</p>
                </div>

                <div className="flex gap-5 sm:flex-col sm:items-center sm:gap-2">
                <form>
      <div className="mb-4">
        <label htmlFor="surname" className="block text-[15px] mb-2 font-bold">Surname</label>
        <input type="surname" id="surname" name="surname" placeholder='Surname' onChange={getSurname} className="w-[15rem] p-2 border border-gray-300 rounded sm:w-[20rem]"/>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-[15px] mb-2 font-bold">Email Adress</label>
        <input type="email" id="email" name="email" placeholder='Email Adress' onChange={getEmail} className="w-[15rem] p-2 border border-gray-300 rounded sm:w-[20rem]"/>
      </div>
      <div className="mb-4">
        <label htmlFor="dob" className="block text-[15px] mb-2 font-bold">Date of Birth</label>
        <input type="dob" id="pin" name="dob" placeholder='Date of Birth' className="w-[15rem] p-2 border border-gray-300 rounded sm:w-[20rem]"/>
      </div>
     
    </form>

    <form>
      <div className="mb-4">
        <label htmlFor="othername" className="block text-[15px] mb-2 font-bold">Other Name</label>
        <input type="othername" id="othername" name="othername" placeholder='Other Name' className="w-[15rem] p-2 border border-gray-300 rounded sm:w-[20rem]"/>
      </div>
      <div className="mb-4">
        <label htmlFor="pin" className="block text-[15px] mb-2 font-bold">PIN</label>
        <input type="password" id="pin" name="pin" placeholder='PIN' className="w-[15rem] p-2 border border-gray-300 rounded sm:w-[20rem]"/>
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block text-[15px] mb-2 font-bold">Gender</label>
        <input type="gender" id="gender" name="gender" placeholder='Gender' className="w-[15rem] p-2 border border-gray-300 rounded sm:w-[20rem]"/>
      </div>
      </form>
</div>

<div className=" items-center mb-6 sm:text-center">
        <input type="checkbox" id="terms"  name="terms" className="mr-2"/>
        <label htmlFor="terms" className="font-semibold">i Agree to carbons Terms and Coditions</label>
      </div>
<div className='sm:text-center'><button type="log" className="w-[31.5rem] py-2 px-4 bg-[#2b007a] text-white font-semibold rounded hover:bg-blue-600 sm:w-[20rem] sm:px-0">Log in</button></div>
  <div className='sm:text-center sm:mt-3'><a href="">Already have an account? log in</a></div>

        
            </div>
           


            
            </div>
        </div>
    )
}

export default Signup