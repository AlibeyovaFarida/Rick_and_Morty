import LocationDetail from '@/components/locations/locationDetail'
import { getSingleLocation } from '@/services/getAllLocations';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function LocationDetailPage({params}) {
  const location = await getSingleLocation(params.id)
   const residents = location?.residents?.reduce((acc, resi) => {
     const Residents = async () => {
       const res = await fetch(resi);
       const data = await res.json();
       acc.push(data);
     };
     Residents();
     return acc;
   }, []);
   if (location.error) {
     notFound();
   }
  return (
    <div>
      <LocationDetail
        location={location}
        residents={residents}
      />
    </div>
  );
}

