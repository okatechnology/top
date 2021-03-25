import { ButtonToSection, ButtonToSectionProps } from '@atoms/ButtonToSection';
import React, { useMemo, VFC } from 'react';
import { useSpMenuModal } from '../context/useSpMenuModal';
import { useWorkModal } from '../context/useWorkModal';
import { MainSectionInfo } from '../templates/indexTemplate.core';

interface ButtonToSectionGroupProps {
  mainSections: MainSectionInfo[];
  isAtSpMenuModal: boolean;
}
export const ButtonToSectionGroup: VFC<ButtonToSectionGroupProps> = (props) => {
  const { mainSections } = props;
  const { setWorkModal } = useWorkModal();
  const { setIsSpMenuModalOpen } = useSpMenuModal();

  const dataOfButtonToSection = useMemo<
    Omit<ButtonToSectionProps, 'isAtSpMenuModal'>[]
  >(
    () =>
      mainSections.map((mainSection) => ({
        onClick: () => {
          mainSection.ref.current?.scrollIntoView({ behavior: 'smooth' });
          setWorkModal(undefined);
          setIsSpMenuModalOpen(false);
        },
        sectionName: mainSection.name,
      })),
    [mainSections, setIsSpMenuModalOpen, setWorkModal],
  );

  return (
    <ButtonToSectionGroupPresentational
      {...props}
      dataOfButtonToSection={dataOfButtonToSection}
    />
  );
};

interface ButtonToSectionGroupPresentationalProps
  extends ButtonToSectionGroupProps {
  dataOfButtonToSection: Omit<ButtonToSectionProps, 'isAtSpMenuModal'>[];
}
const ButtonToSectionGroupPresentational: VFC<ButtonToSectionGroupPresentationalProps> = ({
  dataOfButtonToSection,
  isAtSpMenuModal,
}) => (
  <div className="grid gap-2 justify-items-center">
    {dataOfButtonToSection.map(({ onClick, sectionName }) => (
      <ButtonToSection
        key={sectionName}
        onClick={onClick}
        sectionName={sectionName}
        isAtSpMenuModal={isAtSpMenuModal}
      />
    ))}
  </div>
);
