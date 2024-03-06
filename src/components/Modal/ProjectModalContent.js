import './Modal.style.css';

const ProjectModalContent = ({ projectInfo }) => {
  const {
    title, description, technologies, preview, source, client, shots,
  } = projectInfo;
  return (
    <div className="project-modal-content">
      <h2 className="project-modal-content__title">{title}</h2>
      <div className="project-modal-content__info">
        <h3 className="project-modal-content__item" style={{ marginBottom: '50px' }}>
          Details:
          {' '}
          <span className="project-modal-content__item__value">{description}</span>
        </h3>
        <div className="row" style={{ marginBottom: '50px' }}>
          <h3 className="project-modal-content__item col-6">
            Technologies:
            {' '}
            <div className="project-modal-content__item__value">
              {technologies
                .toString()
                .split(',')
                .map((item) => <span className="pill">{item}</span>)}
            </div>
          </h3>
          <h3 className="project-modal-content__item col-6">
            Client:
            {' '}
            <span className="project-modal-content__item__value">{client}</span>
          </h3>
        </div>
        <div className="row">
          <h3 className="project-modal-content__item col-6">
            Preview:
            {' '}
            <a href={preview} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <span className="project-modal-content__item__value">Link</span>
              <img
                width={20}
                src="./Assets/arrow.svg"
                alt=""
                style={{ color: 'white', marginLeft: '9px' }}
              />
            </a>
          </h3>
          <h3 className="project-modal-content__item col-6">
            Source:
            {' '}
            <a href={source} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} >
              <span className="project-modal-content__item__value">Link</span>
              <img
                width={20}
                src="./Assets/arrow.svg"
                alt=""
                style={{ color: 'white', marginLeft: '9px' }}
              />
            </a>
          </h3>
        </div>
        <div className="project-modal-content__image">
          <div className="row1 modal-image-row" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '30px',
            marginBottom: '30px',
          }}>
            {/* <img className="modal-image landscape1" src={shots.landscape[0].src} alt="" /> */}
            {/* <img className="modal-image portrait1" src={shots.portrait[0].src} alt="" /> */}
            {shots.landscape.map((shot) => (
              <img
                className="modal-image"
                src={shot.src}
                alt=""
              />
            ))}
          </div>
          <div className="row2 modal-image-row" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '20px',
          }}>
            {/* <img className="modal-image portrait2" src={shots.portrait[1].src} alt="" />
            <img className="modal-image landscape2" src={shots.landscape[1].src} alt="" /> */}
            {
              shots.portrait.map((shot) => (
                <img
                  style={{
                    width: '200px',
                    height: 'auto',
                  }}
                  src={shot.src}
                  alt=""
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModalContent;
