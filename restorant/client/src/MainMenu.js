import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import { Link } from "react-router-dom";

function MainMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.112:3002/categories')
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const createMainMenu = () => {
    const mainCategories = categories.filter((category) => category.mainCategory === 0);
    return mainCategories.map((category) => (
      <NavDropdown  title={category.categoryName} id={`main-dropdown-${category.id}`} key={category.id}>
        {createSubMenu(category.id)}
      </NavDropdown>
    ));
  };

  const createSubMenu = (mainCategoryId) => {
    const subCategories = categories.filter((category) => category.mainCategory === mainCategoryId);
    return subCategories.map((category) => (
      <NavDropdown.Item as={Link} to={`/foods/${category.id}`} key={category.id}>{category.categoryName}</NavDropdown.Item>
    ));
  };

  return (
    <Nav>
      {createMainMenu()}
    </Nav>
  );
}

export default MainMenu;
