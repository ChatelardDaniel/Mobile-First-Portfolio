//Nom du fichier : ContactForm.js
import React from 'react';
import FormInput from './FormInput';
import Button from './Button';



const ContactForm = () => {  
  

  return (
    <div>
      <form>
        <FormInput 
          inputId="title"
          label="Titre du message"
          placeholder="Saisissez ici le titre du message"
        />
        <FormInput 
          inputId="content"
          label="Contenu du message"
          placeholder="Saisissez ici le contenu du message"
        />
        <Button />
      </form>
    </div>
  );
}

export default ContactForm;