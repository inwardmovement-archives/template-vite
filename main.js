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

document.addEventListener("alpine:init", () => {
  Alpine.data("app", function () {
    return {
      count: 0,
    }
  })
})
