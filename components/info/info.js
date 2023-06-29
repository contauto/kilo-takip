function Info({height, weight, date, bmi}) {
    return (
        <div>
            {height && <div className="mb-5 border border-black p-5 rounded-full text-xl font-semibold mx-8">
                <span className="text-white">
                    {date}&nbsp;
                </span>
                 tarihinde boyunuz&nbsp;
                <span className="text-white">
                    {height}&nbsp;
                </span>
                 cm, kilonuz&nbsp;
                <span className="text-white">
                    {weight}&nbsp;
                </span>
                 kg ve vücut kitle indeksiniz&nbsp;
                <span className="text-white">
                    {bmi}&nbsp;
                </span>
                 olarak
                hesaplanmıştır.
            </div>}
            {!height && <div className="mb-5 border border-black p-5 rounded-full text-xl font-semibold mx-8">
                Henüz bir veri bulunmamaktadır.
            </div>}
        </div>

    );
}

export default Info;