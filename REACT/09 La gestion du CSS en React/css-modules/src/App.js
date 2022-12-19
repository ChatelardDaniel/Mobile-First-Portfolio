import React from 'react';
import './App.css';
import RedSquare from './Components/RedSquare';
import BlueSquare from './Components/BlueSquare';

function App() {
  return (
    <div className="App">
      <RedSquare />
      <BlueSquare />
    </div>
  );
}

export default App;
/*
    Par défaut, même si les styles sont importés par différents composants sous la forme de fichiers CSS séparés, ils sont tout de même fusionnés dans un seul fichier au moment du build. Cette fusion peut causer des conflits de styles sur des classes qui porteraient le même nom.

    Plusieurs solutions de CSS in JS, comme CSS Modules, existent pour créer un cloisonnement entre les styles de différents composants, ce qui permet de réutiliser les noms de classes sans risquer un conflit.

    Côté CSS, il sera simplement nécessaire de renommer les fichiers en [nom].module.css. Côté composant, nous allons devoir effectuer quelques modifications :

    il faut utiliser le nom 'styles' et faire l'import de cette façon:
    import styles from './RedSquare.module.css';

    const RedSquare = () => {
      changer le nom dans la className par interpolation avec le nom styles.Square
      return <div className={styles.Square}/>;
    }

*/