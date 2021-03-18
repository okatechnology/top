import { ButtonAtPageTop } from '@atoms/ButtonAtPageTop';
import { SlideSwitch } from '@atoms/SlideSwitch';
import { useRouter } from 'next/dist/client/router';
import { useCallback, VFC } from 'react';
import { intoTypedLocale } from 'src/utils/utilFunctions';

interface ToggleLanguageButtonProps {}
export const ToggleLanguageButton: VFC<ToggleLanguageButtonProps> = (props) => {
  const currLocale = intoTypedLocale(useRouter().locale);
  const router = useRouter();
  const toggleLocale = useCallback(() => {
    void router.push(router.pathname, router.pathname, {
      locale: { ja: 'en', en: 'ja' }[currLocale],
    });
  }, [currLocale, router]);

  return (
    <ToggleLanguageButtonPresentational
      {...props}
      currLocale={currLocale}
      handleClickButton={toggleLocale}
    />
  );
};

interface ToggleLanguageButtonPresentationalProps
  extends ToggleLanguageButtonProps {
  currLocale: LocaleName;
  handleClickButton: () => void;
}
const ToggleLanguageButtonPresentational: VFC<ToggleLanguageButtonPresentationalProps> = ({
  currLocale,
  handleClickButton,
}) => (
  <ButtonAtPageTop
    contents={
      <div className="grid grid-cols-3-max items-center justify-center gap-2">
        <span className="flex items-center justify-center w-8">JP</span>
        <SlideSwitch on={currLocale === 'en'} />
        <span className="flex items-center justify-center w-8">EN</span>
      </div>
    }
    onClick={handleClickButton}
  />
);