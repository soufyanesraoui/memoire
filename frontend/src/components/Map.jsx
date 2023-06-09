import React from 'react';
import Map1 from './Map1';

const Map = () => {
  const stations = [
    {
      id: 1,
      name: 'Station Ben Abdelmalek',
      latitude: 36.37114992066686,
      longitude: 6.605441896824446,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/1.png'
    },
    {
      id: 2,
      name: 'station Belle Vue',
      latitude:36.36152402701944 ,
      longitude: 6.606813784175824,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/2.jpg'
    },
    {
      id: 3,
      name: 'station tramway Kadour Boumedous',
      latitude: 36.35103241937027,
      longitude: 6.601014106719133,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/3.png'
    },
    {
      id: 4,
      name: 'station Émir Abdelkader',
      latitude:36.34761487194633 ,
      longitude: 6.600836246359245,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/4.png'
    },
    {
      id: 5,
      name: 'station Cité Fadila Saâdane',
      latitude: 36.349983019712404,
      longitude: 6.60577133672817,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/5.png'
    },
    {
      id: 6,
      name: 'station Zone Industrielle Palma',
      latitude:36.347802493652786 ,
      longitude: 6.610571668690413,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/6.png'
    },
    {
      id: 7,
      name: 'station Université Mentouri',
      latitude: 36.34110915229988,
      longitude: 6.617641891527552,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/7.png'
    },
    {
      id: 8,
      name: 'station Résidence Universitaire Mentouri',
      latitude:36.33441986974847 ,
      longitude: 6.616633380960815,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/8.png'
    },
    {
      id: 9,
      name: 'station Cité Kheznadar',
      latitude: 36.32463402723719,
      longitude: 6.620925639254889,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/9.png'
    },
    {
      id: 10,
      name: 'station Zouaghi Slimane',
      latitude:36.31357289323075,
      longitude: 6.617846347957507,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/10.png'
    },
    {
      id: 11,
      name: 'station Université Salah Boubnider',
      latitude: 36.284731270839664,
      longitude:  6.597188113109438,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/11.png'
    },
    {
      id: 12,
      name: 'station 19 mai 1956 ',
      latitude:36.27358366383604 ,
      longitude: 6.592919553120408,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/12.png'
    },
    {
      id: 13,
      name: 'station 8 mai 1945',
      latitude: 36.26561808425965,
      longitude: 6.596641437776008,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/13.png'
    },
    {
      id: 14,
      name: 'station Chahid Kadri Brahim',
      latitude:36.26192225513662 ,
      longitude: 6.601801435251116,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/14.png'
    },
    {
      id: 15,
      name: 'station Chouhada',
      latitude: 36.25923888085393,
      longitude: 6.595190001156681,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/15.png'
    },
    {
      id: 16,
      name: 'station Ali Mendjeli',
      latitude:36.25529476335167,
      longitude: 6.575178581955405,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/16.png'
    },
    {
      id: 17,
      name: 'station Avenue de la ALN',
      latitude: 36.24983902462529,
      longitude: 6.573969340362287,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/17.png'
    },
    {
      id: 18,
      name: 'station Ennasr',
      latitude:36.24940688084546 ,
      longitude:6.573829933820976,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/18.png'
    },
    {
      id: 19,
      name: 'station Université Abdelhamid Mehri',
      latitude: 36.247866760281845,
      longitude: 6.569356009209052,
      description1: 'tramway1: 08:00',
      description2: 'tramway2: 08:15',
      description3: 'tramway3: 08:30',
      image:'../../images/19.png'
    },
  ];
  return (
    <div style={{ height: '500px' }}>
      <Map1 stations={stations} />
    </div>
  );
};

export default Map;
