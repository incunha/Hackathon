import Globe from "react-globe.gl";

import "./Globe.scss";

interface GlobeEvent {
  network: string;
  station: string;
  starttime: string;
  latitude: number;
  longitude: number;
  phase_data: {
    phase_time: string;
    phase_score: number;
    phase_type: "P" | "S";
    dt: number;
  }[];
}

function GlobeView({ events = [] }: { events?: GlobeEvent[] }) {
  const colorInterpolator = (t: number) =>
    `rgba(255,100,50,${Math.sqrt(1 - t)})`;

  return (
    <Globe
      height={450}
      width={500}
      globeImageUrl="lunar_surface.jpg"
      bumpImageUrl="lunar_bumpmap.jpg"
      // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      backgroundColor="rgba(0,0,0,0)"
      showGraticules={true}
      labelsData={events.map((e) => ({
        ...e,
        lat: e.latitude,
        lng: e.longitude,
      }))}
      labelText="station"
      labelSize={1.4}
      labelDotRadius={0.6}
      labelColor={() => `rgb(255,100,50)`}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      labelLabel={(d: any) => `
        <div><b>${d.station}</b></div>
        <div>${d.network}</div>
        <div><i>${new Date(d.starttime).toLocaleDateString()}</i></div>
      `}
      ringsData={events.map((e) => ({
        ...e,
        lat: e.latitude,
        lng: e.longitude,
        maxR: 15,
        propagationSpeed: Math.random() * 20 + 1,
        repeatPeriod: Math.random() * 2000 + 200,
      }))}
      ringColor={() => colorInterpolator}
      ringMaxRadius="maxR"
      ringPropagationSpeed="propagationSpeed"
      ringRepeatPeriod="repeatPeriod"
    />
  );
}

export default GlobeView;
