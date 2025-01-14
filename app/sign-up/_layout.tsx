import { Redirect, Stack, usePathname } from "expo-router";
import { useWizard } from "@/data/hooks/useWizard";

export default function StackLayout() {
  const pathname = usePathname();
  const { step } = useWizard();

  console.log(step);

  if (step === 0 && pathname !== "/sign-up") {
    return <Redirect href="/login" />;
  }

  if (step === 1 && pathname !== "/sign-up/2") {
    return <Redirect href="/sign-up/2" />;
  }

  if (step === 2 && pathname !== "/sign-up/3") {
    return <Redirect href="/sign-up/3" />;
  }

  return <Stack />;
}
