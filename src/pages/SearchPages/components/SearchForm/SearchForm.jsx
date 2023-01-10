import React from "react";

const SearchForm = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="block md:flex justify-center items-center">
          <div className="m-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              ORIGIN PORT *
            </label>
            <select
              // value={OriginPort}
              // onChange={(e) => {
              //   handleOriginPort(e);
              // }}
              class="shadow appearance-none border rounded w-60 md:w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center font-semibold pb-1 pt-1"
            >
              <option value="" disabled selected>
                Select Origin Port
              </option>
              {/* {Ports.map((e) => {
                return (
                  <option value={e.NameOfThePort}>
                    {e.NameOfThePort},{e.Country}
                  </option>
                );
              })} */}
            </select>
          </div>
          <div className="m-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              DESTINATION PORT *
            </label>
            <select
              // value={DestinationPort}
              // onChange={(e) => {
              //   handleDestinationPort(e);
              // }}
              class="shadow appearance-none border rounded w-60 md:w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center font-semibold pb-1 pt-1"
            >
              <option value="" disabled selected>
                Select Destination Port
              </option>
              {/* {Ports.map((e) => {
                return (
                  <option value={e.NameOfThePort}>
                    {e.NameOfThePort},{e.Country}
                  </option>
                );
              })} */}
            </select>
          </div>
        </div>
        <div className="block md:flex justify-center items-center">
          <div className="m-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              LOADING TYPE *
            </label>
            <select
              // value={LoadingType}
              // onChange={(e) => {
              //   handlesetLoadingType(e);
              // }}
              class="shadow appearance-none border rounded w-60 md:w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center font-semibold pb-1 pt-1"
            >
              <option value="" disabled selected>
                Select Loading Type
              </option>
              <option value="20FT">20FT</option>
              <option value="40FT">40FT</option>
              <option value="40FT High Cube">40FT High Cube</option>
            </select>
          </div>
          <div className="m-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              CARGO TYPE *
            </label>
            <select
              // value={CargoType}
              // onChange={(e) => {
              //   handleCargoType(e);
              // }}
              class="shadow appearance-none border rounded w-60 md:w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center font-semibold pb-1 pt-1"
            >
              <option value="" disabled selected>
                Select Cargo Type
              </option>

              <option value="Dangerous Cargo">
                Dangerous Cargo[DG Cargo ]
              </option>
              <option value="Non-Dangerous Cargo">
                Non-Dangerous Cargo[Non-DG Cargo ]
              </option>
            </select>
          </div>
        </div>
        <div
          // ref={sentmailsection}
          className="block md:flex justify-center items-start"
        >
          <div className="m-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2 "
              for="username"
            >
              SELECT LOADING DATE*
            </label>
            <input
              // value={Date}
              // onChange={(e) => {
              //   handleValidTill(e);
              // }}
              class="shadow appearance-none border rounded w-60 md:w-80 pb-1 pt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-semibold text-center"
              id="username"
              type="date"
              placeholder="Username"
            />
          </div>
        </div>
        {/* <div className='flex justify-start items-center'> */}

        <div className="flex justify-center items-start">
          <div className="m-4">
            <button
              // onClick={Checkrates}
              className="bg-[#7300f7] w-40 md:w-80 pt-3 pb-3 pl-6 pr-6 text-white font-bold rounded-md"
            >
              Check Rates
            </button>
          </div>
        </div>
        {/* </div> */}
        <div></div>

        {/* {showsendmailbutton ? (
          <div className="flex justify-center items-start">
            <div className="m-4">
              <h1 className="text-center mb-2">{mailresponse}</h1>
              <button
                id="#mailbtn"
                onClick={sendmail}
                className="bg-[#81e37a] w-40 md:w-80 pt-3 pb-3 pl-6 pr-6 text-white font-bold rounded-md"
              >
                Request
              </button>
            </div>
          </div>
        ) : (
          <h3 className="text-center m-4"></h3>
        )} */}

        {/* {OceanFreightRates.length <= 0 ? <Text>{``}</Text> : OceanFreightRates.map((freightrate) => {
                    return <OceanRatesContainer freightrate={freightrate} />

                })} */}
      </div>
    </div>
  );
};

export default SearchForm;
