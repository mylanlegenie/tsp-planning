import type { ReactNode } from "react";
import type { Information } from "../services/mission/model";
import { UserIcon } from "../components/icons/UserIcon";
import { LogoutIcon } from "../components/icons/LogOutIcon";
import PhoneIcon from "../components/icons/PhoneIcon";
import { FolderOpenIcon } from "../components/icons/FolderOpenIcon";
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
    icon: <LogoutIcon className="text-green-500" />,
  },
  arrivalAddress: {
    label: "Adresse d'arrivée",
    icon: <LogoutIcon className="text-red-500 rotate-180" />,
  },
  dossierNumber: {
    label: "Dossier n°",
    icon: <FolderOpenIcon className="text-blue-500" />,
  },
  name: {
    label: "Client",
    icon: <UserIcon />,
  },
  phoneNumber: {
    label: "Téléphone",
    icon: <PhoneIcon className="text-blue-500" />,
  },
};
