import { ButtonToSection, ButtonToSectionProps } from '@atoms/ButtonToSection';
import React, { useMemo, VFC } from 'react';
import { useWorkModal } from '../context/useWorkModal';
import { MainSectionInfo } from '../templates/indexTemplate.core';

interface ButtonToSectionGroupProps {
  mainSections: MainSectionInfo[];
}
export const ButtonToSectionGroup: VFC<ButtonToSectionGroupProps> = (props) => {
  const { mainSections } = props;
  const { setWorkModal } = useWorkModal();

  const dataOfButtonToSection = useMemo<ButtonToSectionProps[]>(
    () =>
      mainSections.map<ButtonToSectionProps>((sectionRef) => ({
        onClick: () => {
          sectionRef.ref.current?.scrollIntoView({ behavior: 'smooth' });
          setWorkModal(undefined);
        },
        sectionName: sectionRef.name,
      })),
    [mainSections, setWorkModal],
  );

  return (
    <ButtonToSectionGroupPresentational
      {...props}
      dataOfButtonToSection={dataOfButtonToSection}
    />
  );
};

interface ButtonToSectionGroupPresentationalProps {
  dataOfButtonToSection: ButtonToSectionProps[];
}
const ButtonToSectionGroupPresentational: VFC<ButtonToSectionGroupPresentationalProps> = ({
  dataOfButtonToSection,
}) => (
  <div className="grid gap-2 justify-items-center">
    {dataOfButtonToSection.map(({ onClick, sectionName }) => (
      <ButtonToSection
        key={sectionName}
        onClick={onClick}
        sectionName={sectionName}
      />
    ))}
  </div>
);
