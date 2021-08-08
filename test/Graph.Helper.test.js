const airports = [
  [33.942501, -118.407997, "Los Angeles", "LAX"],
  [41.9786, -87.9048, "Chicago", "ORD"],
  [40.639801, -73.7789, "New York", "JFK"],
  [33.6367, -84.428101, "Atlanta", "ATL"],
  [37.6189994812012, -122.375, "San Francisco", "SFO"],
  [32.896801, -97.038002, "Dallas-Fort Worth", "DFW"],
  [40.692501, -74.168701, "New York", "EWR"],
  [36.08010101, -115.1520004, "Las Vegas", "LAS"],
  [39.861698150635, -104.672996521, "Denver", "DEN"],
  [28.4293994903564, -81.3089981079102, "Orlando", "MCO"],
  [40.777199, -73.872597, "New York", "LGA"],
  [38.9445, -77.455803, "Washington", "IAD"],
  [25.7931995391846, -80.2906036376953, "Miami", "MIA"],
  [33.435302, -112.005905, "Phoenix", "PHX"],
  [42.3643, -71.005203, "Boston", "BOS"],
  [47.449001, -122.308998, "Seattle", "SEA"],
  [39.8718986511231, -75.241096496582, "Philadelphia", "PHL"],
  [29.9843997955322, -95.3414001464844, "Houston", "IAH"],
  [35.2140007019043, -80.9430999755859, "Charlotte", "CLT"],
  [42.2123985290527, -83.353401184082, "Detroit", "DTW"],
  [38.8521, -77.037697, "Washington", "DCA"],
  [44.882, -93.221802, "Minneapolis", "MSP"],
  [40.785749, -111.979746, "Salt Lake City", "SLC"],
  [32.7336006165, -117.190002441, "San Diego", "SAN"],
  [41.785999, -87.752403, "Chicago", "MDW"],
  [39.1754, -76.668297, "Baltimore", "BWI"],
  [21.32062, -157.924228, "Honolulu", "HNL"],
  [35.7647018433, 140.386001587, "Tokyo", "NRT"],
  [-34.8222, -58.5358, "Buenos Aires", "EZE"],
  [50.033333, 8.570556, "Frankfurt", "FRA"],
  [41.8002778, 12.2388889, "Rome", "FCO"],
  [41.2971, 2.07846, "Barcelona", "BCN"],
  [40.080101013183594, 116.58499908447266, "Beijing", "PEK"],
];

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

const distance = (code1, code2) => {
  code1 = airports.filter((x) => x[3] === code1);
  code2 = airports.filter((x) => x[3] === code2);
  const lat1 = code1[0][0];
  const lat2 = code2[0][0];
  const lon1 = code1[0][1];
  const lon2 = code2[0][1];

  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = (R * c) / 1.609344;
  return d;
};
export { airports, distance };
