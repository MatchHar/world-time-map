const REGIONS = [
  { id: "honolulu", city: "Honolulu", country: "United States", zone: "Pacific/Honolulu", lat: 21.31, lon: -157.86 },
  { id: "anchorage", city: "Anchorage", country: "United States", zone: "America/Anchorage", lat: 61.22, lon: -149.9 },
  { id: "vancouver", city: "Vancouver", country: "Canada", zone: "America/Vancouver", lat: 49.28, lon: -123.12 },
  { id: "seattle", city: "Seattle", country: "United States", zone: "America/Los_Angeles", lat: 47.61, lon: -122.33 },
  { id: "san-francisco", city: "San Francisco", country: "United States", zone: "America/Los_Angeles", lat: 37.77, lon: -122.42 },
  { id: "los-angeles", city: "Los Angeles", country: "United States", zone: "America/Los_Angeles", lat: 34.05, lon: -118.24, aliases: ["LA", "洛杉矶"] },
  { id: "las-vegas", city: "Las Vegas", country: "United States", zone: "America/Los_Angeles", lat: 36.17, lon: -115.14 },
  { id: "phoenix", city: "Phoenix", country: "United States", zone: "America/Phoenix", lat: 33.45, lon: -112.07 },
  { id: "denver", city: "Denver", country: "United States", zone: "America/Denver", lat: 39.74, lon: -104.99 },
  { id: "mexico-city", city: "Mexico City", country: "Mexico", zone: "America/Mexico_City", lat: 19.43, lon: -99.13, aliases: ["CDMX"] },
  { id: "chicago", city: "Chicago", country: "United States", zone: "America/Chicago", lat: 41.88, lon: -87.63 },
  { id: "dallas", city: "Dallas", country: "United States", zone: "America/Chicago", lat: 32.78, lon: -96.8 },
  { id: "houston", city: "Houston", country: "United States", zone: "America/Chicago", lat: 29.76, lon: -95.37 },
  { id: "miami", city: "Miami", country: "United States", zone: "America/New_York", lat: 25.76, lon: -80.19 },
  { id: "atlanta", city: "Atlanta", country: "United States", zone: "America/New_York", lat: 33.75, lon: -84.39 },
  { id: "washington-dc", city: "Washington DC", country: "United States", zone: "America/New_York", lat: 38.9, lon: -77.04 },
  { id: "new-york", city: "New York", country: "United States", zone: "America/New_York", lat: 40.71, lon: -74.01, aliases: ["NYC", "纽约"] },
  { id: "toronto", city: "Toronto", country: "Canada", zone: "America/Toronto", lat: 43.65, lon: -79.38, aliases: ["多伦多"] },
  { id: "montreal", city: "Montreal", country: "Canada", zone: "America/Toronto", lat: 45.5, lon: -73.57 },
  { id: "bogota", city: "Bogota", country: "Colombia", zone: "America/Bogota", lat: 4.71, lon: -74.07 },
  { id: "lima", city: "Lima", country: "Peru", zone: "America/Lima", lat: -12.05, lon: -77.04 },
  { id: "santiago", city: "Santiago", country: "Chile", zone: "America/Santiago", lat: -33.45, lon: -70.66 },
  { id: "buenos-aires", city: "Buenos Aires", country: "Argentina", zone: "America/Argentina/Buenos_Aires", lat: -34.6, lon: -58.38 },
  { id: "sao-paulo", city: "Sao Paulo", country: "Brazil", zone: "America/Sao_Paulo", lat: -23.55, lon: -46.63 },
  { id: "rio-de-janeiro", city: "Rio de Janeiro", country: "Brazil", zone: "America/Sao_Paulo", lat: -22.91, lon: -43.17 },
  { id: "reykjavik", city: "Reykjavik", country: "Iceland", zone: "Atlantic/Reykjavik", lat: 64.15, lon: -21.94 },
  { id: "dublin", city: "Dublin", country: "Ireland", zone: "Europe/Dublin", lat: 53.35, lon: -6.26 },
  { id: "london", city: "London", country: "United Kingdom", zone: "Europe/London", lat: 51.51, lon: -0.13, aliases: ["伦敦"] },
  { id: "lisbon", city: "Lisbon", country: "Portugal", zone: "Europe/Lisbon", lat: 38.72, lon: -9.14 },
  { id: "madrid", city: "Madrid", country: "Spain", zone: "Europe/Madrid", lat: 40.42, lon: -3.7 },
  { id: "barcelona", city: "Barcelona", country: "Spain", zone: "Europe/Madrid", lat: 41.39, lon: 2.17 },
  { id: "paris", city: "Paris", country: "France", zone: "Europe/Paris", lat: 48.86, lon: 2.35, aliases: ["巴黎"] },
  { id: "brussels", city: "Brussels", country: "Belgium", zone: "Europe/Brussels", lat: 50.85, lon: 4.35 },
  { id: "amsterdam", city: "Amsterdam", country: "Netherlands", zone: "Europe/Amsterdam", lat: 52.37, lon: 4.9 },
  { id: "zurich", city: "Zurich", country: "Switzerland", zone: "Europe/Zurich", lat: 47.38, lon: 8.54 },
  { id: "berlin", city: "Berlin", country: "Germany", zone: "Europe/Berlin", lat: 52.52, lon: 13.4, aliases: ["柏林"] },
  { id: "rome", city: "Rome", country: "Italy", zone: "Europe/Rome", lat: 41.9, lon: 12.5 },
  { id: "milan", city: "Milan", country: "Italy", zone: "Europe/Rome", lat: 45.46, lon: 9.19 },
  { id: "vienna", city: "Vienna", country: "Austria", zone: "Europe/Vienna", lat: 48.21, lon: 16.37 },
  { id: "warsaw", city: "Warsaw", country: "Poland", zone: "Europe/Warsaw", lat: 52.23, lon: 21.01 },
  { id: "stockholm", city: "Stockholm", country: "Sweden", zone: "Europe/Stockholm", lat: 59.33, lon: 18.07 },
  { id: "oslo", city: "Oslo", country: "Norway", zone: "Europe/Oslo", lat: 59.91, lon: 10.75 },
  { id: "helsinki", city: "Helsinki", country: "Finland", zone: "Europe/Helsinki", lat: 60.17, lon: 24.94 },
  { id: "athens", city: "Athens", country: "Greece", zone: "Europe/Athens", lat: 37.98, lon: 23.73 },
  { id: "istanbul", city: "Istanbul", country: "Turkey", zone: "Europe/Istanbul", lat: 41.01, lon: 28.98 },
  { id: "kyiv", city: "Kyiv", country: "Ukraine", zone: "Europe/Kyiv", lat: 50.45, lon: 30.52 },
  { id: "moscow", city: "Moscow", country: "Russia", zone: "Europe/Moscow", lat: 55.76, lon: 37.62, aliases: ["莫斯科"] },
  { id: "cairo", city: "Cairo", country: "Egypt", zone: "Africa/Cairo", lat: 30.04, lon: 31.24 },
  { id: "johannesburg", city: "Johannesburg", country: "South Africa", zone: "Africa/Johannesburg", lat: -26.2, lon: 28.04 },
  { id: "nairobi", city: "Nairobi", country: "Kenya", zone: "Africa/Nairobi", lat: -1.29, lon: 36.82 },
  { id: "lagos", city: "Lagos", country: "Nigeria", zone: "Africa/Lagos", lat: 6.52, lon: 3.38 },
  { id: "casablanca", city: "Casablanca", country: "Morocco", zone: "Africa/Casablanca", lat: 33.57, lon: -7.59 },
  { id: "tel-aviv", city: "Tel Aviv", country: "Israel", zone: "Asia/Jerusalem", lat: 32.09, lon: 34.78 },
  { id: "riyadh", city: "Riyadh", country: "Saudi Arabia", zone: "Asia/Riyadh", lat: 24.71, lon: 46.68 },
  { id: "dubai", city: "Dubai", country: "United Arab Emirates", zone: "Asia/Dubai", lat: 25.2, lon: 55.27, aliases: ["迪拜"] },
  { id: "tehran", city: "Tehran", country: "Iran", zone: "Asia/Tehran", lat: 35.69, lon: 51.39 },
  { id: "karachi", city: "Karachi", country: "Pakistan", zone: "Asia/Karachi", lat: 24.86, lon: 67.01 },
  { id: "delhi", city: "Delhi", country: "India", zone: "Asia/Kolkata", lat: 28.61, lon: 77.21, aliases: ["New Delhi", "新德里"] },
  { id: "mumbai", city: "Mumbai", country: "India", zone: "Asia/Kolkata", lat: 19.08, lon: 72.88 },
  { id: "bangalore", city: "Bangalore", country: "India", zone: "Asia/Kolkata", lat: 12.97, lon: 77.59 },
  { id: "dhaka", city: "Dhaka", country: "Bangladesh", zone: "Asia/Dhaka", lat: 23.81, lon: 90.41 },
  { id: "yangon", city: "Yangon", country: "Myanmar", zone: "Asia/Yangon", lat: 16.84, lon: 96.17 },
  { id: "bangkok", city: "Bangkok", country: "Thailand", zone: "Asia/Bangkok", lat: 13.75, lon: 100.5, aliases: ["曼谷"] },
  { id: "hanoi", city: "Hanoi", country: "Vietnam", zone: "Asia/Ho_Chi_Minh", lat: 21.03, lon: 105.85 },
  { id: "ho-chi-minh-city", city: "Ho Chi Minh City", country: "Vietnam", zone: "Asia/Ho_Chi_Minh", lat: 10.82, lon: 106.63, aliases: ["Saigon"] },
  { id: "jakarta", city: "Jakarta", country: "Indonesia", zone: "Asia/Jakarta", lat: -6.21, lon: 106.85 },
  { id: "kuala-lumpur", city: "Kuala Lumpur", country: "Malaysia", zone: "Asia/Kuala_Lumpur", lat: 3.14, lon: 101.69 },
  { id: "singapore", city: "Singapore", country: "Singapore", zone: "Asia/Singapore", lat: 1.35, lon: 103.82, aliases: ["新加坡"] },
  { id: "manila", city: "Manila", country: "Philippines", zone: "Asia/Manila", lat: 14.6, lon: 120.98 },
  { id: "taipei", city: "Taipei", country: "Taiwan", zone: "Asia/Taipei", lat: 25.03, lon: 121.57, aliases: ["台北"] },
  { id: "hong-kong", city: "Hong Kong", country: "China", zone: "Asia/Hong_Kong", lat: 22.32, lon: 114.17, aliases: ["香港"] },
  { id: "shenzhen", city: "Shenzhen", country: "China", zone: "Asia/Shanghai", lat: 22.54, lon: 114.06, aliases: ["深圳"] },
  { id: "guangzhou", city: "Guangzhou", country: "China", zone: "Asia/Shanghai", lat: 23.13, lon: 113.26, aliases: ["广州"] },
  { id: "shanghai", city: "Shanghai", country: "China", zone: "Asia/Shanghai", lat: 31.23, lon: 121.47, aliases: ["上海"] },
  { id: "hangzhou", city: "Hangzhou", country: "China", zone: "Asia/Shanghai", lat: 30.27, lon: 120.16, aliases: ["杭州"] },
  { id: "nanjing", city: "Nanjing", country: "China", zone: "Asia/Shanghai", lat: 32.06, lon: 118.8, aliases: ["南京"] },
  { id: "beijing", city: "Beijing", country: "China", zone: "Asia/Shanghai", lat: 39.9, lon: 116.41, aliases: ["北京", "Peking"] },
  { id: "chengdu", city: "Chengdu", country: "China", zone: "Asia/Shanghai", lat: 30.57, lon: 104.07, aliases: ["成都"] },
  { id: "chongqing", city: "Chongqing", country: "China", zone: "Asia/Shanghai", lat: 29.56, lon: 106.55, aliases: ["重庆"] },
  { id: "wuhan", city: "Wuhan", country: "China", zone: "Asia/Shanghai", lat: 30.59, lon: 114.31, aliases: ["武汉"] },
  { id: "xian", city: "Xi'an", country: "China", zone: "Asia/Shanghai", lat: 34.34, lon: 108.94, aliases: ["西安", "Xian"] },
  { id: "seoul", city: "Seoul", country: "South Korea", zone: "Asia/Seoul", lat: 37.57, lon: 126.98, aliases: ["首尔"] },
  { id: "osaka", city: "Osaka", country: "Japan", zone: "Asia/Tokyo", lat: 34.69, lon: 135.5, aliases: ["大阪"] },
  { id: "tokyo", city: "Tokyo", country: "Japan", zone: "Asia/Tokyo", lat: 35.68, lon: 139.69, aliases: ["东京"] },
  { id: "sapporo", city: "Sapporo", country: "Japan", zone: "Asia/Tokyo", lat: 43.06, lon: 141.35 },
  { id: "perth", city: "Perth", country: "Australia", zone: "Australia/Perth", lat: -31.95, lon: 115.86 },
  { id: "adelaide", city: "Adelaide", country: "Australia", zone: "Australia/Adelaide", lat: -34.93, lon: 138.6 },
  { id: "brisbane", city: "Brisbane", country: "Australia", zone: "Australia/Brisbane", lat: -27.47, lon: 153.03 },
  { id: "melbourne", city: "Melbourne", country: "Australia", zone: "Australia/Melbourne", lat: -37.81, lon: 144.96 },
  { id: "sydney", city: "Sydney", country: "Australia", zone: "Australia/Sydney", lat: -33.87, lon: 151.21, aliases: ["悉尼"] },
  { id: "wellington", city: "Wellington", country: "New Zealand", zone: "Pacific/Auckland", lat: -41.29, lon: 174.78 },
  { id: "auckland", city: "Auckland", country: "New Zealand", zone: "Pacific/Auckland", lat: -36.85, lon: 174.76 },
];

const TILE_CONFIG = {
  map: {
    attribution: "Map tiles © OpenStreetMap contributors",
    url: (z, x, y) => `https://tile.openstreetmap.org/${z}/${x}/${y}.png`,
  },
  satellite: {
    attribution: "Satellite imagery © Esri, Maxar, Earthstar Geographics",
    url: (z, x, y) => `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}`,
  },
};

const TILE_ZOOM = 2;
const TILE_COUNT = 2 ** TILE_ZOOM;
const TILE_SIZE = 256;
const MAP_WORLD_SIZE = TILE_COUNT * TILE_SIZE;
const MAP_CROP_TOP = 190;
const MAP_CROP_HEIGHT = 560;

const state = {
  regions: [...REGIONS],
  baseId: "toronto",
  baseInstant: new Date(),
  query: "",
  duration: 60,
  hourMode: "12",
  sortMode: "map",
  mapStyle: "map",
};

const elements = {
  localTime: document.querySelector("#local-time"),
  localZone: document.querySelector("#local-zone"),
  baseRegion: document.querySelector("#base-region"),
  baseDate: document.querySelector("#base-date"),
  baseTime: document.querySelector("#base-time"),
  prevDayButton: document.querySelector("#prev-day-button"),
  nextDayButton: document.querySelector("#next-day-button"),
  nowButton: document.querySelector("#now-button"),
  copyButton: document.querySelector("#copy-button"),
  search: document.querySelector("#search"),
  citySuggestions: document.querySelector("#city-suggestions"),
  customZone: document.querySelector("#custom-zone"),
  mapStyle: document.querySelector("#map-style"),
  hourMode: document.querySelector("#hour-mode"),
  sortMode: document.querySelector("#sort-mode"),
  mapTiles: document.querySelector("#map-tiles"),
  markers: document.querySelector("#markers"),
  zoneLabels: document.querySelector("#zone-labels"),
  mapAttribution: document.querySelector("#map-attribution"),
  selectedTitle: document.querySelector("#selected-title"),
  selectedTime: document.querySelector("#selected-time"),
  selectedOffset: document.querySelector("#selected-offset"),
  selectedPhase: document.querySelector("#selected-phase"),
  selectedUtc: document.querySelector("#selected-utc"),
  selectedCount: document.querySelector("#selected-count"),
  duration: document.querySelector("#duration"),
  availability: document.querySelector("#availability"),
  regions: document.querySelector("#regions"),
  resultCount: document.querySelector("#result-count"),
};

function formatParts(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  return Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
}

function instantFromZonedInput(dateValue, timeValue, timeZone) {
  const [year, month, day] = dateValue.split("-").map(Number);
  const [hour, minute] = timeValue.split(":").map(Number);
  let guess = Date.UTC(year, month - 1, day, hour, minute);

  for (let index = 0; index < 3; index += 1) {
    const parts = formatParts(new Date(guess), timeZone);
    const asUtc = Date.UTC(
      Number(parts.year),
      Number(parts.month) - 1,
      Number(parts.day),
      Number(parts.hour),
      Number(parts.minute),
      Number(parts.second)
    );
    guess += Date.UTC(year, month - 1, day, hour, minute, 0) - asUtc;
  }

  return new Date(guess);
}

function zonedInputValues(date, timeZone) {
  const parts = formatParts(date, timeZone);
  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    time: `${parts.hour === "24" ? "00" : parts.hour}:${parts.minute}`,
  };
}

function formatTime(date, timeZone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: state.hourMode === "12",
  }).format(date);
}

function formatDate(date, timeZone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function formatLong(date, timeZone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: state.hourMode === "12",
    timeZoneName: "short",
  }).format(date);
}

function offsetText(date, timeZone) {
  const value = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
  })
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName")?.value;
  return value?.replace("GMT", "UTC") || "UTC";
}

function localHour(date, timeZone) {
  const hour = Number(formatParts(date, timeZone).hour);
  return hour === 24 ? 0 : hour;
}

function localMinutes(date, timeZone) {
  const parts = formatParts(date, timeZone);
  const hour = Number(parts.hour) === 24 ? 0 : Number(parts.hour);
  return hour * 60 + Number(parts.minute);
}

function zoneOffsetMinutes(date, timeZone) {
  const parts = formatParts(date, timeZone);
  const hour = Number(parts.hour) === 24 ? 0 : Number(parts.hour);
  const zonedUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    hour,
    Number(parts.minute),
    Number(parts.second)
  );
  return Math.round((zonedUtc - date.getTime()) / 60000);
}

function phaseForHour(hour) {
  if (hour >= 9 && hour < 18) return { label: "Working hours", className: "work" };
  if (hour >= 6 && hour < 9) return { label: "Early morning", className: "early" };
  if (hour >= 18 && hour < 22) return { label: "Evening", className: "late" };
  return { label: "Night", className: "night" };
}

function meetingStatus(date, timeZone, durationMinutes) {
  const parts = formatParts(date, timeZone);
  const start = (Number(parts.hour) === 24 ? 0 : Number(parts.hour)) * 60 + Number(parts.minute);
  const end = start + durationMinutes;
  if (start >= 9 * 60 && end <= 18 * 60) return "Good";
  if (end > 9 * 60 && start < 18 * 60) return "Partial";
  return "Off hours";
}

function dayDelta(region) {
  const base = formatParts(state.baseInstant, selectedRegion().zone);
  const other = formatParts(state.baseInstant, region.zone);
  const baseUtc = Date.UTC(Number(base.year), Number(base.month) - 1, Number(base.day));
  const otherUtc = Date.UTC(Number(other.year), Number(other.month) - 1, Number(other.day));
  return Math.round((otherUtc - baseUtc) / 86400000);
}

function deltaLabel(delta) {
  if (delta === 0) return "same date";
  if (delta > 0) return `+${delta} day`;
  return `${delta} day`;
}

function relativeOffsetLabel(region) {
  const baseOffset = zoneOffsetMinutes(state.baseInstant, selectedRegion().zone);
  const regionOffset = zoneOffsetMinutes(state.baseInstant, region.zone);
  const diff = regionOffset - baseOffset;
  if (diff === 0) return "same as base";
  const sign = diff > 0 ? "+" : "-";
  const total = Math.abs(diff);
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  return `${sign}${hours}h${minutes ? ` ${minutes}m` : ""} vs base`;
}

function selectedRegion() {
  return state.regions.find((region) => region.id === state.baseId) || state.regions[0];
}

function normalizedText(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function searchableText(region) {
  return normalizedText([region.city, region.country, region.zone, ...(region.aliases || [])].join(" "));
}

function projectPoint(region) {
  const lat = Math.max(-85.0511, Math.min(85.0511, region.lat));
  const sin = Math.sin((lat * Math.PI) / 180);
  const mercatorX = ((region.lon + 180) / 360) * MAP_WORLD_SIZE;
  const mercatorY = (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * MAP_WORLD_SIZE;
  return {
    x: (mercatorX / MAP_WORLD_SIZE) * 100,
    y: ((mercatorY - MAP_CROP_TOP) / MAP_CROP_HEIGHT) * 100,
  };
}

function regionMatches(region) {
  const query = normalizedText(state.query.trim());
  if (!query) return true;
  return searchableText(region).includes(query);
}

function exactSearchRegion() {
  const query = normalizedText(state.query.trim());
  if (!query) return null;
  return state.regions.find((region) => {
    const names = [region.city, region.zone, ...(region.aliases || [])].map(normalizedText);
    return names.includes(query);
  });
}

function visibleRegions() {
  const baseOrder = new Map(state.regions.map((region, index) => [region.id, index]));
  const filtered = state.regions.filter(regionMatches);
  return filtered.sort((left, right) => {
    if (state.sortMode === "city") return left.city.localeCompare(right.city);
    if (state.sortMode === "offset") {
      return zoneOffsetMinutes(state.baseInstant, left.zone) - zoneOffsetMinutes(state.baseInstant, right.zone);
    }
    if (state.sortMode === "time") return localMinutes(state.baseInstant, left.zone) - localMinutes(state.baseInstant, right.zone);
    return baseOrder.get(left.id) - baseOrder.get(right.id);
  });
}

function loadCustomRegions() {
  try {
    const saved = JSON.parse(localStorage.getItem("world-time-map-custom-zones") || "[]");
    saved.forEach((zone) => {
      if (typeof zone === "string" && !state.regions.some((region) => region.zone === zone)) {
        state.regions.push(regionFromZone(zone));
      }
    });
  } catch {
    localStorage.removeItem("world-time-map-custom-zones");
  }
}

function saveCustomRegions() {
  const zones = state.regions.filter((region) => region.custom).map((region) => region.zone);
  localStorage.setItem("world-time-map-custom-zones", JSON.stringify(zones));
}

function regionFromZone(zone) {
  const parts = zone.split("/");
  const city = parts[parts.length - 1].replace(/_/g, " ");
  const id = `custom-${zone.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const offset = zoneOffsetMinutes(state.baseInstant, zone) / 60;
  return {
    id,
    city,
    country: parts[0],
    zone,
    lat: 0,
    lon: Math.max(-175, Math.min(175, offset * 15)),
    custom: true,
  };
}

function populateControls() {
  elements.baseRegion.innerHTML = state.regions
    .map((region) => `<option value="${region.id}">${region.city} - ${region.zone}</option>`)
    .join("");
  elements.baseRegion.value = state.baseId;

  elements.citySuggestions.innerHTML = state.regions
    .map((region) => `<option value="${region.city}">${region.country} - ${region.zone}</option>`)
    .join("");

  const zones = typeof Intl.supportedValuesOf === "function" ? Intl.supportedValuesOf("timeZone") : [];
  elements.customZone.innerHTML = [
    '<option value="">Choose a zone</option>',
    ...zones.map((zone) => `<option value="${zone}">${zone}</option>`),
  ].join("");

  const zoneMarks = [];
  for (let offset = -12; offset <= 12; offset += 3) {
    const x = ((offset + 12) / 24) * 100;
    zoneMarks.push(`<span style="left:${x}%">UTC${offset >= 0 ? "+" : ""}${offset}</span>`);
  }
  elements.zoneLabels.innerHTML = zoneMarks.join("");
}

function syncInputsToBase() {
  const values = zonedInputValues(state.baseInstant, selectedRegion().zone);
  elements.baseDate.value = values.date;
  elements.baseTime.value = values.time;
  elements.baseRegion.value = state.baseId;
  elements.mapStyle.value = state.mapStyle;
  elements.hourMode.value = state.hourMode;
  elements.sortMode.value = state.sortMode;
}

function renderTiles() {
  const config = TILE_CONFIG[state.mapStyle] || TILE_CONFIG.map;
  const tiles = [];
  for (let y = 0; y < TILE_COUNT; y += 1) {
    for (let x = 0; x < TILE_COUNT; x += 1) {
      tiles.push(`
        <img
          alt=""
          src="${config.url(TILE_ZOOM, x, y)}"
          style="left:${(x / TILE_COUNT) * 100}%; top:${((y * TILE_SIZE - MAP_CROP_TOP) / MAP_CROP_HEIGHT) * 100}%; width:${100 / TILE_COUNT}%; height:${(TILE_SIZE / MAP_CROP_HEIGHT) * 100}%"
        />
      `);
    }
  }
  elements.mapTiles.innerHTML = tiles.join("");
  elements.mapAttribution.textContent = config.attribution;
}

function renderMarkers() {
  const markers = state.regions
    .map((region) => {
      const point = projectPoint(region);
      const active = region.id === state.baseId ? " active" : "";
      const dimmed = regionMatches(region) ? "" : " dimmed";
      const visibleLabel = active || state.query.trim() ? "" : " compact";
      return `
        <button
          class="marker${active}${dimmed}${visibleLabel}"
          data-id="${region.id}"
          type="button"
          style="left:${point.x}%; top:${point.y}%"
          aria-label="${region.city}, ${region.country}"
          title="${region.city}, ${region.country} - ${region.zone}"
        >
          <span class="pin"></span>
          <span class="marker-label">${region.city}</span>
        </button>
      `;
    })
    .join("");

  elements.markers.innerHTML = markers;
  elements.markers.querySelectorAll("button").forEach((marker) => {
    marker.addEventListener("click", () => setBaseRegion(marker.dataset.id));
  });
}

function renderSelected() {
  const region = selectedRegion();
  const hour = localHour(state.baseInstant, region.zone);
  const phase = phaseForHour(hour);
  const visibleCount = visibleRegions().length;
  elements.selectedTitle.textContent = `${region.city}, ${region.country}`;
  elements.selectedTime.textContent = formatLong(state.baseInstant, region.zone);
  elements.selectedOffset.textContent = offsetText(state.baseInstant, region.zone);
  elements.selectedPhase.textContent = phase.label;
  elements.selectedUtc.textContent = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    hour: "numeric",
    minute: "2-digit",
    weekday: "short",
    month: "short",
    day: "numeric",
    hour12: state.hourMode === "12",
  }).format(state.baseInstant);
  elements.selectedCount.textContent = `${visibleCount} shown`;
}

function renderAvailability() {
  const plannerRegions = visibleRegions().slice(0, 8);
  elements.availability.innerHTML = plannerRegions
    .map((region) => {
      const hour = localHour(state.baseInstant, region.zone);
      const status = meetingStatus(state.baseInstant, region.zone, state.duration);
      const left = ((hour * 60 + Number(formatParts(state.baseInstant, region.zone).minute)) / 1440) * 100;
      return `
        <div class="slot">
          <strong>${region.city}</strong>
          <div class="slot-bar" title="Green indicates 09:00-18:00">
            <span class="slot-dot" style="left:${left}%"></span>
          </div>
          <span>${status}</span>
        </div>
      `;
    })
    .join("");
}

function renderRegions() {
  const sortedRegions = visibleRegions();
  elements.resultCount.textContent = `${sortedRegions.length} region${sortedRegions.length === 1 ? "" : "s"}`;

  if (!sortedRegions.length) {
    elements.regions.innerHTML = '<div class="empty">No matching regions.</div>';
    return;
  }

  elements.regions.innerHTML = sortedRegions
    .map((region) => {
      const hour = localHour(state.baseInstant, region.zone);
      const phase = phaseForHour(hour);
      const active = region.id === state.baseId ? " active" : "";
      return `
        <article class="region-card${active}" data-id="${region.id}">
          <div class="region-head">
            <div>
              <strong>${region.city}</strong>
              <span>${region.country}</span>
            </div>
            <span class="badge ${phase.className}">${phase.label}</span>
          </div>
          <div class="time">${formatTime(state.baseInstant, region.zone)}</div>
          <div class="date-line">${formatDate(state.baseInstant, region.zone)}</div>
          <div class="meta-line">${offsetText(state.baseInstant, region.zone)} · ${deltaLabel(dayDelta(region))}</div>
          <div class="meta-line">${relativeOffsetLabel(region)}</div>
        </article>
      `;
    })
    .join("");

  elements.regions.querySelectorAll(".region-card").forEach((card) => {
    card.addEventListener("click", () => setBaseRegion(card.dataset.id));
  });
}

function updateShareUrl() {
  const params = new URLSearchParams({
    region: state.baseId,
    at: state.baseInstant.toISOString(),
    map: state.mapStyle,
    format: state.hourMode,
    sort: state.sortMode,
  });
  const customZones = state.regions.filter((region) => region.custom).map((region) => region.zone);
  if (customZones.length) params.set("zones", customZones.join(","));
  history.replaceState(null, "", `${location.pathname}?${params.toString()}`);
}

function renderAll() {
  syncInputsToBase();
  renderTiles();
  renderMarkers();
  renderSelected();
  renderAvailability();
  renderRegions();
  updateShareUrl();
}

function setBaseRegion(id) {
  state.baseId = id;
  renderAll();
}

function setBaseFromInputs() {
  state.baseInstant = instantFromZonedInput(elements.baseDate.value, elements.baseTime.value, selectedRegion().zone);
  renderAll();
}

function addCustomZone(zone) {
  if (!zone || state.regions.some((region) => region.zone === zone)) return;
  state.regions.push(regionFromZone(zone));
  saveCustomRegions();
  populateControls();
  state.baseId = state.regions[state.regions.length - 1].id;
  renderAll();
}

function hydrateFromUrl() {
  const params = new URLSearchParams(location.search);
  const zones = params.get("zones");
  if (zones) {
    zones.split(",").forEach((zone) => {
      if (zone && !state.regions.some((region) => region.zone === zone)) state.regions.push(regionFromZone(zone));
    });
    saveCustomRegions();
  }
  const region = params.get("region");
  const at = params.get("at");
  const map = params.get("map");
  const format = params.get("format");
  const sort = params.get("sort");
  if (region && state.regions.some((item) => item.id === region)) state.baseId = region;
  if (at && !Number.isNaN(new Date(at).getTime())) state.baseInstant = new Date(at);
  if (map === "map" || map === "satellite") state.mapStyle = map;
  if (format === "12" || format === "24") state.hourMode = format;
  if (["map", "time", "offset", "city"].includes(sort)) state.sortMode = sort;
}

function tickLocalClock() {
  const now = new Date();
  elements.localTime.textContent = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  }).format(now);
  elements.localZone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
}

elements.baseRegion.addEventListener("change", (event) => setBaseRegion(event.target.value));
elements.baseDate.addEventListener("change", setBaseFromInputs);
elements.baseTime.addEventListener("change", setBaseFromInputs);
elements.prevDayButton.addEventListener("click", () => {
  state.baseInstant = new Date(state.baseInstant.getTime() - 86400000);
  renderAll();
});
elements.nextDayButton.addEventListener("click", () => {
  state.baseInstant = new Date(state.baseInstant.getTime() + 86400000);
  renderAll();
});
elements.nowButton.addEventListener("click", () => {
  state.baseInstant = new Date();
  renderAll();
});
elements.copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    elements.copyButton.textContent = "Copied";
  } catch {
    elements.copyButton.textContent = "Copy failed";
  }
  window.setTimeout(() => {
    elements.copyButton.textContent = "Copy link";
  }, 1200);
});
elements.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  const exact = exactSearchRegion();
  if (exact) state.baseId = exact.id;
  renderMarkers();
  renderSelected();
  renderAvailability();
  renderRegions();
  updateShareUrl();
});
elements.search.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  const first = exactSearchRegion() || visibleRegions()[0];
  if (!first) return;
  event.preventDefault();
  state.baseId = first.id;
  state.query = first.city;
  elements.search.value = first.city;
  renderAll();
});
elements.customZone.addEventListener("change", (event) => addCustomZone(event.target.value));
elements.mapStyle.addEventListener("change", (event) => {
  state.mapStyle = event.target.value;
  renderTiles();
  updateShareUrl();
});
elements.hourMode.addEventListener("change", (event) => {
  state.hourMode = event.target.value;
  renderAll();
});
elements.sortMode.addEventListener("change", (event) => {
  state.sortMode = event.target.value;
  renderRegions();
  renderAvailability();
  updateShareUrl();
});
elements.duration.addEventListener("change", (event) => {
  state.duration = Number(event.target.value);
  renderAvailability();
});

loadCustomRegions();
hydrateFromUrl();
populateControls();
renderAll();
tickLocalClock();
window.setInterval(tickLocalClock, 1000);
