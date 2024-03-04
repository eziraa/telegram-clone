import { Overlay } from "./Overlay";
import { Fragment } from "react/jsx-runtime";
interface Props {
  displayItemIndex: number;
  handleDisplayNone: () => void;
}

const list_of_calls = [
  "94859892528",
  "94859892528",
  "94859892528",
  "94859892528",
  "94859892528",
  "94859892528",
  "94859892528",
  "948598925",
  "948598925",
  "9485989354",
];
export const Calls = ({ displayItemIndex, handleDisplayNone }: Props) => {
  const colors = [
    "#0ff000",
    "#928524",
    "#98aa45",
    "#98aaf5",
    "#f8aa45",
    "#abb78e",
    "#ee845a",
    "#ee4583",
    "#eeb583",
    "#ee4583",
    "#ee45f3",
    "#fe0f03",
    "#0040f0",
    "#febf03",
    "#f980f0",
  ];
  return (
    <Fragment>
      <Overlay display={displayItemIndex == 3} toggleMenu={handleDisplayNone} />
      <div
        className={`calls-container ${
          displayItemIndex !== 3 && "calls-container--hidden"
        }`}
      >
        <div className="calls__header">
          <p className="calls__header__text">Calls</p>
        </div>

        <div className="calls__list">
          {/* {list_of_calls.map((call, index) => {
            return (
              <div className="call">
                <div
                  className="call__profile"
                  style={{
                    backgroundColor: colors[index],
                  }}
                >
                  {call[index]}
                </div>
                <div className="call__info">{call}</div>
              </div>
            );
          })} */}
        </div>
        <div className="calls__footer">
          <button className="btn btn-close" onClick={handleDisplayNone}>
            Close
          </button>
        </div>
      </div>
    </Fragment>
  );
};
