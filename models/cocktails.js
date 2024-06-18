const cocktails = [
	{
        name: 'Old Fashioned',
        tools: [],
        glass: 'Rocks Glass',
        method: 'Stir & Strain',
        pourChoice:
            {
                bourbon: '',
                amount: '2 oz'
            },
        otherIngredients:
            [
                {
                    ingredient: 'Sugar',
                    amount: '1 tsp'
                },
                {
                    ingredient: 'Angostura Bitters',
                    amount: '3 dashes'
                },
                {
                    ingredient: 'Water',
                    amount: '1 tsp'
                }
            ],
        garnish: 'Orange Twist',
        classic: true,
        funFact: ''
    },
	{
        name: 'Whiskey Sour',
        tools: [],
        glass: 'Rocks Glass (Over Ice) or Coupe (Without Ice)',
        method: 'Shake & Strain',
        pourChoice: 
            {
                bourbon: '',
                amount: '2 oz'
            },
        otherIngredients:
            [
                {
                    ingredient: 'Fresh Lemon Juice',
                    amount: '¾ oz'
                },
                {
                    ingredient: 'Simple Syrup',
                    amount: '½ oz'
                },
                {
                    ingredient: 'Egg White',
                    amount: '½ oz'
                }
            ],
        garnish: 'Angostura Bitters',
        classic: true,
        funFact: ''
    },
	{
        name: 'Mint Julep',
        tools: [],
        glass: 'Julep Cup OR Rocks Glass',
        method: 'Muddle & Stir',
        pourChoice: 
            {
                bourbon: '',
                amount: '2 oz'
            },
        otherIngredients:
            [
                {
                    ingredient: 'Mint',
                    amount: '8 Leaves'
                },
                {
                    ingredient: 'Simple Syrup',
                    amount: '¼ oz'
                }
            ],
        garnish: 'Mint Sprig',
        classic: true,
        funFact: ''
    },
	{
        name: 'Boulevardier',
        tools: [],
        glass: 'Rocks Glass',
        method: 'Stir & Strain',
        pourChoice: 
            {
                bourbon: '',
                amount: '1¼ oz'
            },
        otherIngredients:
            [
                {
                    ingredient: 'Campari',
                    amount: '1 oz'
                },
                {
                    ingredient: 'Sweet Vermouth',
                    amount: '1 oz'
                }
            ],
        garnish: 'Orange Twist',
        classic: true,
        funFact: ''
    },
	{
        name: 'Paper Plane',
        tools: [],
        glass: 'Coupe',
        method: 'Shake & Strain',
        pourChoice: 
            {
                bourbon: '',
                amount: '¾ oz'
            },
        otherIngredients:
            [
                {
                    ingredient: 'Aperol',
                    amount: '¾ oz'
                },
                {
                    ingredient: 'Amaro Nonino Quintessentia',
                    amount: '¾ oz'
                },
                {
                    ingredient: 'Lemon Juice',
                    amount: '¾ oz'
                }
            ],
        garnish: 'Small Paper Plane',
        classic: false,
        funFact: ''
    }
]

module.exports = cocktails