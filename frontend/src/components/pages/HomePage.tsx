import MissionCard from "../molecules/MissionCard";
interface Mission {
  id: number;
  date: string;
  addresseDépart: string;
  addresseArrivée: string;
  dossierNuméro: string;
  nom: string;
  numéroTéléphone: string;
}
function HomePage() {
  const listeMission: Mission[] = [
    {
      id: 1,
      date: "2024-06-01",
      addresseDépart: "123 Rue de Paris, 75000 Paris",
      addresseArrivée: "456 Avenue de Lyon, 69000 Lyon",
      dossierNuméro: "D12345",
      nom: "Client A",
      numéroTéléphone: "0123456789",
    },
  ];
  return (
    <div>
      {listeMission.map((mission) => (
        <MissionCard key={mission.id} />
      ))}
    </div>
  );
}
export default HomePage;
