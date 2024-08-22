"use client";
import { Text } from "@/components/ui/text";
import {
  BottomSheet,
  BottomSheetBackdrop,
  BottomSheetContent,
  BottomSheetDragIndicator,
  BottomSheetItem,
  BottomSheetItemText,
} from "@/components/ui/bottomsheet";
import React from "react";
import { Button, ButtonText } from "@/components/ui/button";

const Home = ({ ...props }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        <ButtonText>Open Bottom Sheet</ButtonText>
      </Button>
      {/* <BottomSheet
        snapPoints={["25%", "90%"]}
        isOpen={isOpen}
        index={0}
        enableDynamicSizing={false}
        onClose={() => {
          setIsOpen(false);
        }}
        backdropComponent={BottomSheetBackdrop}
        handleComponent={BottomSheetDragIndicator}
        {...props}
      >
        <BottomSheetContent>
          <BottomSheetItem>
            <BottomSheetItemText>Item 1</BottomSheetItemText>
          </BottomSheetItem>
          <BottomSheetItem>
            <BottomSheetItemText>Item 2</BottomSheetItemText>
          </BottomSheetItem>
          <BottomSheetItem>
            <BottomSheetItemText>Item 3</BottomSheetItemText>
          </BottomSheetItem>
        </BottomSheetContent>
      </BottomSheet> */}
    </>
  );
};

export default Home;
