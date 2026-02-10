## Weather App

# Need data -> from an API. -> server address-> get the data

# data should be in a particular format (JSON)


# JSON
{
    "location": {
        "name": "Pune",
        "region": "Maharashtra",
        "country": "India",
        "lat": 18.5333,
        "lon": 73.8667,
        "tz_id": "Asia/Kolkata",
        "localtime_epoch": 1770144620,
        "localtime": "2026-02-04 00:20"
    },
    "current": {
        "last_updated_epoch": 1770144300,
        "last_updated": "2026-02-04 00:15",
        "temp_c": 20.9,
        "temp_f": 69.7,
        "is_day": 0,
        "condition": {
            "text": "Partly Cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
            "code": 1003
        },
        "wind_mph": 2.2,
        "wind_kph": 3.6,
        "wind_degree": 333,
        "wind_dir": "NNW",
        "pressure_mb": 1016.0,
        "pressure_in": 29.99,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 41,
        "cloud": 28,
        "feelslike_c": 20.9,
        "feelslike_f": 69.7,
        "windchill_c": 20.9,
        "windchill_f": 69.7,
        "heatindex_c": 20.9,
        "heatindex_f": 69.7,
        "dewpoint_c": 7.3,
        "dewpoint_f": 45.2,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 0.0,
        "gust_mph": 4.2,
        "gust_kph": 6.8,
        "short_rad": 0,
        "diff_rad": 0,
        "dni": 0,
        "gti": 0
    }
}

## Dependencies

# 1. Data source : API ->
http://api.weatherapi.com/v1/current.json?key=c04c1c1363d24ec983b184613260302&q=pune&aqi=no


# 2.Flow

1.Dummy UI -> with dummy data  [DONE]
## (start with it...)

2.Need data-> make API request (how ??);//Figured out [IN-PROGRESS]

3.Data -> DOM update.[TO-DO]


4.Hosting and deployment.[TO-DO]