import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import searchPlacesApi from "../utils/api";

const Map = (props) => {
  const [places, setPlaces] = useState([]);
  const router = useRouter();
  const { questionOne, questionTwo, questionThree } = router.query;

  useEffect(() => {
    searchPlacesApi(questionOne, questionTwo, questionThree).then((result) => {
      setPlaces(result.data.candidates);
      console.log("result ", result.data.candidates);
    });
  }, []);

  const defaultProps = {
    center: {
      lat: -34.397,
      lng: 150.644,
    },
    zoom: 5,
  };
  // console.log("props", props);
  console.log("q1", questionOne, questionTwo, questionThree);

  return (
    // Important! Always set the container height explicitly

    <div style={{ height: "80vh", width: "75%" }}></div>
  );
};

export default Map;
