import "./bootstrap";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { Provider } from "../../src/components/ui/provider";
import React from "react";

// Type declaration for Vite's import.meta.glob
declare global {
    interface ImportMeta {
        glob: (
            pattern: string,
            options?: { eager?: boolean }
        ) => Record<string, any>;
    }
}

// Create Inertia App
createInertiaApp({
    title: (title) => `${title} - Purity UI Dashboard`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.tsx", { eager: true });
        return pages[`./Pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <Provider>
                <App {...props} />
            </Provider>
        );
    },
});
