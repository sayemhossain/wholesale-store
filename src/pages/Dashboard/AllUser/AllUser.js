import React from "react";
import useUser from "../../../hooks/useUser";

const AllUser = () => {
  const [users, setUsers] = useUser([]);

  return (
    <div>
      <div class="drawer drawer-mobile bg-base-100 pb-10">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center  md:mt-20">
          <div>
            <div>
              <div className="mb-10">
                <h3 className="text-2xl text-primary font-bold text-center uppercase">
                  All User
                </h3>
                <hr className="w-28 mx-auto mt-2" />
              </div>
              <div className="md:w-[800px] md:pb-10 p-2">
                <div class="overflow-x-auto">
                  <table class="table table-compact w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Make Moderator</th>
                        <th>Ban User</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users?.map((user, index) => (
                        <AllUserBanglaRow
                          key={user._id}
                          user={user}
                          index={index}
                        ></AllUserBanglaRow>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
