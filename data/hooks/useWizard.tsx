import { useAtom, atom } from "jotai";

const wizardAtom = atom<number>(0);

const useWizard = () => {
  const [wizardStep, setWizardStep] = useAtom(wizardAtom);

  const nextStep = () => {
    setWizardStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setWizardStep((prev) => prev - 1);
  };

  const complete = async () => {
    setWizardStep(0);
  };

  const reset = async () => {
    setWizardStep(0);
  };

  const step = wizardStep;

  return { nextStep, complete, step, reset, previousStep };
};

export { useWizard };
