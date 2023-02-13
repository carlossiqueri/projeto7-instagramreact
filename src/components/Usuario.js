import { useState } from "react";
export default function Usuario (){
    let anonymousUserPic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDexwez6fwjsz-N3lcR3P5xcQH5enbLr9Og&usqp=CAU"

    const [name, setName] = useState ("");
    const [pic, setPic] = useState (anonymousUserPic);

    let userText = !name ? "Realize o login!" : `${name}`;

    const changePic = () => {
      const userPic = prompt ("Insira o link da sua foto de usuário.");
      !userPic ? setPic (anonymousUserPic): setPic(userPic);
    }
    
    const changeUserName = ()  => {
      const validName = prompt("Qual o seu nome de usuário?");
      setName(validName);
    }

    return(
    <div class="usuario">
        <img onClick={changePic} src={pic} alt="imagem de perfil" />
        <div class="texto">
          <span>
            <strong>{userText}</strong>
            <ion-icon onClick={changeUserName} name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    )


}