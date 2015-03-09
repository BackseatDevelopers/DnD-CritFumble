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
		title: 'Intense Focus',
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
	},
	{
		title: 'Empowering Upgrade',
		brutality: 2,
		associations: [ categories.attackTypes.rangedSpellSingle, categories.attackTypes.rangedSpellMulti, categories.attackTypes.meleeSpell, categories.attackTypes.rangedSpellArea ],
		flavor: 'You sense an unexpected surge of power, and attempt to direct it into the spell you are casting.',
		effect: 'You roll full damage twice and use the best result. If the spell is capable of being cast from a higher spell slot, you may upgrade your spell one level without having or expending this slot. Otherwise, Add 1d6 damage per plus.'
	},
	{
		title: 'Arcane Precision',
		brutality: 2,
		associations: [ categories.attackTypes.rangedSpellMulti, categories.attackTypes.rangedSpellArea ],
		flavor: 'You cast your spell perfectly and with ease, leaving your enemies wondering what happened.',
		effect: 'You roll full damage twice and use the best result for your current target. You automatically hit all other targets.'
	},
	{
		title: 'Explodination',
		brutality: 2,
		associations: [ categories.attackTypes.rangedSpellArea ],
		flavor: 'With great focus, skill, and precision, you are able to expand your spell\'s range beyond the norm.',
		effect: 'You roll full damage twice and use the best result for your current target. Choose up to one dimension of your spell\'s area. You may increase it to up to twice its original value.'
	},
	{
		title: 'Lord of the flames',
		brutality: 2,
		associations: [ categories.damageTypes.fire ],
		flavor: 'You demonstrate great skill with fire, striking fear into the hearts of all who see it.',
		effect: 'You roll full damage twice and use the best result. Until the end of this encounter, whenever you <strong>target</strong> someone with a fire attack, You may try to intimidate them with advantage as a free action, causing fear on success.'
	},
	{
		title: 'Trauma',
		brutality: 2,
		associations: [ categories.damageTypes.psychic ],
		flavor: 'You invide the target\'s mind, demoralizing it and making it doubt its actions.',
		effect: 'You roll full damage twice and use the best result. Until the end of this encounter, every time the target wants to make an attack, it has to make a DC15 will save before attacking. If it fails, the attack doesn\'t happen'
	},
	{
		title: 'Corrosion',
		brutality: 2,
		associations: [ categories.damageTypes.acid ],
		flavor: 'Your acid is strong and bites deep into the enemy\'s armor, hurting it and making it vulnerable.',
		effect: 'You roll full damage twice and use the best result. Until the end of this encounter, the target takes a -2 penalty to AC and it has disadvantage on all saving throws.'
	},
	{
		title: 'Brain Freeze',
		brutality: 2,
		associations: [ categories.damageTypes.cold ],
		flavor: 'Your cold bites at the enemy, making it difficult for them to think clearly.',
		effect: 'You roll full damage twice and use the best result. Until the end of this encounter, the enemy takes a -1 to speed, and a -3 to dexterity and intelligence (stats, not mods).'
	},
	{
		title: 'Force - A - Nature',
		brutality: 3,
		associations: [ categories.damageTypes.force ],
		flavor: 'The target is overwhelmed by your tremendous show of force, taking damage and flying backwards.',
		effect: 'You roll full damage twice and <strong>add up the results (add modifiers only once)</strong>. The target is pushed one square.'
	},
	{
		title: 'A shocking experience',
		brutality: 3,
		associations: [ categories.damageTypes.lightning ],
		flavor: 'Your lightning sends a loud sound crackling through the air, leaving everyone motionless for a split second. The target is taken by surprise.',
		effect: 'You roll full damage twice and use the best result. The target is stunned for one round.'
	},
	{
		title: 'Necrofester',
		brutality: 3,
		associations: [ categories.damageTypes.necrotic ],
		flavor: 'The necrotic damage leaves a lingering scar on the target. The stains fester and boil.',
		effect: 'You roll full damage twice and use the best result. Until the end of the encounter, the target takes ongoing damage necrotic 1. The target gains vulnerable 2 necrotic.'
	},
	{
		title: 'Paralyzing Venom',
		brutality: 4,
		associations: [ categories.damageTypes.poison ],
		flavor: 'The poison attack infests the target on the inside, making it nauseous and weak. It can feel its power being sapped from the inside.',
		effect: 'You roll full damage twice and use the best result. The target must make a DC18 constitution saving throw or be paralyzed for one round.'
	},
	{
		title: 'Radiance',
		brutality: 3,
		associations: [ categories.damageTypes.radiant ],
		flavor: 'You strike out defiantly at your enemies with the power of radiance. It shines so bright that some of it lingers long after your spell.',
		effect: 'You roll full damage twice and use the best result. Until the end of the encounter, any enemy starting its turn within 15ft of you takes 5 radiant damage. Also, for the next hour, anything within 50ft is lit up as if by a torch.'
	},
	{
		title: 'Thundering echo',
		brutality: 2,
		associations: [ categories.damageTypes.thunder ],
		flavor: 'Your thunder leaves the enemy confused and disoriented, and that\'s not even the worst of it!',
		effect: 'You roll full damage twice and use the best result. The target is deafened. Until the end of the encounter, whenever any thunder ability is used or activated, the target takes 2 damage.'
	}
]