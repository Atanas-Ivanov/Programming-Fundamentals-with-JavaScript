function foreignLanguage(country) {
  switch (country) {
    case "USA":
    case "England":
      console.log("English");
      break;
    case "Spain":
      console.log("Spanish");
      break;
    case "Argentina":
    case "Mexico":
      console.log("Spanish");
      break;
    default:
      console.log("unknown");
  }
}
foreignLanguage("USA");
