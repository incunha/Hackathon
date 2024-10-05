import "./RippleLoader.scss";

function RippleLoader({size = 100}: {size?: number}) {
  return (
    <div className="ripple-loader" style={{width: `${size}px`, height: `${size}px`}}>
      <div className="ripple-center"></div>
      <div className="ripple"></div>
      <div className="ripple"></div>
      <div className="ripple"></div>
      <div className="ripple"></div>
    </div>
  );
}

export default RippleLoader;