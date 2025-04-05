import React, { useEffect } from "react";

const ButtonPage = ({ city, cityList, setCity }) => {
  const getCityName = clickValue => {
    if (clickValue === "현 위치") {
      setCity("현 위치");
    } else if (clickValue === "미국") {
      setCity("United States");
    } else if (clickValue === "영국") {
      setCity("United Kingdom");
    } else {
      setCity("Japan");
    }
  };

  useEffect(() => {
    if (!city && cityList.length > 0) {
      setCity(cityList[0]);
    }
  }, [city, cityList, setCity]);

  return (
    <div>
      {cityList.map((item, index) => (
        <button
          //   className="button-st"
          className={
            "button-st" + (cityList.indexOf(city) === index ? " active" : "")
          }
          key={index}
          value={item}
          onClick={e => getCityName(e.target.value)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonPage;
