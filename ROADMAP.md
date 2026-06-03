# Roadmap

## Planned improvements

- Add a denser city database with regional presets.
- Add optional Google Maps integration when an API key is configured.
- Add exportable meeting summaries for calendar invites.
- Add localized UI text.
- Add saved region groups for distributed teams.
- Add optional dark mode.
- Add visual time-zone bands that follow real political boundaries.

## Maintenance notes

This project intentionally uses browser-native `Intl` APIs instead of a bundled time-zone database. That keeps the site small and lets modern browsers handle daylight saving time and historical offset rules.
