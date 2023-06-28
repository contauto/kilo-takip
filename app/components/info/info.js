import React from 'react';

function Info({height, weight, date, bmi}) {
    return (
        <div>
            {height && <div className="mb-5 border border-black p-5 rounded-full text-xl font-semibold mx-8">
                {date} tarihinde boyunuz {height} cm, kilonuz {weight} kg ve vücut kitle indeksiniz {bmi} olarak
                hesaplanmıştır.
            </div>}
            {!height && <div className="mb-5 border border-black p-5 rounded-full text-xl font-semibold mx-8">
                Henüz bir veri bulunmamaktadır.
            </div>}
        </div>

    );
}

export default Info;