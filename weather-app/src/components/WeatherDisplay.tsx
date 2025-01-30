import { useSearchWeatherForecast } from "@/hooks/search-weather";
import dayjs from "dayjs";
import { Card, Loader } from "./ui";

export const WeatherDisplay = ({ search }: { search: string }) => {
  if (!search) throw new Error("Search is required");

  const { data, isPending, isError } = useSearchWeatherForecast({ q: search });
  if (isPending) {
    return <Loader isIndeterminate size="extra-large" />;
  }
  if (isError) {
    return <div>Error fetching weather data</div>;
  }

  const current = data.data.current;
  const location = data.data.location;
  const forecastHours = data.data.forecast.forecastday[0].hour;

  const isCurrentHour = (date: string) => {
    // return true if the date is the current hour
    return dayjs(date).isSame(new Date(), "hour");
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-2xl font-semibold tracking-tight">{location.name}</h1>
      <img
        className="size-20 object-cover"
        width="160px"
        height="160px"
        src={current.condition.icon}
        alt={current.condition.text}
      />
      <h2 className="text-xl font-semibold tracking-tight">{current.condition.text}</h2>
      <div className="flex items-center gap-2 text-sm">
        <span>{current.temp_c}°C</span> •<span>Feels like {current.feelslike_c}°C</span>
      </div>
      <div className="pt-6">
        <p className="mb-2 text-sm font-semibold">Hourly Forecast</p>

        <div className="grid w-full grid-cols-1 overflow-x-auto">
          <div className="flex gap-2 py-2">
            {forecastHours.map((hour) => (
              <Card
                key={hour.time}
                className={`flex shrink-0 flex-col items-center p-3 ${
                  isCurrentHour(hour.time) ? "border-primary" : ""
                }`}
              >
                <img className="size-10" src={hour.condition.icon} alt={hour.condition.text} />
                <p
                  className={`text-muted-fg mt-2 text-xs ${isCurrentHour(hour.time) && "text-primary"}`}
                >
                  {dayjs(hour.time).format("h:mmA")}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
