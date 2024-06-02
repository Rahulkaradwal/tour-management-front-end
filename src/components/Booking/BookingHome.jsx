import { useLoaderData, useNavigation } from 'react-router-dom';
import { getBookedTours } from '../../utils/api';
import Loader from '../ui/Loader';
import Card from '../ui/Card';

function BookingHome() {
  const data = useLoaderData();
  console.log(data);
  const navigate = useNavigation();

  return (
    <div className="overview">
      {navigate.state === 'loading' ? (
        <Loader />
      ) : (
        <div className="card-container">
          {data.map((tour) => (
            <Card key={tour.id} {...tour} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BookingHome;

export async function loader() {
  const bookedTours = getBookedTours();
  return bookedTours;
}
