import AccordionItem from "../Accordion/Accordion"
import Button from "../btn/Button"

function Complaint(){
    return(
        <div className="px-[3rem] py-4 sm:px-5">
            <div className="bg-[#600aff] p-1.5 w-[57rem] text-white sm:w-[23rem]">
        <h1 className="text-[1.2rem] px-[3rem]  font-bold sm:text-center">Complaints</h1>
        
      </div>


      <div className="py-[4rem]">
        <p className="text-[18px] w-[20rem] font-medium pb-4 text-gray-600">
          Basic Information
        </p>
        <div className="flex gap-5 sm:flex-col">
          <form>
            <div className="mb-4">
              <label for="occupation" className="block text-[15px] mb-2 font-bold">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Name"
                className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
              />
            </div>
          </form>

          <form>
            <div className="mb-4">
              <label for="employer" className="block text-[15px] mb-2 font-bold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
              />
            </div>
          </form>
        </div>

        <div>
          <div className="mb-2">
            <label for="employeradress" className="block text-[15px] mb-2 font-bold">
              Message
            </label>
            <input
              type="message"
              id="message"
              name="message"
              placeholder="Message"
              className="w-[54rem] p-[4rem] border border-gray-300 rounded sm:w-[23rem] sm:p-6"
            />
            
          </div>
          <div className=" items-center">
        <input type="checkbox" id="subscribe"  name="subscribe" className="mr-2"/>
        <label for="subscribe" className="font-semibold">Subscribe to our news letters</label>
      </div>
          <Button
          text='Submit'
          className="bg-[#2b007a] rounded-lg text-white p-2 text-sm px-4 ml-[49.5rem] sm:ml-[10rem] sm:mt-5"/>
        </div>
      </div>

      <div className="bg-[#600aff] w-[57rem] p-1.5 text-white mb-8 sm:w-[23rem]">
        <h1 className="text-[1.2rem] px-[3rem]  font-bold">Frequently Asked Questions</h1>
        
      </div>

      <div className="flex-col gap-7 space-y-3">
      <AccordionItem
        title= "What is Carbon?"
        content="Carbon is a bank that provides financial services with a focus on sustainability and environmentally friendly practices."
        isHighlighted={true}
        className="ml-[39rem] cursor-pointer sm:ml-[16rem]"
       />
      <AccordionItem
        title="Why use Carbon?"
        content={
          <ul>
            <li className="mb-2 bg-blue-500 text-white rounded-xl p-4">They offer competitive interest rates and low fees.</li>
            <li className="mb-2 bg-blue-500 text-white rounded-xl p-4">Carbon is committed to supporting renewable energy projects.</li>
            <li className="mb-2 bg-blue-500 text-white rounded-xl p-4">They provide innovative digital banking features.</li>
            <li className="mb-2 bg-blue-500 text-white rounded-xl p-4">Carbon actively contributes to environmental causes.</li>
          </ul>
        }
        isHighlighted={true}
        className="ml-[38.5rem] cursor-pointer sm:ml-[15.5rem]"
      />
      <AccordionItem
        title="Do I get an ATM card with Carbon?"
        content="Yes, Carbon provides ATM cards to its customers, allowing you to access your funds at ATMs and make purchases at merchants that accept cards."
        isHighlighted={true}
        className="ml-[30.5rem] cursor-pointer sm:ml-[8.5rem]"
      />
    </div>
      
        </div>
    )
}

export default Complaint