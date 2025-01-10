import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Heading = () => {
  const [time, setTime] = useState();

  const [Persons, setPersons] = useState();
  const handlePersons = (e) => {
    setPersons(Number(e.target.value));
  };

  const handleTime = (e) => {
    setTime(Number(e.target.value));
  };

  const position = [51.505, -0.09];
  return (
    <section className="w-full relative m-auto">
      <div className=" items-center text-center pt-10 h-[400px]">
        <h1 className="font-playfair text-8xl text-light ">Book A Table</h1>
        <p className="text-desaturatedBlueGray font-dmSans text-lg w-[50%] mx-auto">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>
      <div className="bg-white z-50 w-[812px] absolute left-[17%] top-[240px] mx-auto rounded-[10px] border shadow-lg">
        <form className="p-6 flex flex-col">
          <div className="flex  justify-between gap-4">
            <div className="flex flex-col text-left gap-2">
              <p className="font-dmSans font-bold text-base">Date</p>
              <input
                type="date"
                className="w-[350px] h-[60px] px-4 border border-pileGrey rounded-full"
              />
            </div>
            <div className="flex flex-col text-left gap-2">
              <p className="font-dmSans font-bold text-base">Time</p>
              {/* <input type="time"   className="w-[350px] h-[60px] px-4 border border-pileGrey rounded-full" /> */}
              <div className="w-[350px] h-[60px] px-4  border border-pileGrey rounded-full flex justify-center items-center">
                <select
                  name=""
                  id=""
                  className="w-full  border-none"
                  onChange={handleTime}
                >
                  <option value="00:00">00:00</option>

                  <option value="01:00">01:00 Am</option>

                  <option value="02:00">02:00 Am</option>

                  <option value="03:00">03:00 Am</option>

                  <option value="04:00">04:00 Am</option>

                  <option value="05:00">05:00 Am</option>

                  <option value="06:00">06:00 Am</option>

                  <option value="07:00">07:00 Am</option>

                  <option value="08:00">08:00 Am</option>

                  <option value="09:00">09:00 Am</option>

                  <option value="10:00">10:00 Am</option>

                  <option value="11:00">11:00 Am</option>

                  <option value="12:00">12:00 Am</option>

                  <option value="13:00">13:00 Pm</option>

                  <option value="14:00">14:00 Pm</option>

                  <option value="15:00">15:00 Pm</option>

                  <option value="16:00">16:00 Pm</option>

                  <option value="17:00">17:00 Pm</option>

                  <option value="18:00">18:00 Pm</option>

                  <option value="19:00">19:00 Pm</option>

                  <option value="20:00">20:00 Pm</option>

                  <option value="21:00">21:00 Pm</option>

                  <option value="22:00">22:00 Pm</option>

                  <option value="23:00">23:00 Pm</option>

                  <option value="24:00">24:00 Pm</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex  justify-between gap-4">
            <div className="flex flex-col text-left gap-2">
              <p className="font-dmSans font-bold text-base">Name</p>
              <input
                type="text"
                className="w-[350px] h-[60px] px-4 border border-pileGrey rounded-full"
              />
            </div>
            <div className="flex flex-col text-left gap-2">
              <p className="font-dmSans font-bold text-base">Phone</p>
              <input
                type="telephone"
                className="w-[350px] h-[60px] px-4 border border-pileGrey rounded-full"
              />
            </div>
          </div>

          <div className="flex w-full justify-between gap-4">
            <div className="flex w-full flex-col text-left gap-2">
              <p className="font-dmSans font-bold text-base">Total Person</p>
              {/* <select className="w-full h-[60px] px-4 border border-pileGrey rounded-full" /> */}
              <div className="w-full h-[60px] px-4  border border-pileGrey rounded-full flex justify-center items-center">
              <select
                name=""
                id=""
                className="border-none w-full "
                onChange={handlePersons}
              >
                <option value="1">1 person</option>
                <option value="2">2 persons</option>
                <option value="3">3 persons</option>
                <option value="4">4 persons</option>
                <option value="5">5 persons</option>
                <option value="6">6 persons</option>
                <option value="7">7 persons</option>
                <option value="8">8 persons</option>
                <option value="9">9 persons</option>
                <option value="10">10 persons</option>
                <option value="11">11 persons</option>
                <option value="12">12 persons</option>
                <option value="13">13 persons</option>
                <option value="14">14 persons</option>
                <option value="15">15 persons</option>
              </select>
              </div>
            </div>
          </div>

          <button className="bg-primary text-white rounded-full my-8 p-4 ">
            Book A Table
          </button>
        </form>
      </div>

      <div className="w-full">
        <MapContainer
          center={position}
          className=""
          zoom={13}
          style={{ zIndex: -1000, height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>A sample popup!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Heading;
