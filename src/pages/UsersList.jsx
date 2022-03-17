import axios from "axios";

import styles from '../components/Sort/Sort.module.scss';

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Card } from "../components/Card/Card"

export const UsersList = () => {
  const navigate = useNavigate();
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users/');

        setSorted(usersResponse.data);

      } catch (error) {
        alert('Ошибка при загрузке страницы.');
      }
    }

    fetchData();
  }, [])

  const sortByCity = () => {
    const temp = JSON.parse(JSON.stringify(sorted));
    temp.sort((a, b) => {
      const cityA = a.address.city;
      const cityB = b.address.city;
      if (cityA < cityB)
        return -1
      if (cityA > cityB)
        return 1
      return 0

    });
    setSorted(temp);
  }

  const sortByCompany = () => {
    const temp = JSON.parse(JSON.stringify(sorted));
    temp.sort((a, b) => {
      const companyA = a.company.name;
      const companyB = b.company.name;
      if (companyA < companyB)
        return -1
      if (companyA > companyB)
        return 1
      return 0

    });
    setSorted(temp);
  }

  return (
    <div className="container">
      <div className={styles.sort}>
        <p>Сортировка</p>
        <button onClick={sortByCity}>По городу</button>
        <button onClick={sortByCompany}>По компании</button>
      </div>
      <div className="usersList">
        <h3>Список пользователей</h3>
        {sorted.map((user, index) => (
          <Card
            key={index}
            {...user}
            onClick={(event) => {
              event.preventDefault();
              navigate(`/id/${user.id}`)}}
          />
        ))}
        <p>Найдено {sorted.length} пользователей</p>
      </div>
    </div>

  ) 
}