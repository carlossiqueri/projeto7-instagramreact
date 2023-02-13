import Post from "./Post";
export default function Posts (){
  const postsArray = [
    {
      postName: "meowed",
      postOwnerPic: "assets/img/meowed.svg",
      postPic: "assets/img/gato-telefone.svg",
      likeOwner: "respondeai",
      likePic: "assets/img/respondeai.svg",
      likes: 101
    },
    {
      postName: "barked",
      postOwnerPic: "assets/img/barked.svg",
      postPic: "assets/img/dog.svg",
      likeOwner: "adorable_animals",
      likePic: "assets/img/adorable_animals.svg",
      likes: 201
    },
    {
      postName: "gzzdays",
      postOwnerPic: "assets/img/foto-story.jpg",
      postPic: "assets/img/feed1.jpeg",
      likeOwner: "smallcutecats",
      likePic: "assets/img/smallcutecats.svg",
      likes: 401
    }
  ]

  
    return(
        <div class="posts">

          {postsArray.map((p) => {
            return (
              <Post 
              key={postsArray.postName}
              postOwnerPic={p.postOwnerPic} 
              postName={p.postName} 
              postPic={p.postPic}
              likePic={p.likePic}
              likeOwner={p.likeOwner}
              likes={p.likes} />
            )
          })}
          
        </div>
    )
}