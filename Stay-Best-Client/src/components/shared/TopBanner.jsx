/* eslint-disable react/prop-types */


const TopBanner = ({bgImage, title}) => {
    return (
        <div
        className="hero min-h-[50vh] "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold ">
              <i>{title}</i>
            </h1>
          </div>
        </div>
      </div>
    );
};

export default TopBanner;