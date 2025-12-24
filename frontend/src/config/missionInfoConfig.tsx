import type { ReactNode } from "react";
import type { Information } from "../services/mission/model";
import TruckIcon from "../components/icons/TruckIcon";
import { CalendarDaysIcon } from "../components/icons/CalendarIcon";
import { UserRoundPlusIcon } from "../components/icons/UserRoundPlus";

export const missionInfoOrder: (keyof Information)[] = [
  "departureAddress",
  "arrivalAddress",
  "dossierNumber",
  "name",
  "phoneNumber",
];

export const missionInfoConfig: Record<
  keyof Information,
  {
    label: string;
    icon: ReactNode;
  }
> = {
  departureAddress: {
    label: "Adresse de départ",
    icon: <TruckIcon />,
  },
  arrivalAddress: {
    label: "Adresse d'arrivée",
    icon: <TruckIcon />,
  },
  dossierNumber: {
    label: "Dossier n°",
    icon: <CalendarDaysIcon className="text-amber-500" />,
  },
  name: {
    label: "Client",
    icon: <UserRoundPlusIcon className="text-amber-500" />,
  },
  phoneNumber: {
    label: "Téléphone",
    icon: <CalendarDaysIcon className="text-amber-500" />,
  },
};
