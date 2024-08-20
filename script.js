const btn = document.getElementById('btn')
const salida = document.getElementById('salida')

const nums = [1, 2, 3, 4, 5, 1, 2, 3]

function duplicates(nums){
    let dups = nums.filter((item, index) => nums.indexOf(item) != index)
    new Set(dups)
    return dups.length
}

btn.addEventListener('click', () => {
    salida.innerHTML = duplicates(nums)
})
