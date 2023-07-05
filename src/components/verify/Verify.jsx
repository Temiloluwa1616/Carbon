import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

function Verify(){
    const [otp, setOtp] = useState('');
    


    return(
        <div className='bg-polygon  bg-cover bg-no-repeat flex items-center justify-center h-screen'>
            <div>
           <div className="justify-center text-center">
            <h1 className="text-[1.5rem] font-bold">Verify E-mail</h1>
            <p className="text-[18px] mt-5 font-medium pb-4 text-gray-600">Please Enter the 6 digit OTP sent to johndoe@email.com</p>
            </div>
            <div className="flex gap-6 justify-center">
            <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            isInputNum={true}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{color:"#127c71", width: '2.5rem', height:'2.5rem', border: '1px solid gray'}}
          />
            </div>

            <div className="justify-center text-center">
            <button className="bg-[#2b007a] mt-5 rounded-lg font-bold  text-white p-2.5 text-sm px-7">Verify E-mail</button>
            </div>
            </div>
           
        </div>
    )
}

export default Verify