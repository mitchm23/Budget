function Home() {
  let imgSrc = require("../images/image0.jpeg")
    return (
        <div className="row">
          <div className="col-md-8">
            <div className="card mt-5 bottommargin">
              <div className="card-body">
                <h1>
                  <strong>Mitchell Moye</strong>
                </h1>
                <hr />
                <p>
                Hello! My name is Mitchell Moye, and I am a full stack web developer from San Diego, California.
                </p>
                <p>
               I adore puzzles, and my favorite part of programming is figuring out the solution to the problem!
                </p>
                <div>
                <img
                src={imgSrc.default}
                alt='Mitchell Moye'
                className="Me"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default Home;