import { useState } from "react";
import { useParams } from "react-router-dom";

import { Sort } from "../components/Sort/Sort";

export const UsersProfile = ({ users }) => {
  const id = useParams().id;

  let user = users[id - 1];

  const formReadonly = (
    <>
      <form id="form">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" readOnly value={user.name} />
        <label htmlFor="username">Username</label>
        <input id="username" type="text" readOnly value={user.username} />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" readOnly value={user.email} />
        <label htmlFor="street">Street</label>
        <input id="street" type="text" readOnly value={user.address.street} />
        <label htmlFor="city">City</label>
        <input id="city" type="text" readOnly value={user.address.city} />
        <label htmlFor="zipcode">Zipcode</label>
        <input id="zipcode" type="text" readOnly value={user.address.zipcode} />
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="text" readOnly value={user.phone} />
        <label htmlFor="website">Website</label>
        <input id="website" type="text" readOnly value={user.website} />
        <label htmlFor="comment">Comment</label>
        <textarea readOnly />
      </form>
      <input id="submitDisabled" type="submit" form="form" disabled value="Отправить"/>
    </>
  );

  const [nameInput, setNameInput] = useState(user.name);
  const [usernameInput, setUsernameInput] = useState(user.username);
  const [emailInput, setEmailInput] = useState(user.email);
  const [streetInput, setStreetInput] = useState(user.address.street);
  const [cityInput, setCityInput] = useState(user.address.city);
  const [zipcodeInput, setZipcodeInput] = useState(user.address.zipcode);
  const [phoneInput, setPhoneInput] = useState(user.phone);
  const [websiteInput, setWebsiteInput] = useState(user.website);
  const [commentInput, setCommentInput] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleEdit = () => {
    setIsClicked(!isClicked);
  }

  const onChangeName = (event) => {
    setNameInput(event.target.value)
  }

  const onChangeUsername = (event) => {
    setUsernameInput(event.target.value)
  }

  const onChangeEmail = (event) => {
    setEmailInput(event.target.value)
  }

  const onChangeStreet = (event) => {
    setStreetInput(event.target.value)
  }

  const onChangeCity = (event) => {
    setCityInput(event.target.value)
  }

  const onChangeZipcode = (event) => {
    setZipcodeInput(event.target.value)
  }

  const onChangePhone = (event) => {
    setPhoneInput(event.target.value)
  }

  const onChangeWebsite = (event) => {
    setWebsiteInput(event.target.value)
  }

  const onChangeComment = (event) => {
    setCommentInput(event.target.value)
  }

  const handleSubmit = event => {    
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
  
    console.log({value}.value);
    event.preventDefault();
  }

  const formEdit = (
    <>
      <form id="my-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input required value={nameInput} onChange={onChangeName} name="name" id="name" type="text" />
        <label htmlFor="username">Username</label>
        <input required value={usernameInput} onChange={onChangeUsername} name="username" id="username" type="text" />
        <label htmlFor="email">Email</label>
        <input required value={emailInput} onChange={onChangeEmail} name="email" id="email" type="text" />
        <label htmlFor="street">Street</label>
        <input required value={streetInput} onChange={onChangeStreet} name="street" id="street" type="text"  />
        <label htmlFor="city">City</label>
        <input required value={cityInput} onChange={onChangeCity} name="city" id="city" type="text"  />
        <label htmlFor="zipcode">Zipcode</label>
        <input required value={zipcodeInput} onChange={onChangeZipcode} name="zipcode" id="zipcode" type="text"  />
        <label htmlFor="phone">Phone</label>
        <input required value={phoneInput} onChange={onChangePhone} name="phone" id="phone" type="text" />
        <label htmlFor="website">Website</label>
        <input required value={websiteInput} onChange={onChangeWebsite} name="website" id="website" type="text" />
        <label htmlFor="comment">Comment</label>
        <textarea name="comment" id="comment" value={commentInput} onChange={onChangeComment}/>
      </form>
      <input id="submit" type="submit" form="my-form" value="Отправить" />
    </>
  );

  return (
    <div className="container">
      <Sort />
     <div className="userInfo">
        <div className="hat">
          <h3>Профиль пользователя</h3>
          <button onClick={handleEdit}>
            Редактировать
          </button>
        </div>
          {isClicked ? formEdit : formReadonly}
     </div>
    </div>
  )
}