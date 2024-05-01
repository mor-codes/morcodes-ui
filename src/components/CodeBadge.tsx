import { ReactNode } from "react";

export default function CodeBadge({ children }: { children: ReactNode }) {
    return (
        <div className="px-3 py-1 rounded-full bg-white text-black text-sm">
            {children}
        </div>
    )
}