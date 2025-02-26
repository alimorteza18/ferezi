import { useRef, useState } from "react";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import "./BottomSheetComponent.scss";

const BottomSheetComponent = (props: any) => {
  const { showBottomSheet, setShowBottomSheet } = props;
  const sheetRef = useRef<any>();

  const [open, setOpen] = useState(true);

  return (
    // <div className="w-2/4">
      <BottomSheet
        open={showBottomSheet}
        ref={sheetRef}
        onDismiss={() => setShowBottomSheet(false)}
        // blocking={false}
        // the first snap points height depends on the content, while the second one is equivalent to 60vh
        // snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight / 0.6]}
        // Opens the largest snap point by default, unless the user selected one previously
        // defaultSnap={({ lastSnap, snapPoints }) =>
        //   lastSnap ?? Math.max(...snapPoints)
        // }
      >
        {/* <button
        onClick={() => {
          // Full typing for the arguments available in snapTo, yay!!
          sheetRef.current.snapTo(({ maxHeight }:any) => maxHeight);
        }}
      > */}
        {props.children}
        {/* </button> */}
      </BottomSheet>
    // </div>
  );
};
export default BottomSheetComponent;
