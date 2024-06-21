import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from "react"

export interface ChildrenProps {
  children: ReactNode
}

type PageContextType = {
  isModalOpen : boolean
  setIsModalOpen: Dispatch <SetStateAction<boolean>>;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export function PageWrapper({ children } : ChildrenProps ) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const pageValue = useMemo(() => ({
    isModalOpen, setIsModalOpen,
  }), [
    isModalOpen, setIsModalOpen,
  ]);

  return (
    <PageContext.Provider value={pageValue}>
      {children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('Context is undefined');
  }
  return context;
}
