import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { Provider } from "../../src/components/ui/provider";
import React from "react";

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}.tsx`),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <Provider>
                <App {...props} />
            </Provider>
        );
    },
});
