import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState('Novo usuário');
  const [avatar, setAvatar] = useState('');
  const [userName, setUserName] = useState('novousuario');
  const [email, setEmail] = useState('novo_usuario@gmail.com');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSetName = ({ target }) => {
    const { value } = target;

    setName(value);
  };

  const handleSetAvatar = ({ target }) => {
    const { value } = target;

    setAvatar(value);
  };

  const handleSetUserName = ({ target }) => {
    const { value } = target;

    setUserName(value);
  };

  const handleSetEmail = ({ target }) => {
    const { value } = target;

    setEmail(value);
  };

  const handleAddUser = (event) => {
    event.preventDefault();

    const payload = JSON.stringify({
      name,
      avatar,
      userName,
      email
    });

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    }).then(() => setIsSubmitted(true));
  };

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {avatar ? (
                  <img src={avatar} alt="" />
                ) : (
                  <img
                    src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                    alt=""
                  />
                )}
              </div>

              {name && (
                <p className="user__name">
                  {name}
                  <span>@{userName}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              placeholder="Ex: Fulano da Silva"
              onChange={(event) => handleSetName(event)}
            />

            <label>Usuário</label>
            <input
              type="text"
              value={userName}
              placeholder="Ex: fulano_da_silva"
              onChange={(event) => handleSetUserName(event)}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Ex: fulano@provedor.com"
              onChange={(event) => handleSetEmail(event)}
            />

            <label>
              Url da Imagem de Perfil (use a url da imagem do Linkedin)
            </label>
            <input
              type="text"
              placeholder="http://..."
              onChange={(event) => handleSetAvatar(event)}
            />

            <button type="button" onClick={(event) => handleAddUser(event)}>
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {isSubmitted && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
