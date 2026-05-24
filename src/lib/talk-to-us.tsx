import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface TalkToUsContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const TalkToUsContext = createContext<TalkToUsContextValue | null>(null);

export function TalkToUsProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);
  return (
    <TalkToUsContext.Provider value={value}>{children}</TalkToUsContext.Provider>
  );
}

export function useTalkToUs() {
  const ctx = useContext(TalkToUsContext);
  if (!ctx) throw new Error("useTalkToUs must be used within TalkToUsProvider");
  return ctx;
}
