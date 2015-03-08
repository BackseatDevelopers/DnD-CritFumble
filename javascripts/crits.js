var crits = [
	{
		title: 'Culling Blade',
		brutality: 5,
		associations: [categories.attackTypes.meleeMediumBlades, categories.attackTypes.meleeHeavyWeapons],
		flavor: 'You strike your enemy with a very heavy blow to the head.',
		effect: 'You roll your full damage twice and use the best result. If the target would be bloodied after this, it dies instantly (boss monster: deal double damage instead)'
	},
	{
		title: 'Vorpal Strike',
		brutality: 5,
		associations: [ categories.attackTypes.meleeFineBlades, categories.attackTypes.meleeMediumBlades, categories.attackTypes.meleeLongWeapons, categories.damageTypes.cold ],
		flavor: '"Did you just..?" - Yep!',
		effect: 'If the enemy\'s challenge rating is lower than your current level and it has a head, you cut it off cleanly. Otherwise, roll your full damage twice and use the best result.'
	}
]