import { useEffect, useState, useContext } from 'react';
import { db } from "./firebase.config"; 
import Context from '../Context';

function RideList() {
  const [rideRequests, setRideRequests] = useState([]);
  const { user, setIsLoading, setCurrentRide, setSelectedFrom, setSelectedTo } = useContext(Context);

  useEffect(() => {
    const unsubscribe = db.collection('rides')
      .where('status', '==', 0)
      .onSnapshot(snapshot => {
        const rides = snapshot.docs.map(doc => ({
          ...doc.data(),
          rideUuid: doc.id
        }));
        setRideRequests(rides);
      });
      
    return () => {
      unsubscribe();
    };
  }, []);

  const acceptRide = (request) => {
    request.driver = user;
    request.status = 1;
    setIsLoading(true);
    db.collection('rides')
      .doc(request.rideUuid)
      .set(request)
      .then(() => {
        setIsLoading(false);
        localStorage.setItem('currentRide', JSON.stringify(request));
        setCurrentRide(request);
        setSelectedFrom(request.pickup);
        setSelectedTo(request.destination);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error accepting ride: ", error);
      });
  };

  const renderRideList = () => {
    if (rideRequests.length !== 0) {
      return rideRequests.map(request => (
        <div className="ride-list__result-item" key={request.rideUuid}>
          <div className="ride-list__result-icon">
            {/* Icon SVG */}
          </div>
          <div>
            <p className="ride-list__result-label"><span>From: </span>{request.pickup && request.pickup.label ? request.pickup.label : ''}</p>
            <p className="ride-list__result-label"><span>To: </span>{request.destination && request.destination.label ? request.destination.label : ''}</p>
            <button className="ride-list__accept-btn" onClick={() => acceptRide(request)}>Accept</button>
          </div>
        </div>  
      ))
    } else { 
      return (<h3 className="empty-message">You do not have any requests</h3>);
    }
  }

  return (
    <div className="ride-list">
      <div className="ride-list__container">
        <div className="ride-list__title">Ride Requests</div>
      </div>
      <div className="ride-list__content">
        {renderRideList()}
      </div>  
    </div>
  );
}

export default RideList;
