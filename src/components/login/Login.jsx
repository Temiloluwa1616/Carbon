import Logo from '../../assets/mypngs/logo.png'
import pana from '../../assets/mypngs/pana.png'


function Login(){
    return(
        <div className="px-[6rem] h-screen sm:px-[1rem]">
             <div>
                <span>
            <img src={Logo} alt="" className="" />
            </span>
            
                </div>
             

            <div className="flex gap-[5rem] mt-11 items-center sm:flex-col">
                
                <div>
                <div className="text-center">
                    <h1  className="text-[2rem] w-[25rem] font-bold">Log in to Your Account</h1>
                    <p className="text-[18px] w-[30rem] m-6 font-normal  text-gray-600 sm:w-[25rem]">Log into Your Account to Continue the Carbon Experience</p>
                </div>
                <div className='ml-[1.5rem]'>
                <form>
      <div className="mb-4">
        <label for="email" className="block mb-2 font-bold">Enter Email</label>
        <input type="email" id="email" name="email" placeholder='Email' className="w-[30rem] p-2 border border-gray-300 rounded sm:w-[24rem]"/>
      </div>
      <div className="mb-4">
        <label for="pin" className="block mb-2 font-bold">Enter PIN</label>
        <input type="password" id="pin" name="pin" placeholder='PIN' className="w-[30rem] p-2 border border-gray-300 rounded sm:w-[24rem]"/>
      </div>
      <div className="flex items-center mb-6">
        <input type="checkbox" id="forgotPassword"  name="forgotPassword" className="mr-2"/>
        <label for="forgotPassword" className="font-semibold">Forgot Password</label>
      </div>
      
      <button type="submit" className="w-[30rem] py-2 px-4 bg-[#2b007a] text-white font-semibold rounded hover:bg-blue-600 sm:w-[24rem]">Log in</button>
      <div>
      <a href="">Already have an Account? Log in</a></div>
    </form>


        </div>

        
            </div>
           


            <div>
                <img src={pana} alt="" className='w-[30rem]'/>
            </div>
            </div>
        </div>
    )
}

export default Login