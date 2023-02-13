export default function Sugestoes() {
  const sugestionsArray = [
    {
      sugestionName: "bad.vibes.memes",
      sugestionPic: "assets/img/bad.vibes.memes.svg",
      sugestionStatus: "Segue você",
    },
    {
      sugestionName: "chibirdart",
      sugestionPic: "assets/img/chibirdart.svg",
      sugestionStatus: "Segue você",
    },
    {
      sugestionName: "razoesparaacreditar",
      sugestionPic: "assets/img/razoesparaacreditar.svg",
      sugestionStatus: "Novo no Instagram",
    },
    {
      sugestionName: "adorable_animals",
      sugestionPic: "assets/img/adorable_animals.svg",
      sugestionStatus: "Segue você",
    },
    {
      sugestionName: "smallcutecats",
      sugestionPic: "assets/img/smallcutecats.svg",
      sugestionStatus: "Segue você",
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestionsArray.map((s) => {
        return (
          <div class="sugestao">
            <div class="usuario">
              <img src={s.sugestionPic} alt={s.sugestionName} />
              <div class="texto">
                <div class="nome">{s.sugestionName}</div>
                <div class="razao">{s.sugestionStatus}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
