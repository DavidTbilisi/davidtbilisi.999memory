let data = new Spreadsheet("https://docs.google.com/spreadsheets/d/e/2PACX-1vS10GP6UZce7OnDwB-bJUB41S0HN960T21VAfqB5ejjUiL45MLkXVRShLsr1VRqv8MYH27hln-r2OQ6/pub?gid=1733257343&single=true&output=csv")
let data_arr = data.array();

console.log(data_arr)