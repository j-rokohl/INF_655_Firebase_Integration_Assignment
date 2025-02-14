function Greeting() {
    const greet = [
        {
            lan: "en",
            welcome: "Hello and Welcome to React!",
            para: "React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook. React is a tool for building UI components. Instead of manipulating the browsers DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.",
            click: "Click the button below to see today's daily React Challenge!",
            btn: "Challenge for "
        },
        {
            lan: "es",
            welcome: "¡Hola y bienvenido a React!",
            para: "React, a veces denominado marco de JavaScript frontend, es una biblioteca de JavaScript creada por Facebook. React es una herramienta para crear componentes de interfaz de usuario. En lugar de manipular el DOM del navegador directamente, React crea un DOM virtual en la memoria, donde realiza toda la manipulación necesaria, antes de realizar los cambios en el DOM del navegador.",
            click: "¡Haga clic en el botón a continuación para ver el desafío React diario de hoy!",
            btn: "Desafío para "
        },
        {
            lan: "fr",
            welcome: "Bonjour et bienvenue sur React!",
            para: "React, parfois appelé framework JavaScript frontal, est une bibliothèque JavaScript créée par Facebook. React est un outil pour créer des composants d'interface utilisateur. Au lieu de manipuler directement le DOM du navigateur, React crée un DOM virtuel en mémoire, où il effectue toutes les manipulations nécessaires, avant d'apporter les modifications dans le DOM du navigateur.",
            click: "Cliquez sur le bouton ci-dessous pour voir le défi React quotidien d'aujourd'hui!",
            btn: "Défi pour "
        }
    ];


    const ran = Math.floor(Math.random() * 3);

    const chooseLang = () => {
        const link = "https://reactchallenges.live/challenge/"+ ran;
        const greetingArray = [greet[ran].welcome, greet[ran].para, greet[ran].click, link, greet[ran].btn];
        return greetingArray;
    };

    return(
        <div>
            <h1 className="h1-sm">{chooseLang()[0]}</h1>
            <p className="width">{chooseLang()[1]}</p>
            <p className="width"><strong>{chooseLang()[2]}</strong></p>
            <p><a className="btn" href={chooseLang()[3]}>{chooseLang()[4]} {new Date().toLocaleDateString()}</a></p>
        </div>
    )
};

export default Greeting;