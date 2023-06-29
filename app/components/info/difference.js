import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import dateUtil from "@/app/util/dateUtil";

function Difference({height, weight, date, bmi}) {
    const isDifference = height.length > 1;
    const [differences, setDifferences] = useState({});

    useEffect(() => {
        if (isDifference) {
            setDifferences({
                height: height[0] - height[1],
                weight: weight[0] - weight[1],
                bmi: bmi[0] - bmi[1],
                date: dateUtil(date[0], date[1]),
            })
        }
    }, [height]);

    return (
        <div>
            {isDifference && <div className="mb-5 border border-black p-5 rounded-full text-xl font-semibold mx-8">
                Boyunuz <span className={classNames({
                "text-red-500": differences.height < 0,
                "text-green-500": differences.height > 0,
            })}>{differences.height} cm</span> {differences.height < 0 ? "kısalma" : "uzama"} göstermiştir.
                Kilonuz <span className={classNames({
                "text-red-500": differences.weight < 0,
                "text-green-500": differences.weight > 0,
            })}>{differences.weight} kg</span> {differences.weight < 0 ? "kaybı" : "artışı"} göstermiştir.
                Vücut kitle indeksiniz <span className={classNames({
                "text-red-500": differences.bmi < 0,
                "text-green-500": differences.bmi > 0,
            })}>{differences.bmi?.toFixed(2)}</span> {differences.bmi < 0 ? "kaybı" : "artışı"} göstermiştir.
                Tarih aralığı <span className={classNames({
                "text-red-500": differences.date < 0,
                "text-green-500": differences.date > 0,
            })}>{differences.date?.toFixed(0)} gün</span> olmuştur.

            </div>}
            {!isDifference && <div className="mb-5 border border-black p-5 rounded-full text-xl font-semibold mx-8">
                Henüz bir veri bulunmamaktadır.
            </div>}
        </div>
    );
}

export default Difference;