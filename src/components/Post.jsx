import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/126275703?v=4" />
          <div>
            <strong>Abraão Borges</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Setembro às 08:13h" dateTime="2022-05-11 08:13:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galera 🙌</p>
        <p>
          Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW
        </p>
        <p>
          👉 <a href=""> jane.design/doctorcare </a>
        </p>
        <p>
          <a href=""> #novoprojeto</a> <a href=""> #nlw </a>
          <a href=""> #rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea placeholder="Deixe um comentário..." />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
