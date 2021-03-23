import PortfolioPiece from "../components/PortfolioPiece";
import PortfolioData from "./PortfolioData.json";

function Portfolio() {
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="card mt-5 bottommargin">
          <div className="card-body">
            <h1>
              <strong>Portfolio</strong>
            </h1>
            {PortfolioData.map((piece) => (
              <PortfolioPiece
                key={piece.id}
                name={piece.name}
                image={piece.image}
                alt={piece.alt}
                imgTxt={piece.imgTxt}
                link={piece.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;