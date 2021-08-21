import { useMediaQuery } from "@chakra-ui/react";

export function useBreakpoints() {
  const [sm, md, lg, xl] = useMediaQuery([
    "(min-width: 0px) and (max-width: 480px)",
    "(min-width: 481px) and (max-width: 768px)",
    "(min-width: 769px) and (max-width: 1279px)",
    "(min-width: 1280px)",
  ]);

  return {
    sm,
    md,
    lg,
    xl,
  };
}