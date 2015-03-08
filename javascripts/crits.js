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
		associations: [ categories.attackTypes.meleeFineBlades, categories.attackTypes.meleeMediumBlades, categories.attackTypes.meleeLongWeapons ],
		flavor: '"Did you just..?" - Yep!',
		effect: 'If the enemy\'s challenge rating is lower than your current level and it has a head, you cut it off cleanly. Otherwise, roll your full damage twice and use the best result.'
	},
	{
		title: 'Bloodlust',
		brutality: 1,
		associations: [],
		flavor: 'You score a critical hit against your opponent. The brutality of the blow makes you hungry for more. You smile wickedly and engage with a lust for blood.',
		effect: 'You roll full damage twice and use the best result. Until your next critical hit, treat your weapon as if it were high crit. If it already is, crit on 18+ instead of 19+ (and so on)'
	},
	{
		title: 'Spare Luck',
		brutality: 3,
		associations: [],
		flavor: 'Just before you attack, for a moment, everything around you slows down as if time itself had stopped... You sense that luck is on your side.',
		effect: 'You either score a critical hit right now (get a new extra effect), or you hit this attack (normally) and score an automatical critical hit on your next attack (no roll required, but you do not get an extra effect)'
	},
	{
		title: 'Spellsplit',
		brutality: 4,
		associations: [ categories.attackTypes.rangedSpellSingle, categories.attackTypes.rangedSpellMulti ],
		flavor: 'You make a small mistake, putting more power in your spell than you can handle. You quickly fix this by splitting the spell instead, equalizing the power surge. Miraculously, it actually works!',
		effect: 'Your spell deals normal damage, all targets are automatically hit. You hit one additional target (same or different) and apply all effects as normal.'
	},
	{
		title: 'Spellblast',
		brutality: 4,
		associations: [ categories.attackTypes.rangedSpellSingle, categories.attackTypes.rangedSpellMulti, categories.attackTypes.meleeSpell, categories.attackTypes.rangedSpellArea ],
		flavor: 'Feeling confident, you decide to warp the very fabric of your spell to become even stronger, enlarging it beyond its normal capacity.',
		effect: 'Your spell deals damage as normal. Choose one target hit by your current spell. Everything in a sphere 1 around the target is automatically hit (again) by your spell.'
	},
	{
		title: 'Intense focus',
		brutality: 3,
		associations: [],
		flavor: 'You focus intently on your attack, bringing forth the best you could while ignoring any distractions around you.',
		effect: 'You roll full damage twice and use the best result. You may add your wisdom modifier and/or enhancement bonus to your damage.'
	},
	{
		title: 'Arcane Agility',
		brutality: 4,
		associations: [ categories.attackTypes.rangedSpellSingle, categories.attackTypes.rangedSpellMulti, categories.attackTypes.meleeSpell, categories.attackTypes.rangedSpellArea ],
		flavor: 'Your spells are cast with great ease, giving you the time to weave in an extra cantrip on the fly',
		effect: 'Your spell deals normal damage. Additionally, you may cast any cantrip you know as a free action.'
	},
	{
		title: 'Arcane Inspiration',
		brutality: 4,
		associations: [ categories.attackTypes.rangedSpellSingle, categories.attackTypes.rangedSpellMulti, categories.attackTypes.meleeSpell, categories.attackTypes.rangedSpellArea ],
		flavor: 'The flow of battle inspires you to greatness. You are able to effortlessly cast your greatest spells.',
		effect: 'Your spell deals damage as normal. Roll a d10. Until the end of this encounter, you are able to cast a spell of that level or lower, for which you have a spell slot, without expending the slot (even if you have already expended that slot).'
	}
]