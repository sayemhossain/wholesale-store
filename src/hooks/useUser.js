import { useEffect, useState } from "react";

const useUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://stark-shelf-45913.herokuapp.com/user`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);
  return [users];
};
export default useUser;
