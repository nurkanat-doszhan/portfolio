import './Projects.scss'

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="inner">
          <div className="col">
            <div className='cards_list'>
              <div className="card">
                <div className="card_image">
                  <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt='' />
                </div>
                <div className="card_title title-white">
                  <p>Card Title</p>
                </div>
              </div>
              <div className="card">
                <div className="card_image">
                  <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="" />
                </div>
                <div className="card_title title-white">
                  <p>Card Title</p>
                </div>
              </div>
              <div className="card">
                <div className="card_image">
                  <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="" />
                </div>
                <div className="card_title title-white">
                  <p>Card Title</p>
                </div>
              </div>
              <div className="card">
                <div className="card_image">
                  <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="" />
                </div>
                <div className="card_title title-white">
                  <p>Card Title</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;