import { getImageURL } from "../../utils/functions";
import styles from "./Home.module.css";
import { articles } from "../../assets/data/articles";
import { useState } from "react";
import News from "../News/News";

const HomePage = ({ targetCategory, setTargetCategory, pageTitle }) => {
  const [readMoreText, setReadMoreText] = useState("Read More");

  const getReadMore = (pId) => {
    const pTag = document.getElementById(`article${pId}`);
    const targetArticle = articles.find((e) => e.id == pId);

    if (pTag.innerText == targetArticle.summary) {
      pTag.innerText = targetArticle.largeText;
      setReadMoreText("Read Less");
    } else {
      pTag.innerText = targetArticle.summary;
      setReadMoreText("Read More");
    }
  };

  return (
    <>
      <h1 className={styles.homeMainHeader}>{pageTitle}</h1>
      <div className={styles.homeContainer}>
        <div className={styles.newsContainer}>
          {articles
            ?.filter((article) => article.category == targetCategory)
            .map((art) => (
              <div className={styles.newsCard}>
                <img className={styles.homeImg} src={getImageURL(art.image)} alt={art.title} />
                <h1>{art.title}</h1>
                <p id={`article${art.id}`}>{art.summary}</p>
                <button className={styles.readMoreButton} onClick={() => getReadMore(art.id)}>
                  {readMoreText}
                </button>
              </div>
            ))}
        </div>
        <News setTargetCategory={setTargetCategory} />
      </div>
    </>
  );
};

export default HomePage;
