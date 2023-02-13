export default function Posts (){
  const postsArray = [
    {
      postName: "meowed",
      postOwnerPic: "assets/img/meowed.svg",
      postPic: "assets/img/gato-telefone.svg",
      likeOwner: "respondeai",
      likePic: "assets/img/respondeai.svg"
    },
    {
      postName: "barked",
      postOwnerPic: "assets/img/barked.svg",
      postPic: "assets/img/dog.svg",
      likeOwner: "adorable_animals",
      likePic: "assets/img/adorable_animals.svg"
    },
    {
      postName: "gzzdays",
      postOwnerPic: "assets/img/foto-story.jpg",
      postPic: "assets/img/feed1.jpeg",
      likeOwner: "smallcutecats",
      likePic: "assets/img/smallcutecats.svg"
    }
  ]

    return(
        <div class="posts">

          {postsArray.map((p) => {
          <Post  
          postOwnerPic={p.postOwnerPic} 
          postName={p.postName} 
          postPic={p.postPic}
          likePic={p.likePic}
          likeOwner={p.likeOwner}
          />})}
          
        </div>
    )

    function Post (props){
      return (
        <div class="post">
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
        <img src={props.postPic} alt={props.postName}/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.likePic} alt="respondeai"/>
          <div class="texto">
            Curtido por <strong>{props.likeOwner}</strong> e <strong>outras 101.523 pessoas</strong>
          </div>
        </div>
      </div>
    </div>
      )
    }
}