import { useState } from "react";

export function useGeoLocation() {
  const [isUK, setIsUK] = useState<boolean>(true);

  return { isUK, setIsUK };
}
