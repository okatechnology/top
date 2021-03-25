import { HamburgerButton } from '@atoms/HamburgerButton';
import { ButtonToSectionGroup } from '@molecules/ButtonToSectionGroup';
import { MainSectionInfo } from '@templates/indexTemplate.core';
import { useCallback } from 'react';
import { useSpMenuModal } from '../context/useSpMenuModal';

interface SpMenuModal {
  mainSectionInfo: MainSectionInfo[];
  buttons: React.ReactNode;
}
export const MordalForSP: React.VFC<SpMenuModal> = (props) => {
  const { isSpMenuModalOpen, setIsSpMenuModalOpen } = useSpMenuModal();

  const handleDisplayButtonClick = useCallback(() => {
    setIsSpMenuModalOpen((curr) => !curr);
  }, [setIsSpMenuModalOpen]);

  return (
    <MordalForSPPresentational
      {...props}
      isDisplayed={isSpMenuModalOpen}
      handleDisplayButtonClick={handleDisplayButtonClick}
    />
  );
};

interface MordalForSPPresentationalProps extends SpMenuModal {
  isDisplayed: boolean;
  handleDisplayButtonClick: () => void;
}
const MordalForSPPresentational: React.VFC<MordalForSPPresentationalProps> = ({
  mainSectionInfo,
  buttons,
  isDisplayed,
  handleDisplayButtonClick,
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
            isAtSpMenuModal={true}
          />
          {buttons}
        </div>
      </div>
    </div>
  </>
);
