import { useState } from "react";
export default function Post (props){
  const [heart, setHeart] = useState("heart-outline");
  const [color, setColor] = useState("preto");
  const [totalLikes, setTotalLikes] = useState(props.likes)
  const [saved, setSaved] = useState("bookmark-outline");
  const like = () => {
    if (color === "preto"){
      setColor("vermelho m hydrated");
      setHeart("heart");
      setTotalLikes(totalLikes + 1);
    }else{
      setColor("preto");
      setHeart("heart-outline");
      setTotalLikes(totalLikes - 1);
    }
  }

  const clickImage = () => {
    if (color === "preto"){
      setColor("vermelho m hydrated");
      setHeart("heart");
      setTotalLikes(totalLikes + 1);
    }
  }
  
  const savePost = () => {
    if (saved === "bookmark-outline"){
      setSaved("bookmark");
    }else{
      setSaved("bookmark-outline");
    }
  }

    return (
        <div class="post" data-test="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.postOwnerPic} alt="meowed"/>
                {props.postName}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img onClick={clickImage} src={props.postPic} alt={props.postName} data-test="post-image"/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon class={color} onClick={like} name={heart} data-test="like-post"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon onClick={savePost} name={saved} data-test="save-post"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.likePic} alt="respondeai"/>
                <div class="texto">
                  Curtido por <strong>{props.likeOwner}</strong> e <strong data-test="likes-number">outras {totalLikes} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}