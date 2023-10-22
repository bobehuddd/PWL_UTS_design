import DHeader from "./DHeader";
import DForecast from "./DForecast";
import DForecastDaysList from "./DForecastDaysList";
import { useState } from "react";

const DHome = () => {
    // membuat state yang akan digunakan sebagai kondisi untuk menampilkan informasi cuaca ketika tombol search ditekan
    const [showWeather, setShowWeather] = useState(false);

    // data dummy cuaca
    const forecast = {
        location: {
            name: "Yogyakarta",
            country: "Indonesia"
        },
        current: {
            temp_c: 32.8,
            feelslike_c: 38.4,
            wind_mph: 5.1,
            humidity: 43,
            pressure_in: 29.92,
            condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png"
            }
        },
        forecastDays: [
            {
                day: "Selasa",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                temp: 32
            },
            {
                day: "Rabu",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                temp: 34
            },
            {
                day: "Kamis",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                temp: 35
            },
            {
                day: "Jumat",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                temp: 35
            },
            {
                day: "Sabtu",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                temp: 35.1
            },
            {
                day: "Minggu",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                temp: 34.8
            },
        ]
    }

    // memisahkan data yang akan di kirimkan ke masing" komponen
    const { forecastDays, ...others } = forecast;

    return (
        <>
            {/* mengirimkan fungsi untuk meng set state showWeather ke komponen header dashboard */}
            <DHeader search={setShowWeather} />
            <div className="container h-screen w-full mt-[-141px] mx-auto">
                <div className="flex flex-col gap-y-10 justify-center items-center">
                    {/* membuat kondisi jika nilai dari show weather == true makan akan
                    merender komponen di bawah,jika tidak maka tidak ada yang akan dirender */}
                    {showWeather ? (
                        <>
                            <div className="mt-48">
                                {/* merender komponen ramalan cuaca hari ini */}
                                {/* forecast={others}, mengirimpkan data ke dalam komponen tersebut */}
                                <DForecast forecast={others} />
                            </div>
                            <div>
                                {/* merender komponen ramalan cuaca selama satu minggu kedepan */}
                                {/* forecastDays={forecastDays}, mengirimpkan data ke dalam komponen tersebut */}
                                <DForecastDaysList forecastDays={forecastDays} />
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default DHome;
