import TourHeader from './TourHeader';
import TourDescription from './TourDescription';
import TourPictures from './TourPictures';
import TourReviews from './TourReviews';
import TourCta from './TourCta';
import { getData } from './../../utils/api';
import { useLoaderData } from 'react-router-dom';

function TourDetails() {
  const data = useLoaderData();
  const tour = data.doc;
  return (
    <>
      <TourHeader tour={tour} />
      <TourDescription tour={tour} />
      <TourPictures images={tour.images} />
      <TourReviews reviews={tour.reviews} />
      <TourCta tour={tour} />
    </>
  );
}

export function loader({ params }) {
  const tour = getData(params.tourId, 'tours');

  return tour;
}

export default TourDetails;
