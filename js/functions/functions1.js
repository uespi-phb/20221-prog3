
function area(width, height) {
    const area = width * height
    if (area < 0)
        return
    return area
}

console.log(area(2, 3))
console.log(area())
console.log(area(2))
console.log(area(2, 3, 4, 5, 6))
console.log(area(2, -3))
