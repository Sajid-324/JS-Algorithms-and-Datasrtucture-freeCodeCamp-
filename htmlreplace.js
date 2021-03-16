function convertHTML(str) {

  if (0 <= (str.search(/&/))) {
    str = str.replace(/&/g, "&amp;")
  }

  if (0 <= (str.search(/>/))) {
    str = str.replace(/>/g, "&gt;")
  }

  if (0 <= (str.search(/</))) {
    str = str.replace(/</g, "&lt;")
  }

  if (0 <= (str.search(/"/))) {
    str = str.replace(/"/g, "&quot;")
  }

  if (0 <= (str.search(/'/))) {
    str = str.replace(/'/g, "&apos;")
  }


  return (str)
}


convertHTML("&><");
convertHTML("Hamburgers < Pizza < Tacos")