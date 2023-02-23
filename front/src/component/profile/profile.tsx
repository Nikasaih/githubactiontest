import React from 'react';
import './profile.css';

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-header__background"></div>
        <div className="profile-header__avatar"></div>
        <h1 className="profile-header__username">John Doe</h1>
      </div>
      <div className="profile-body">
        <div className="profile-body__section">
          <h2 className="profile-body__section-title">Informations personnelles</h2>
          <div className="profile-body__info">
            <div className="profile-body__info-item">
              <span className="profile-body__info-label">Nom complet:</span>
              <span className="profile-body__info-value">John Doe</span>
            </div>
            <div className="profile-body__info-item">
              <span className="profile-body__info-label">Adresse e-mail:</span>
              <span className="profile-body__info-value">johndoe@example.com</span>
            </div>
            <div className="profile-body__info-item">
              <span className="profile-body__info-label">Téléphone:</span>
              <span className="profile-body__info-value">+33XXXXXXXXX</span>
            </div>
            <div className="profile-body__info-item">
              <span className="profile-body__info-label">Langue:</span>
              <span className="profile-body__info-value">Français</span>
            </div>
          </div>
        </div>
        <div className="profile-body__section">
          <h2 className="profile-body__section-title">Paramètres de compte</h2>
          <div className="profile-body__info">
            <div className="profile-body__info-item">
              <span className="profile-body__info-label">Mot de passe:</span>
              <button className="profile-body__info-action">Modifier</button>
            </div>
            <div className="profile-body__info-item">
              <span className="profile-body__info-label">Informations:</span>
              <button className="profile-body__info-action">Modifier</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
