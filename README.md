# World Time Map

Interactive static website for comparing dates and times across major world regions.

## Features

- Click a region on the world map to set it as the base time zone.
- Search a built-in city database with major cities and common aliases.
- Search several Chinese city names such as 北京, 上海, 广州, 深圳, 香港, 台北, 东京, 首尔, 伦敦, 巴黎, and 纽约.
- Choose any future or past date and time.
- Automatically convert that moment to major regions around the world.
- Search by city, country, or IANA time zone.
- Add any browser-supported IANA time zone.
- Switch between map and satellite map layers.
- Save custom time zones locally and include them in share links.
- Sort results by map order, local time, UTC offset, or city.
- Switch between 12-hour and 24-hour display.
- Show UTC offset, date difference, day phase, and meeting availability.
- Jump the selected moment backward or forward by one day.
- Copy a shareable URL for the selected region and time.

## Why it is useful

Planning across time zones is error-prone because dates can shift while the clock time looks reasonable. World Time Map keeps the selected moment fixed and shows each region's local date, offset, working-hours status, and relative difference from the base region.

The project is dependency-free and uses browser-native `Intl` time-zone APIs, so daylight saving time and historical offset rules are handled by the browser.

The map layer uses OpenStreetMap tiles for the standard map and Esri World Imagery tiles for the satellite view. Google Maps can be added later if a Google Maps JavaScript API key is available.

## Run locally

Open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy on GitHub Pages

1. Create a public GitHub repository named `world-time-map`.
2. Push this folder to the repository.
3. In GitHub, open `Settings -> Pages`.
4. Set the source to `Deploy from a branch`, choose `main`, and choose `/root`.

## OpenAI Codex for Open Source application note

Official form: https://openai.com/form/codex-for-oss/

The official page describes this as a program for open-source maintainers. A public repository is required, but approval is not guaranteed. This project is a better application candidate if it is kept public, documented, useful, and maintained with issues or future improvements.
