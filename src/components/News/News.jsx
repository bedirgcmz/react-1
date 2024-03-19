import styles from "./News.module.css";
import { articles } from "../../assets/data/articles";

const News = ({ setTargetCategory }) => {
  return (
    <div className={styles.latestNewsContainer}>
      <h1>Latest News</h1>
      <ul>
        {articles?.map((article) => (
          <li key={article.id} onClick={() => setTargetCategory(article.category)}>
            {article.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
