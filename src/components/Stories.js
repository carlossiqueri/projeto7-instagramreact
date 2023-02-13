export default function Stories(){

  const storiesArray = [
    {
      storyName: "bad.vibes.memes",
      storyPic: "assets/img/bad.vibes.memes.svg"
    },
    {
      storyName: "chibirdart",
      storyPic: "assets/img/chibirdart.svg"
    },
    {
      storyName: "razoesparaacreditar",
      storyPic: "assets/img/razoesparaacreditar.svg"
    },
    {
      storyName: "adorable_animals",
      storyPic: "assets/img/adorable_animals.svg"
    },
    {
      storyName: "smallcutecats",
      storyPic: "assets/img/smallcutecats.svg"
    },
    {
      storyName: "respondeai",
      storyPic: "assets/img/respondeai.svg"
    },
    {
      storyName: "barked",
      storyPic: "assets/img/barked.svg"
    },
    {
      storyName: "filomoderna",
      storyPic: "assets/img/filomoderna.svg"
    },
  ];
    return (

        <div class="stories">
          {storiesArray.map((s) => {
            return (
              <div class="story">
            <div class="imagem">
              <img src={s.storyPic} alt={s.storyName} />
            </div>
            <div class="usuario">{s.storyName}</div>
          </div>
            )
          })}

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
    )
}