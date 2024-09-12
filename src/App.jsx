import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Abraão Borges"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Voluptates nobis ullam repellendus minima fugiat vero iure qui ab velit, 
        fugit amet vel excepturi unde a alias impedit exercitationem similique nulla?"
          />

          <Post
            author="Ana Clara"
            content="Um Post muito legal acompanhe minhas redes sociais"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
