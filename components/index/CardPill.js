function HumanPill() {
  return (
    <div
      className={`rounded-full bg-programs-human text-white-100 text-sm whitespace-nowrap px-2`}
    >
      Human Health
    </div>
  );
}

function PlantPill() {
  return (
    <div
      className={`rounded-full bg-programs-plant text-white-100 text-sm whitespace-nowrap px-2`}
    >
      Plant Health
    </div>
  );
}

function TransportationPill() {
  return (
    <div
      className={`rounded-full bg-programs-transportation text-white-100 text-sm whitespace-nowrap px-2`}
    >
      Transportation Health
    </div>
  );
}

function EnergyPill() {
  return (
    <div
      className={`rounded-full bg-programs-energy text-white-100 text-sm whitespace-nowrap px-2`}
    >
      Energy Health
    </div>
  );
}

export default function CardPill({ program }) {
  switch (program) {
    case "Human":
      return <HumanPill />;
    case "Plant":
      return <PlantPill />;
    case "Transportation":
      return <TransportationPill />;
    case "Energy":
      return <EnergyPill />;
  }
}
