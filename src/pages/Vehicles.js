import React, { useState, useEffect } from 'react';

import fetchVehicles from '../utils/getData';
import PageView from '../components/PageView';

const Vehicles = () => {
  const [page, setPage] = useState(1);
  const [vehicles, setVehicles] = useState([]);
  const [response, setResponse] = useState({
    next: true,
    previous: false,
  });

  useEffect(() => {
    fetchVehicles('vehicles', page).then((response) => {
      const vehicle = response.results;
      setVehicles(vehicle);
      setResponse(response);
    });
  }, [page]);

  let rows = createArray(vehicles);
  return (
    <PageView
      state={response}
      path="vehicles"
      rows={rows}
      page={page}
      setPage={setPage}
    />
  );
};

function createArray(vehicles) {
  return vehicles.map((vehicle, index) => {
    return {
      nombre: vehicle.name,
      Modelo: vehicle.model,
      Capacidad: vehicle.passengers,
    };
  });
}
export default Vehicles;
