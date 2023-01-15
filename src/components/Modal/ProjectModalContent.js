import './Modal.style.css';

const ProjectModalContent = ({projectInfo}) => {
  const {title, details, technologies, preview, source, client, image} = projectInfo;
  return (
    <div className='project-modal-content'>
      <h2 className='project-modal-content__title'>{title}</h2>
      <div className='project-modal-content__info'>
        <h3 className='project-modal-content__item' style={{marginBottom: '50px'}}>
          Details: <span className='project-modal-content__item__value'>{details}</span>
        </h3>
        <div className='row'>
          <h3 className='project-modal-content__item col-6'>
            Technologies:{' '}
            <span className='project-modal-content__item__value'>
              {technologies
                .toString()
                .split(',')
                .map((item) => ' '.concat(item))
                .join()}
            </span>
          </h3>
          <h3 className='project-modal-content__item col-6'>
            Client: <span className='project-modal-content__item__value'>{client}</span>
          </h3>
        </div>
        <div className='row'>
          <h3 className='project-modal-content__item col-6'>
            Preview:{' '}
            <a href={preview.link} target='_blank' rel='noopener noreferrer'>
              <span className='project-modal-content__item__value'>{preview.title}</span>
            </a>
          </h3>
          <h3 className='project-modal-content__item col-6'>
            Source:{' '}
            <a href={source.link} target='_blank' rel='noopener noreferrer'>
              <span className='project-modal-content__item__value'>{source.title}</span>
            </a>
          </h3>
        </div>
        <div className='project-modal-content__image'>
          <img src={image} alt='' />
        </div>
      </div>
    </div>
  );
};

export default ProjectModalContent;
