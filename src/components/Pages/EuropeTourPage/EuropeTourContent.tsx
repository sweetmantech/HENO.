import RecBar from "../../RecBar"
import list from "./tourlist.json"

const EuropeTourContent = ({ isPopup = false }) => (
  <div className="p-[5px] md:p-[10px] border-[2px] border-gray_1 h-full">
    <div
      className={`border-[1px] border-darkgray text-gray_1 font-dresden 
      py-[25px] text-center
      flex flex-col gap-4 items-center justify-center text-[16px] relative h-full
      text-[12px] md:text-[16px]`}
    >
      <div
        className={`relative z-[1] w-full h-[80%] overflow-y-auto text-[12px] md:text-[16px]
        px-[15px] md:px-[20px] flex flex-col gap-y-[5px] ${
          isPopup ? "md:gap-y-[10px]" : "md:gap-y-[20px]"
        }`}
      >
        {list.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className="flex justify-between">
            <div className="text-xs md:text-sm w-fit">
              <p className="text-left text-xs">{new Date(item.startDate).toLocaleString()}</p>
              <p className="text-left text-xs">{`${item.location.address.addressLocality}, ${item.location.address.addressCountry}`}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-end md:items-center">
              <button
                className="border text-xs md:text-sm px-2"
                onClick={() => window.open(item.offers[0].url, "_blank")}
                type="button"
              >
                Tickets
              </button>
              <button
                className="border text-xs md:text-sm px-2"
                onClick={() => window.open(item.url, "_blank")}
                type="button"
              >
                RSVP
              </button>
            </div>
          </div>
        ))}
      </div>
      <RecBar cctvNumber={3} />
    </div>
  </div>
)

export default EuropeTourContent
