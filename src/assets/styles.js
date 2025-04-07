// Styled Components
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Georgia", serif;
  line-height: 1.7;
`;

export const MainArticle = styled.article`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.section`
  margin: 60px 0;
  h2 {
    color: #2b2d42;
    font-size: 2rem;
    border-bottom: 3px solid #e63946;
    padding-bottom: 15px;
    margin-bottom: 40px;
  }
`;

export const MediaSection = styled.div`
  margin: 40px 0;
`;

export const VideoContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  iframe {
    border: none;
  }
`;

export const Caption = styled.p`
  font-size: 0.8rem;
  color: #6c757d;
  margin-top: 10px;
`;

export const PolicyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 40px 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImpactText = styled.div`
  h3 {
    color: #e63946;
    margin-bottom: 20px;
  }
  ul {
    margin: 20px 0;
    padding-left: 30px;
  }
`;

export const IndustrySection = styled.div`
  margin: 50px 0;
  h3 {
    color: #1d3557;
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
`;

export const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin: 30px 0;
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  }
  ${(props) => props.reversed && "direction: rtl;"}
`;

export const ExpertQuote = styled.blockquote`
  background: #f8f9fa;
  padding: 25px;
  border-left: 4px solid #2b2d42;
  margin: 30px 0;
  cite {
    display: block;
    margin-top: 15px;
    color: #6c757d;
    font-size: 0.9rem;
  }
`;

export const ScenarioContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 40px 0;
`;

export const ScenarioCard = styled.div`
  padding: 25px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  h3 {
    color: #e63946;
    margin-bottom: 15px;
  }
  ul {
    margin: 20px 0;
    padding-left: 25px;
  }
`;

export const ChartContainer = styled.div`
  margin: 30px 0;
`;

export const Source = styled.div`
  font-size: 0.8rem;
  color: #6c757d;
  text-align: right;
  margin-top: 10px;
`;

export const ConclusionText = styled.div`
  background: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
  ul {
    margin: 20px 0;
    padding-left: 30px;
  }
`;

export const SourceLink = styled.a`
  color: #d90429;
  text-decoration: none;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 15px;
`;

export const KeyPoints = styled.div`
  margin-top: 10px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h4 {
    color: #2b2d42;
    border-bottom: 2px solid #e63946;
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding-left: 0;

    > li {
      margin-bottom: 20px;
      padding: 20px;
      background: white;
      border-radius: 6px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

      strong {
        color: #1d3557;
        display: block;
        margin-bottom: 12px;
        font-size: 1.1rem;
      }

      ul {
        padding-left: 20px;
        margin: 15px 0;
        list-style: circle;

        li {
          margin-bottom: 8px;
          padding: 0;
          background: none;
          box-shadow: none;
        }
      }
    }
  }
`;

export const IntroText = styled.div`
  font-size: 1.1rem;
  color: #495057;
  margin: 30px 0;
  ul {
    margin: 20px 0;
    padding-left: 30px;
  }
`;

export const AnalysisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

export const AnalysisItem = styled.div`
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
`;

export const Byline = styled.div`
  font-size: 0.9rem;
  color: #6c757d;
  font-family: "Georgia", serif;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;

  &::before {
    content: "— ";
    margin-right: 0.25rem;
  }
`;

export const SourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 30px 0;
`;

export const SourceColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SourceItem = styled.li`
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(5px);
  }
`;

export const SourceNumber = styled.div`
  width: 30px;
  height: 30px;
  background: #2b2d42;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const SourceTitle = styled.div`
  font-weight: 600;
  color: #2b2d42;
  margin-bottom: 5px;
`;
