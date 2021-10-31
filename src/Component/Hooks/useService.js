import { useEffect, useState } from "react";

const useService = () => {
  const [service, setServices] = useState([]);
  console.log("serviceshfehg", service  );

  useEffect(() => {
    fetch("https://shrieking-labyrinth-61643.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return {
    service,
  };
};
export default useService;
