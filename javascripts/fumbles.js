var fumbles = [
	{
		title: 'Bullseye!',
		brutality: 5,
		associations: [categories.attackTypes.rangedSling, categories.attackTypes.rangedThrown, categories.attackTypes.rangedBow],
		flavor: 'Really... You must have thought that there was a huge bullseye on your allies\' ass, because that\'s the only way I could explain this failure',
		effect: 'Your ally closest to you takes 1W damage and falls prone.'
	}, 
	{
		title: 'Useless',
		brutality: 2,
		associations: [ categories.damageTypes.fire, categories.attackTypes.rangedSpellSingle, categories.attackTypes.rangedSpellMulti, categories.attackTypes.rangedSpellArea],
		flavor: 'Colonel Mustang in the rain',
		effect: 'Absolutely nothing happens. You don\'t hit any targets and you don\'t apply half damage.'
	}, 
	{
		title: 'Overcoocked',
		brutality: 2,
		associations: [ categories.damageTypes.fire ],
		flavor: 'I don\'t think your allies will ever trust you with fire again. At least, not after lighting their asses on fire.',
		effect: 'Your attack misses. Everyone in a Sphere 2 centered on you takes 1d4 fire damage.'
	}, 
	{
		title: 'Who needs fingers anyway',
		brutality: 4,
		associations: [categories.attackTypes.meleeFineBlades],
		flavor: 'Hasn\t anyone thaught you that you shouldn\t hold a knife by the blade?',
		effect: 'You take 1W damage and 2 ongoing damage (constition save or medicine check ends). You get -2 to attack rolls with weapons for the next 2d10+4 hours.'
	},
	{
		title: 'Party slide',
		brutality: 3,
		associations: [categories.damageTypes.cold],
		flavor: 'Slides are so much fun. Especially when you can get on them with your fellow party members...',
		effect: 'The ground freezes around you in a radius of 30 feet. Anyone in the zone must roll an dexterity (acrobatics) check (DC12) at the start of their turn to avoid falling prone. The zone remains for 2 rounds.'
	}

];

