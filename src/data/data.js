import hierarchy from "./hierarchy.json"
const d3 = require("d3-hierarchy")


const hierarchyData = () => {
  const regions = d3.hierarchy(hierarchy)
    .sum(() => 1)
    .sort((a, b) => b.value - a.value)
  const pack = d3.pack()
    .size([1600, 1600])
    .padding(3)
  return pack(regions)
}

export {
  hierarchyData
}