import Logo from '../../assets/mypngs/logo.png'
import Button from '../btn/Button'
import Sharednav from './Sharednav'




function LandingPage(){
  
    return(
      <Sharednav>
        <div className="flex px-[4rem]  h-screen gap-[8] sm:px-[1rem]">
            <div className='w-[50%]'>
         <div className='py-[9rem]'>
           
                <h1 className=" text-[2rem] w-[30rem] font-bold sm:w-[20rem]">Digital Banking For All <span className="bg-[#32bb78] text-white px-3 rounded-xl">Lifestyles</span></h1>
                <p  className="text-[18px] w-[30rem] mt-12 font-normal  text-gray-600 sm:text-[18px] sm:w-[20rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis, 
                    ad vero perferendis illum qui? Sit, inventore quisquam unde numquam tempora.</p>

                    <Button
          text="Get Started"
          className="text-white font-medium bg-[#32bb78] mt-11 hover:text-blue-500 rounded-xl p-[.4rem]"
        />

            
         </div>

         </div>

         <div className='w-[50%]  bg-HeroBG bg-cover bg-no-repeat sm:bg-none'>
</div>


        </div>
        </Sharednav>
    )
}

export default LandingPage