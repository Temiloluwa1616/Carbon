function Utility() {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex gap-8  ">
          <div>
            <div className="mb-4">
              <label htmlFor="utility" className="block text-[15px] mb-2 font-bold">
                Utility
              </label>
              <select
                id="utility"
                name="utility"
                className="w-[15rem] p-4 border text-gray-500 font-semibold border-gray-300 rounded sm:w-[10rem]"
              >
                
                <option  value="utility">Utility</option>
              </select>
            </div>
            <button className="bg-[#dbd9dd] border mt-5 border-[#2b007a] font-bold rounded-lg ml-[9.2rem] text-[#2b007a] p-2  px-4 sm:ml-[4rem]">Proceed</button>
          </div>
  
          <div>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-[15px] mb-2 font-bold">
                Amount
              </label>
              <select
              
                id="amount"
                name="amount"
                className="w-[15rem] p-4  text-gray-500 font-semibold border border-gray-300 rounded sm:w-[10rem]"
              >
                
                <option  value="amount">Amount</option>
              </select>
            </div>
            <button className="bg-[#2b007a] rounded-lg mt-5 font-bold  text-white p-2.5 text-sm px-7">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Utility;
  