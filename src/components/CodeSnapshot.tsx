import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import CodeBadge from "./CodeBadge";
import { truncateAddress } from "../utils/address";
import { MRI } from "../utils/constants";
import { applyFilter, useFilterReducer } from "../reducer/FilterReducer";

interface CodeSnapshotProps {
  snapshot: number;
  impliedValue: number;
}

export default function CodeSnapshot({
  snapshot,
  impliedValue,
}: CodeSnapshotProps) {
  const [records, setRecords] = useState<CodeSnapshotItem[]>([]);
  const [filter] = useFilterReducer()

  const fetchRecords = useCallback(async () => {
    const response = await axios.get(
      "https://qsdsidvanljpkcqgksuo.supabase.co/functions/v1/morcodes/codes/snapshot/" +
        snapshot
    );
    setRecords(response.data.filter((x: CodeSnapshotItem) => x.weight));
  }, [snapshot]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const filteredRecords = applyFilter(records, filter)

  return (
    <div className="mb-12">
      <div className="mb-4">
        <div className="text-2xl">Snapshot {snapshot}</div>
        {impliedValue > 0 && <div>Implied Value: {impliedValue}$</div>}
      </div>

      {filteredRecords.map((record, i) => (
        <div className="bg-gray-800 rounded p-4 mb-4" key={i}>
          {Boolean(record.mri) && (
            <div className="font-bold mb-1 overflow-ellipsis">
              MRI {record.mri}: {MRI[record.mri || 0]}
            </div>
          )}

          <div className="mb-2" style={{ overflowWrap: "break-word" }}>
            {record.description}
          </div>
          <div className="text-xs mb-3 text-gray-300">
            From: {truncateAddress(record.walletAddress)}
          </div>

          <div className="flex flex-wrap gap-3">
            <CodeBadge>
              {record.weight.toLocaleString("en-US")} Weight
            </CodeBadge>

            {record.impliedValue > 0 && (
              <CodeBadge>
                {parseInt(record.impliedValue.toFixed(0)).toLocaleString(
                  "en-US"
                )}
                $ Implied
              </CodeBadge>
            )}

            {record.mriSecondary > 0 && (
              <CodeBadge>
                Secondary MRI {record.mriSecondary}
              </CodeBadge>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
