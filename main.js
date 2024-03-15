import Alpine from "alpinejs"

Alpine.data("app", function () {
  return { count: 530 }
})

Alpine.start()

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
