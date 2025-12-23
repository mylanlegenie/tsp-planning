import type { ReactNode } from "react";
import TruckIcon from "../icons/TruckIcon";
import { UserRoundPlusIcon } from "../icons/UserRoundPlus";
import { HistoryIcon } from "../icons/HistoryIcon";
import { CalendarCheckIcon } from "../icons/CalendarCheckIcon";
import { CalendarDaysIcon } from "../icons/CalendarIcon";
import { ChartSplineIcon } from "../icons/StatisticalIcon";
interface MenuListProps {
  id: number;
  name: string;
  link: string;
  iconLink: ReactNode;
}

function MenuList({ isOpen }: { isOpen: boolean }) {
  const liste: MenuListProps[] = [
    {
      id: 1,
      name: "Mes Courses",
      link: "/courses",
      iconLink: <TruckIcon />,
    },
    {
      id: 2,
      name: "Courses à affecter",
      link: "/affectation",
      iconLink: <UserRoundPlusIcon className="text-white" />,
    },
    {
      id: 3,
      name: "Historique",
      link: "/historique",
      iconLink: <HistoryIcon className="text-white" />,
    },
    {
      id: 4,
      name: "Missions",
      link: "/missions",
      iconLink: <CalendarCheckIcon className="text-white" />,
    },
    {
      id: 5,
      name: "Dispatch",
      link: "/dispatch",
      iconLink: <CalendarDaysIcon className="text-white" />,
    },
    {
      id: 6,
      name: "Statistiques",
      link: "/statistiques",
      iconLink: <ChartSplineIcon className="text-white" />,
    },
  ];
  if (!isOpen) return null;

  return (
    <ul className="bg-blue-950 flex flex-col gap-6 px-8 py-4 w-3xs h-[95vh]">
      {liste.map((item) => (
        <li key={item.id} className="flex flex-row gap-2">
          <a
            href={item.link}
            className="flex flex-row gap-2 items-center hover:opacity-80"
          >
            {item.iconLink}
            <span className="text-white">{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
export default MenuList;
