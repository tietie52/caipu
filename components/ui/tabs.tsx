export const Tabs = ({ defaultValue, children }: { defaultValue: string; children: React.ReactNode }) => (
  <div data-orientation="horizontal" className="tabs">
    {children}
  </div>
);