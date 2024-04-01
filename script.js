function toggleMode() {
  var mode = document.documentElement //pega o HTML ROOT
  mode.classList.toggle("light")
  //funcao TOGGLE faz o que esse IF faria:
  // if (mode.classList.contains("light")) {
  //   mode.classList.remove("light")
  // } else {
  //   mode.classList.add("light")
  // }
}
