import { useEffect, useState } from "react";
import {
  BodyTextBold,
  H2,
  H3,
  H4,
} from "../../components/helpers/GeneralComponents.styled";
import useMediaQuery from "../../components/helpers/MediaQuery";
import SectionLoader from "../../components/SectionLoader/SectionLoader";
import { InsightContainer, OuterContainer } from "./Insights.styled";
import { Capitalize } from "../../components/helpers/helpers";

const Insights = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width: 450px)");
  const isTablet = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setArticles(data.slice(0, 5));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false); // Stop loading in case of error
      }
    };

    fetchArticles();
  }, []);

  return (
    <OuterContainer>
      <H2
        style={{
          fontSize: isMobile ? "20px" : isTablet ? "32px" : "54px",
          lineHeight: isMobile ? "24px" : isTablet ? "36px" : "58px",
        }}
      >
        Latest Insights
      </H2>

      {loading ? (
        <SectionLoader color="#19124f" size={100} loading={loading} />
      ) : (
        <>
          {articles.map((article) => (
            <InsightContainer key={article.id}>
              <H3
                style={{
                  fontSize: isMobile ? "20px" : isTablet ? "24px" : "28px",
                  lineHeight: isMobile ? "24px" : isTablet ? "28px" : "32px",
                }}
              >
                {Capitalize(article.title)}
              </H3>
              <H4>{Capitalize(article.body)}</H4>
              <BodyTextBold className="!italic">
                Read more <span>&#8594;</span>
              </BodyTextBold>
            </InsightContainer>
          ))}
        </>
      )}
    </OuterContainer>
  );
};

export default Insights;
