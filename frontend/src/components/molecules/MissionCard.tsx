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
              className="flex flex-row items-center gap-2 border-b border-gray-200 last:border-b-0 px-2 py-1"
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
      </div>
    </div>
  );
}

export default MissionCard;
