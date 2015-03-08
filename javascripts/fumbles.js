var fumbles = [
	{
		title: 'Bad-ass fumble',
		brutality: 5,
		associations: [ categories.attackTypes.meleeFineBlades, categories.attackTypes.meleeMediumBlades ],
		flavor: 'You shove your blade up your ass!',
		effect: 'You die'
	},
	{
		title: 'bullseye...',
		brutality: 5,
		associations: [ categories.attackTypes.meleeFineBlades],
		flavor: 'Really... You must have thought that there was a hugh bullseye on your allies ass, because thats the only way how i can explain this failure',
		effect: 'Closest ally takes 1d6 damage and falls prone'
	}, 
	{
		title: 'Useless',
		brutality: 1,
		associations: [ categories.damageTypes.fire, categories.attackTypes.rangedSpellSingle, categories.attackTypes.rangedSpellMulti, categories.attackTypes.rangedSpellArea],
		flavor: 'Colonel Mustang in the rain',
		effect: 'Absolutely nothing happens'
	}, 
	{
		title: 'overcoocked',
		brutality: 2,
		associations: [ categories.damageTypes.fire],
		flavor: 'I don\'t think your allies will trust you ever again with fire as you just lighted someone\'s ass on fire',
		effect: 'Ally takes 1d4 damage and won\'t be able to sit for a week'
	}, 
	{
		title: 'Who needs fingers anyway',
		brutality: 4,
		associations: [categories.attackTypes.meleeFineBlades],
		flavor: 'Hasn\t anyone thaught you that you shouldn\t hold a knife by the blade?',
		effect: 'You take 1d6 damge and take 2 ongoing damage (constition save or medicine check ends). You get -2 to attack rolls for the next 2d10+4 hours'
	}
];

