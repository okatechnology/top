import { HamburgerButton } from '@atoms/HamburgerButton';
import { ButtonToSectionGroup } from '@molecules/ButtonToSectionGroup';
import { MainSectionInfo } from '@templates/indexTemplate.core';
import { SetStateAction, useCallback, useState } from 'react';

interface MordalForSPProps {
  mainSectionInfo: MainSectionInfo[];
  setShowingWork: React.Dispatch<SetStateAction<number | undefined>>;
  buttons: React.ReactNode;
}
export const MordalForSP: React.VFC<MordalForSPProps> = (props) => {
  const { setShowingWork } = props;
  const [isDisplayed, setIsDisplayed] = useState(false);
  const handleDisplayButtonClick = useCallback(() => {
    setIsDisplayed((curr) => !curr);
  }, []);

  const handleSectionButtonClick = useCallback(() => {
    setIsDisplayed(false);
    setShowingWork(undefined);
  }, [setShowingWork]);

  return (
    <MordalForSPPresentational
      {...props}
      isDisplayed={isDisplayed}
      handleDisplayButtonClick={handleDisplayButtonClick}
      handleSectionButtonClick={handleSectionButtonClick}
    />
  );
};

interface MordalForSPPresentationalProps extends MordalForSPProps {
  isDisplayed: boolean;
  handleDisplayButtonClick: () => void;
  handleSectionButtonClick: () => void;
}
const MordalForSPPresentational: React.VFC<MordalForSPPresentationalProps> = ({
  mainSectionInfo,
  buttons,
  isDisplayed,
  handleDisplayButtonClick,
  handleSectionButtonClick,
}) => (
  <>
    <div className="pc:hidden fixed z-50 top-0 right-0">
      <HamburgerButton
        isOpen={isDisplayed}
        onClick={handleDisplayButtonClick}
      />
    </div>
    <div
      className={`pc:hidden fixed top-0 right-0 bottom-0 left-0 z-40 ${
        isDisplayed ? 'opacity-100' : 'pointer-events-none opacity-0'
      } pc:pointer-events-none top-0 right-0 bottom-0 left-0 transition-opacity duration-200 ease-linear`}
    >
      <div className="flex items-center justify-center overflow-scroll w-full h-full bg-white dark:bg-gray-900 transition-background-color duration-700 ease-linear">
        <div className="grid gap-16 items-center justify-center p-4">
          <ButtonToSectionGroup
            mainSections={mainSectionInfo}
            additionalClickEffect={handleSectionButtonClick}
            isAtModal={true}
          />
          {buttons}
        </div>
      </div>
    </div>
  </>
);
