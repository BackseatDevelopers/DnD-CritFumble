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
	},
	{
		title: 'Cid',
		brutality: 3,
		associations: [categories.damageTypes.fire],
		flavor: '&quot;Hey, Lord of the Flames! - Your tail\'s on fire.',
		effect: 'Roll damage as normal, your attack hits yourself for half damage. Subsequent targets (if any) are not affected. You take ongoing fire damage 1 at the start of each turn until the end of the encounter, or until you spend a move action to put out the flames. If you take 2 or more damage like this during the encounter, consider your wardrobe ruined.'
	},
	{
		title: 'How Emberassing!',
		brutality: 3,
		associations: [categories.damageTypes.psychic],
		flavor: 'Attempting to invade the mind of another, you manage to succesfully invade that of yourself, bringing back the memories of that one time you peed your pants in public and ran through town, leaving behind a trail of both filth and humiliation.',
		effect: 'Roll damage as normal, your attack hits yourself for half damage. The memories distract you, and you grant advantage to all enemie for one turn. Enemies tend to notice this and are more likely to target you.'
	},
	{
		title: 'Spell Reverse',
		brutality: 5,
		associations: [categories.attackTypes.rangedSpellSingle],
		flavor: 'You make a rather huge mistake in your spell, transfering energy to the enemy rather than hurting them.',
		effect: 'Roll damage as normal, the target regains this much hitpoints instead.'
	},
	{
		title: 'Spellbreak',
		brutality: 4,
		associations: [categories.attackTypes.rangedSpellSingle, categories.attackTypes.rangedSpellMulti, categories.attackTypes.rangedSpellArea],
		flavor: 'You make a mistake and become annoyed and frustrated. You cannot seem to shake that mistake off lightly.',
		effect: 'Your attack doesn\'t happen, don\'t apply any effects. For 1d8 - your wisdom modifier (minimum 0) turns, you are unable to focus or cast spells'
	},
	{
		title: 'Wide Swing',
		brutality: 4,
		associations: [categories.attackTypes.meleeMediumBlades, categories.attackTypes.meleeHeavyWeapons, categories.attackTypes.meleeLongWeapons],
		flavor: 'You swing wide in an arc, and the target easily dodges your attack. Any unsuspecting allies near you, however, might not be so lucky.',
		effect: 'You miss the target. If there are any allies within weapon range, the DM picks one and it takes the full damage of your attack. Otherwise, the DM must choose a new enemy within range (if any) as the new target of your attack. re-roll the attack on the new target to whether yo hit or not.'
	},
	{
		title: 'Stop hitting yourself!',
		brutality: 3,
		associations: [categories.attackTypes.meleeUnarmed],
		flavor: 'You miss your swing, lose balance, and effectively punch yourself in the face.',
		effect: 'You miss the target. You take 1d4 + your strength modifier damage. Roll (don\'t spend) any available hit die. If you roll less than the damage you took you fall prone.'
	}
];

