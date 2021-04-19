import React from 'react';
import './Icons.css';
import { Facebook } from 'react-feather';
import { Instagram } from 'react-feather';
import { Mail } from 'react-feather';

function FacebookLink() {
  window.open("https://www.facebook.com/auruproff");
}

function InstagramLink() {
  window.open("https://www.instagram.com/auruproff/");
}

function MailLink() {
  window.open("mailto:info@auruproff.ee");
}

function Icons() {
  return (
      <div className="Icons">
        <Facebook onClick={FacebookLink} size={40} width={70}/>
        <Instagram onClick={InstagramLink} size={40} width={70}/>
        <Mail onClick={MailLink} size={40} width={70}/>
      </div>
  );
}

export default Icons;