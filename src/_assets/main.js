import "bootstrap/dist/css/bootstrap.min.css"
import "/_assets/main.css"
import Alpine from "alpinejs"
import * as bootstrap from "bootstrap"

Alpine.data("app", function () {
  return {}
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
