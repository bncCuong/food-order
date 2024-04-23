/** @format */

import landingImage from '../../../public/assets/landing.png';
import appDownloadImage from '../../../public/assets/appDownload.png';
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white py-6 rounded-lg shadow-md flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into takeaway today
        </h1>
        <p className="text-foreground font-light">
          Food is just a click away. Order your favourite meal from your
          favourite restaurant.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <p className="font-bold text-3xl tracking-tighter">
            Order takeway even faster!
          </p>
          <p className="font-normal tracking-tighter">
            Download the Food-order app for faster ordering and persionalised
            recommendations.
          </p>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
