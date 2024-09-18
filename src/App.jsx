import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url: '', name: '', role: ''}
// publisheadAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/126275703?v=4",
      name: "Abraão Borges",
      role: "CTO Borges</>Tech",
    },
    content: [
      { type: "paragraph", content: "Fala galera 🙌" },

      {
        type: "paragraph",
        content:
          "Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publisheadAt: new Date("2024-09-02 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Maik brito",
      role: "Educador Borges</>Tech",
    },
    content: [
      { type: "paragraph", content: "Fala galera 🙌" },

      {
        type: "paragraph",
        content:
          "Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publisheadAt: new Date("2024-09-10 15:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publisheadAt={post.publisheadAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
