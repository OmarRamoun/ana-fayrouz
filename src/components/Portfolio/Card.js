const Card = ({className, src, onClick}) => {
  return (
    <div className={className}>
      <img src={src} className='img img-responsive' alt='' />
      <div
        className='icon'
        onClick={onClick}
        style={{
          cursor: 'pointer',
          height: '100%',
          top: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button className='view-icon' style={{background: 'none', border: 'none'}}>
          <i className='fa fa-plus' aria-hidden='true'></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
