import axios from "axios";

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { UsersList } from "./pages/UsersList";
import { UsersProfile } from "./pages/UsersProfile";
import { Loader } from "./components/Loader/Loader";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async() => {
      try {
        setIsLoading(true);
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users/');

        setIsLoading(false);
        setUsers(usersResponse.data);

      } catch (error) {
        alert('Ошибка при загрузке страницы.');
      }
    }

    fetchData();
  }, [])

  return (
      isLoading
      ?<Loader />
      :<Routes>
        <Route path="/" exact element={<UsersList />} />
        <Route path="/id/:id" element={<UsersProfile users={users} />} />
      </Routes>

  );
}

export default App;
