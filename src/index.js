import "./styles/index.css";
const elevenShieldRecipe = {
	leatherStrips: 2,
	ironIngot: 1,
	refineMoonstone: 4
}


const elvenGountletsRecipe =    {
	...elevenShieldRecipe,
	leather:1,
	refineMoonstone: 32
}
console.log(elevenShieldRecipe);
console.log(elvenGountletsRecipe);
