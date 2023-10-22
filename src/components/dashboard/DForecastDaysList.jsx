import { Image } from "@chakra-ui/react";
import React from "react";

const DForecastDaysList = ({ forecastDays }) => {
    return (
        <div className="w-full">
            <div className="max-w-6xl container">
                <div className="flex justify-center items-center bg-color-accent rounded-md shadow text-[#333]">
                    {forecastDays.map((item) => (
                        <div key={item.day} className="text-center py-4 px-5 border-r border-r-color-secondary">
                            <h2 className="font-semibold text-lg">{item.day}</h2>
                            <Image src={item.icon} className="my-2" />
                            <strong>{item.temp}°C</strong>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DForecastDaysList;
