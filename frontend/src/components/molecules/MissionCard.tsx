import type { Mission, Information } from "../../services/mission/model";
import {
  missionInfoConfig,
  missionInfoOrder,
} from "../../config/missionInfoConfig";

function MissionCard({ listeMission }: { listeMission: Mission }) {
  return (
    <div className="border border-amber-500 rounded-xs ">
      <div className="bg-amber-500 h-10">
        <h2 className="text-white px-2 text-center font-bold p-2">
          {listeMission.date} {listeMission.hour}
        </h2>
      </div>
      <div className="p-2">
        <div className="border border-gray-200 border-0.5 rounded-xs">
          {(missionInfoOrder as (keyof Information)[]).map((key) => (
            <div
              key={key}
              className="flex flex-row items-center gap-2 border-b border-gray-200 last:border-b-0 p-3"
            >
              <div className="w-6 h-6 flex items-center justify-center text-amber-500">
                {missionInfoConfig[key].icon}
              </div>
              <div className="text-sm">
                {missionInfoConfig[key].label}: {listeMission.informations[key]}
              </div>
            </div>
          ))}
        </div>
        <div className="border border-gray-200 border-0.5 p-2 rounded-xs">
          <div className="px-2 py-1">
            <button className="bg-green-600 w-full p-1 hover:bg-green-500 rounded-xs transition-colors cursor-pointer">
              <span className="text-white font-bold text-center">
                Prendre en charge
              </span>
            </button>
          </div>
          <div className="flex items-center justify-around px-2 py-1 gap-5">
            <button className="bg-amber-500 flex-1 p-1 cursor-pointer rounded-xs">
              <span className="text-white font-semibold text-center">
                Modifier
              </span>
            </button>
            <button className="bg-blue-800 flex-1 p-1 cursor-pointer rounded-xs">
              <span className="text-white font-semibold text-center">
                Afficher
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionCard;
