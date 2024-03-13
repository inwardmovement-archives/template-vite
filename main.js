import Alpine from "./node_modules/alpinejs/dist/module.esm.js"

tailwind.config = {
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  darkMode: "class",
  important: true,
}

Alpine.data("app", () => ({ count: 0 }))

Alpine.start()
