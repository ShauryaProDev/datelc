import DateInput from "./DateInput";
import StatsGrid from "./StatsGrid";
import { calculateDateStats } from "../utils/dateUtils";
import { useMemo, useState } from "react";

function Tools() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const result = useMemo(() => {
    if (!startDate || !endDate) return null;

    return calculateDateStats(startDate, endDate);
  }, [startDate, endDate]);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 pb-6 pt-10">
      <section className="rounded-2xl bg-white p-5">
        <div className="mb-5">
          <h2 className="geist-title text-2xl tracking-tight text-zinc-900">
            Date Difference Calculator
          </h2>

          <p className="geist-body mt-1 text-sm text-zinc-500">
            Select two dates to calculate exact time differences instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <DateInput
            label="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <DateInput
            label="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        {result && (
          <div className="mt-5">
            <StatsGrid result={result} />

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-blue-600 p-4 text-white">
                <h3 className="geist-title text-xl">{result.totalHours}</h3>

                <p className="geist-body mt-1 text-sm text-blue-100">
                  Total Hours
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-600 p-4 text-white">
                <h3 className="geist-title text-xl">{result.totalMinutes}</h3>

                <p className="geist-body mt-1 text-sm text-emerald-100">
                  Total Minutes
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Tools;
