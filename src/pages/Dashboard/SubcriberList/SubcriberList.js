import React, { useEffect, useState } from "react";
import SubcriberListContainer from "./SubcriberListContainer";

const SubcriberList = () => {
  const [subcribes, setSubcribes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/subcribe`)
      .then((res) => res.json())
      .then((data) => setSubcribes(data));
  }, []);
  console.log(subcribes);
  return (
    <div className="">
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          All Contact Message
        </h3>
      </div>
      <hr className="mb-5" />
      <div className="bg-base-100 p-2 md:px-20 rounded-lg">
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full ">
            <thead>
              <tr className="bg-primary">
                <th>No.</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {subcribes.map((subcribe, index) => (
                <SubcriberListContainer
                  key={subcribe._id}
                  subcribe={subcribe}
                  index={index}
                ></SubcriberListContainer>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubcriberList;
