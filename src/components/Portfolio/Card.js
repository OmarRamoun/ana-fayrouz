import './card.css';

const Card = ({
  className, src, title, onClick,
}) => (
  <div className={className}>
    <div className="img img-responsive" style={{ overflow: 'hidden' }}>
      <img
        height={262}
        src={src}
        className="img-cover img img-responsive"
        alt=""
        style={{
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
        }}
      />
    </div>
    <div
      className="icon"
      onClick={onClick}
      style={{
        cursor: 'pointer',
        height: '93%',
        width: '87%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button className="view-icon" style={{ background: 'none', border: 'none' }}>
        <h3 className="card-cover-title">
          {title
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}
        </h3>
      </button>
    </div>
  </div>
);

export default Card;
