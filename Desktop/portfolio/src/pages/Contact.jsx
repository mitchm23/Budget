import Resume from "../images/Resume.pdf"

function Contact() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="card mt-5">
            <div className="card-body">
              <h1>
                <strong>Contact Information</strong>
              </h1>
              <hr />
              <div className="row">
                <div className="col-lg-10 text-left">
                  <p>
                    <strong>Email: </strong>
                    <a className="link" href="mailto:amandalemoine2021@gmail.com">
                      mitchell.moye@yahoo.com
                    </a>
                  </p>
                  <p>
                    <strong>Cell:</strong> (612)772-8916
                  </p>
                  <p>
                    <strong>Linked In: </strong>
                    <a
                      className="link"
                      href="https://www.linkedin.com/in/Mitchm23/"
                    >
                      Mitchell Moye
                    </a>
                  </p>
                  <p>
                    <strong>GitHub: </strong>
                    <a className="link" href="https://github.com/Mitchm23">
                      Mitchm23
                    </a>
                  </p>
                  <p>
                    <strong>Resume: </strong>
                    <a
                      className="link"
                      href={Resume}
                      download="Resume"
                      >
                        Download
                      
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;