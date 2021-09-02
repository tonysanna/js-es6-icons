const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];


const colors = [
    'blu',
    'orange',
    'purple'
]


  const iconsContainer = document.getElementById('icons');

//   console.log(iconsContainer);

// iconsContainer.innerHTML = '';

const coloredArray = colorIcons(icons, colors);
console.log(coloredArray);
print(coloredArray, iconsContainer);



function print(array, container) {
    container.innerHTML = '';


array.forEach((element) => {
    // console.log(element.name);
    const {name, color, family, prefix} = element;
    iconsContainer.innerHTML += `
    <div>
                <i class="${family} ${prefix + name}" style="color: ${color}"></i>
                <div class="title">${name.toUpperCase()}</div>
            </div>
    `;
});
};

function colorIcons(array, colors) {
    const types = getTypes(array);
    // console.log(types);
    const coloredArray = array.map((element) => {
        const indexType = types.indexOf(element.type);
        console.log(indexType);

        element.color = colors[indexType];
        return element;

    })
    return coloredArray;
}



function getTypes(array) {
    const types = [];
    
    array.forEach((element) => {
        console.log(element.type);
        if ( types.includes(element.type) == false) {
            types.push(element.type);
        }
    })
     return types;
}