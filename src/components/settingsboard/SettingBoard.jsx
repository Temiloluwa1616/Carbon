function SettingBoard() {
  return (
    <div className="px-[3rem] py-4  sm:px-5 ">
      <div className="bg-[#600aff] px-[4rem] text-white flex justify-between items-center sm:px-5">
        <h1 className="text-[1.5rem]   font-bold  sm:text-base sm:font-medium">Settings</h1>
        <div className="space-x-[8rem] sm:space-x-2 sm:ml-6">
          <a href="" className="text-[15px] font-medium">
            Profile
          </a>
          <a href="" className="text-[15px] font-medium">
            Bank
          </a>
        </div>
        <h1 className="text-[1.5rem]  font-normal sm:text-base">Documentation</h1>
      </div>
    <form>
      <div className="py-[4rem]">
        <p className="text-[18px] w-[20rem] font-medium pb-4 text-gray-600">
          Basic Information
        </p>

        <div className="flex gap-5 sm:flex-col">
          <div>
            <div className="mb-4">
              <label for="email" className="block text-[15px] mb-2 font-bold">
                Title
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Title"
                className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
              />
            </div>
            <div className="mb-4">
              <label for="pin" className="block text-[15px] mb-2 font-bold">
                Last Name
              </label>
              <input
                type="password"
                id="pin"
                name="pin"
                placeholder="Last Name"
                className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
              />
            </div>

            <div className="flex gap-10">
              <div className="mb-4">
                <label for="pin" className="block text-[15px] mb-2 font-bold">
                  Gender
                </label>
                <input
                  type="password"
                  id="pin"
                  name="pin"
                  placeholder="Gender"
                  className="w-[12rem] p-2 border border-gray-300 rounded sm:w-[10rem]"
                />
              </div>

              <div className="mb-4">
                <label for="pin" className="block text-[15px] mb-2 font-bold">
                  Marital Status
                </label>
                <input
                  type="password"
                  id="pin"
                  name="pin"
                  placeholder="Marital Status"
                  className="w-[12rem] p-2 border border-gray-300 rounded sm:w-[10rem]"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label for="email" className="block text-[15px] mb-2 font-bold">
                First Name
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="First Name"
                className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
              />
            </div>
            <div className="mb-4">
              <label for="pin" className="block text-[15px] mb-2 font-bold">
                Maiden Name
              </label>
              <input
                type="password"
                id="pin"
                name="pin"
                placeholder="Maiden Name"
                className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
              />
            </div>

            <div className="flex gap-10">
              <div className="mb-4">
                <label for="dob" className="block text-[15px] mb-2 font-bold">
                  Date of birth
                </label>
                <input
                  type="dob"
                  id="dob"
                  name="dob"
                  placeholder="Date of birth"
                  className="w-[12rem] p-2 border border-gray-300 rounded sm:w-[10rem]"
                />
              </div>

              <div className="mb-4">
                <label for="pin" className="block text-[15px] mb-2 font-bold">
                  Religion
                </label>
                <input
                  type="password"
                  id="pin"
                  name="pin"
                  placeholder="Religion"
                  className="w-[12rem] p-2 border border-gray-300 rounded sm:w-[10rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <p className="text-[18px] w-[20rem] font-medium pb-4 text-gray-600">
          Contact Information
        </p>
        <div className="flex gap-5 sm:flex-col">
          <div>
            <div className="mb-4">
              <label for="phonenumber" className="block text-[15px] mb-2 font-bold">
                Phone Number
              </label>
              <input
                type="phonenumber"
                id="phonenumber"
                name="phonenumber"
                placeholder="Phone Number"
                className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
              />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label for="email" className="block text-[15px] mb-2 font-bold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <label for="email" className="block text-[15px] mb-2 font-bold">
              Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="First Name"
              className="w-[54rem] p-2 border border-gray-300 rounded sm:w-[23rem] sm:p-4"
            />
          </div>

          <div className="flex gap-5 sm:flex-col">
            <div>
              <div className="mb-4">
                <label for="email" className="block text-[15px] mb-2 font-bold">
                  State Of Origin
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Title"
                  className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
                />
              </div>

              <div className="mb-4">
                <label for="email" className="block text-[15px] mb-2 font-bold">
                  HomeTown
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Title"
                  className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
                />
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label for="lga" className="block text-[15px] mb-2 font-bold">
                  L.G.A
                </label>
                <input
                  type="lga"
                  id="lga"
                  name="lga"
                  placeholder="L.G.A"
                  className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
                />
              </div>
              <div className="mb-4">
                <label for="nationality" className="block text-[15px] mb-2 font-bold">
                  Nationality
                </label>
                <input
                  type="nationality"
                  id="nationality"
                  name="nationality"
                  placeholder="Nationality"
                  className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[4rem]">
        <p className="text-[18px] w-[20rem] font-medium pb-4 text-gray-600">
         Next Of Kin
        </p>
        <div className="flex gap-5 sm:flex-col">
          <div>
            <div className="mb-4">
              <label for="email" className="block text-[15px] mb-2 font-bold">
                First Name
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Title"
                className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
              />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label for="lastname" className="block text-[15px] mb-2 font-bold">
                Last Name
              </label>
              <input
                type="lastname"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <label for="address" className="block text-[15px] mb-2 font-bold">
              Address
            </label>
            <input
              type="address"
              id="address"
              name="address"
              placeholder="Address"
              className="w-[54rem] p-2 border border-gray-300 rounded sm:w-[23rem] sm:p-4"
            />
          </div>

          <div className="flex gap-5 sm:flex-col">
            <div>
              <div className="mb-4">
                <label for="email" className="block text-[15px] mb-2 font-bold">
                  Relationship
                </label>
                <input
                  type="relationship"
                  id="relationship"
                  name="relationship"
                  placeholder="Relationship"
                  className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
                />
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label for="email" className="block text-[15px] mb-2 font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[4rem]">
        <p className="text-[18px] w-[20rem] font-medium pb-4 text-gray-600">
          Employment
        </p>
        <div className="flex gap-5 sm:flex-col">
          <div>
            <div className="mb-4">
              <label for="occupation" className="block text-[15px] mb-2 font-bold">
                Occupation
              </label>
              <input
                type="occupation"
                id="occupation"
                name="occupation"
                placeholder="Occupation"
                className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
              />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label for="employer" className="block text-[15px] mb-2 font-bold">
                Employer
              </label>
              <input
                type="employer"
                id="employer"
                name="employer"
                placeholder="Employer"
                className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <label for="employeradress" className="block text-[15px] mb-2 font-bold">
              Employer`s Adress
            </label>
            <input
              type="employeradress"
              id="employeradress"
              name="employeradress"
              placeholder="Employer`s Adress"
              className="w-[54rem] p-4 border border-gray-300 rounded sm:w-[23rem] sm:p-6"
            />
          </div>
        </div>
      </div>

      <div className="py-[4rem]">
        <p className="text-[18px] w-[20rem] font-medium pb-4 text-gray-600">
          Identity
        </p>
        <div className="flex gap-5 sm:flex-col">
          <div>
            <div className="mb-4">
              <label for="bvn" className="block text-[15px] mb-2 font-bold">
                BVN
              </label>
              <input
                type="bvn"
                id="bvn"
                name="bvn"
                placeholder="BVN"
                className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
              />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label for="ldnumber" className="block text-[15px] mb-2 font-bold">
              LD Number
              </label>
              <input
                type="ldnumber"
                id="ldnumber"
                name="ldnumberr"
                placeholder="ldnumber"
                className="w-[26.5rem] p-2 border border-gray-300 rounded sm:w-[23rem]"
              />
            </div>
            <button className="bg-[#2b007a] rounded-lg text-white p-2 text-sm px-4 ml-[21.5rem] sm:ml-[9rem]">
                Submit
              </button>
          </div>
        </div>
      </div>
      </form>

    </div>
  );
}

export default SettingBoard;
