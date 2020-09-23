import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp from './components/Comp'

const employees = [
  {
    id: 1,
    firstName: "Cool",
    lastName: "Dude",
    email: "cooldude1@coolguy.com",
    favoriteFood: "Pizza",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Smith",
    email: "JohnSmith1@coolguy.com",
    favoriteFood: "Burger",
  },
  {
    id: 3,
    firstName: "Left",
    lastName: "Right",
    email: "LeftRight1@coolguy.com",
    favoriteFood: "Pizza",
  },
  {
    id: 4,
    firstName: "Top",
    lastName: "Bottom",
    email: "TopBottom1@coolguy.com",
    favoriteFood: "Sour Patch Kids",
  },
  {
    id: 5,
    firstName: "Adam",
    lastName: "Allen",
    email: "cooldude1@coolguy.com",
    favoriteFood: "Sour Patch Kids",
  },
  {
    id: 6,
    firstName: "Ben",
    lastName: "D",
    email: "BenD1@coolguy.com",
    favoriteFood: "Burger",
  },
  {
    id: 7,
    firstName: "Michael",
    lastName: "Zaslavsky",
    email: "MichaelZaslavsky@coolguy.com",
    favoriteFood: "Burger",
  },
  {
    id: 8,
    firstName: "Coal",
    lastName: "DR",
    email: "BenD1@coolguy.com",
    favoriteFood: "Burger",
  },
  {
    id: 9,
    firstName: "R",
    lastName: "Coal",
    email: "BenD1@coolguy.com",
    favoriteFood: "Burger",
  },
  {
    id: 0,
    firstName: "Some",
    lastName: "Dude",
    email: "BenD1@coolguy.com",
    favoriteFood: "Burger",
  },
];

function App() {

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");

  return (
    <>
      <h1 className="title text-center">Cool Guy Employee Directory</h1>
      <form>
        <div className="search form-group form-inline d-flex justify-content-center">
          <label htmlFor="search">Search Name:</label>
          <input id="search" onChange={ event => setSearch(event.target.value) } placeholder="Michael Zaslavsky " />
        </div>
        <div className="sort form-group form-inline d-flex justify-content-center">
          <label>Sort Name:</label>
          <label className="radio-inline"><input type="radio" name="sort" value="asc" checked={ sort === "asc" } onChange={ event => setSort(event.target.value) } />Ascending</label>
          <label className="radio-inline"><input type="radio" name="sort" value="desc" checked={ sort === "desc" } onChange={ event => setSort(event.target.value) } />Descending</label>
        </div>
      </form>
      <Comp search={search} sort={sort} employees={employees}/>
    </>
  );
}


export default App;
