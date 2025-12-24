import MissionCard from "../molecules/MissionCard";
import type { Mission } from "../../services/mission/model";

function HomePage() {
  const listeMission: Mission[] = [
    {
      id: 1,
      date: "2024-06-01",
      informations: {
        departureAddress: "123 Rue de Paris, 75000 Paris",
        arrivalAddress: "456 Avenue de Lyon, 69000 Lyon",
        dossierNumber: "D12345",
        name: "Client A",
        phoneNumber: "0123456789",
      },
    },
  ];
  return (
    <div>
      {listeMission.map((mission) => (
        <MissionCard key={mission.id} listeMission={mission} />
      ))}
    </div>
  );
}
export default HomePage;
