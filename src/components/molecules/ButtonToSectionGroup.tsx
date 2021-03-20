import { ButtonToSection, ButtonToSectionProps } from '@atoms/ButtonToSection';
import React, { useMemo, VFC } from 'react';
import { MainSectionInfo } from '../templates/indexTemplate.core';

interface ButtonToSectionGroupProps {
  mainSections: MainSectionInfo[];
  additionalClickEffect: () => void;
  isAtModal: boolean;
}
export const ButtonToSectionGroup: VFC<ButtonToSectionGroupProps> = (props) => {
  const { mainSections, additionalClickEffect } = props;
  const dataOfButtonToSection = useMemo<
    Omit<ButtonToSectionProps, 'isAtModal'>[]
  >(
    () =>
      mainSections.map((sectionRef) => ({
        onClick: () => {
          sectionRef.ref.current?.scrollIntoView({ behavior: 'smooth' });
          additionalClickEffect();
        },
        sectionName: sectionRef.name,
      })),
    [additionalClickEffect, mainSections],
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
  dataOfButtonToSection: Omit<ButtonToSectionProps, 'isAtModal'>[];
}
const ButtonToSectionGroupPresentational: VFC<ButtonToSectionGroupPresentationalProps> = ({
  dataOfButtonToSection,
  isAtModal,
}) => (
  <div className="grid gap-2 justify-items-center">
    {dataOfButtonToSection.map(({ onClick, sectionName }) => (
      <ButtonToSection
        key={sectionName}
        onClick={onClick}
        sectionName={sectionName}
        isAtModal={isAtModal}
      />
    ))}
  </div>
);
