import type { LucideIcon } from 'lucide-react';
import { TerminalIcon } from 'lucide-react';

export function create({ icon: Icon }: { icon?: LucideIcon }): JSX.Element {
  return (
    <div className="p-1 bg-gradient-to-b rounded-md border shadow-sm from-secondary">
      {Icon ? <Icon /> : <TerminalIcon />}
    </div>
  );
}
