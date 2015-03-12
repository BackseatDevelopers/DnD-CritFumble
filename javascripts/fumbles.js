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
		flavor: '&quot;Hey, Lord of the Flames! - Your tail\'s on fire.&quot;',
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
		effect: 'Your attack stops. For 1d8 - your wisdom modifier (minimum 0) turns, you are unable to focus or cast spells'
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
	},
	{
		title: 'Facegrind',
		brutality: 5,
		associations: [],
		flavor: 'You trip over your own feet, causing you to fall down and land painfully flat on your face, leaving you with a horrible-looking set of scars.',
		effect: 'Your attack stops. You fall prone. You take a -2 penalty to charisma for the next 1d4 days.'
	},
	{
		title: 'Strained Muscle',
		brutality: 5,
		associations: [categories.attackTypes.meleeUnarmed, categories.attackTypes.meleeImprovised, categories.attackTypes.meleeFineBlades, categories.attackTypes.meleeMediumBlades, categories.attackTypes.meleeHeavyWeapons, categories.attackTypes.meleeLongWeapons],
		flavor: 'You were hoping to hit the enemy with all your might, but your grotesque movements caused you to strain a muscle instead, causing you to stop your attack mid-strike.',
		effect: 'Your attack stops. You let out a loud scream, drawing the attention of your enemies, and take a -2 penalty to strength for the next 1d4 days.'
	},
	{
		title: 'Ankle Sprain',
		brutality: 5,
		associations: [ ],
		flavor: 'You make a false move, causing you to almost make a nasty fall. You respond quickly by throwing your weight over to the other side, but your ankle cannot handle the weight.',
		effect: 'Your attack stops. You cannot walk this turn. The DM slides you one space. You take a -2 penalty to speed for the next 1d4 days.'
	},
	{
		title: 'Concussion',
		brutality: 5,
		associations: [ categories.attackTypes.meleeSpell, categories.attackTypes.rangedSpellSingle, categories.attackTypes.rangedSpellMulti, categories.attackTypes.rangedSpellArea ],
		flavor: 'As you try to cast a spell, you notice you cannot focus. You try to push past it anyway, causing your spell to literally blow up in your face.',
		effect: 'Your attack stops. You take 2d4 damage. You take a -2 penalty to wisdom for the next 1d4 days.'
	},
	{
		title: 'Sprained Wrist',
		brutality: 5,
		associations: [ categories.attackTypes.rangedBow, categories.attackTypes.rangedSling, categories.attackTypes.rangedThrown, categories.attackTypes.meleeFineBlades ],
		flavor: 'You try to show off by thwirling your weapon as you prepare to attack. You almost drop it, and while desperately trying to save face, you sprain your wrist.',
		effect: 'Your attack stops. You drop your weapon. You take a -2 penalty to dexterity for the next 1d4 days.'
	},
	{
		title: 'Crack',
		brutality: 4,
		associations: [ categories.attackTypes.meleeFineBlades, categories.attackTypes.meleeLongWeapons, categories.attackTypes.meleeMediumBlades, categories.attackTypes.meleeHeavyWeapons ],
		flavor: 'You hit your enemy, but in a very poorly executed way, causing serious damage to your weapon.',
		effect: 'Your attack hits but only deals half damage. Until the weapon is repaired, it is cracked, causing it\'s damage die to decrease by one size.'
	},
	{
		title: 'Expose Opening',
		brutality: 4,
		associations: [ categories.attackTypes.meleeUnarmed, categories.attackTypes.meleeImprovised, categories.attackTypes.meleeSpell, categories.attackTypes.meleeFineBlades, categories.attackTypes.meleeMediumBlades, categories.attackTypes.meleeHeavyWeapons, categories.attackTypes.meleeHeavyWeapons ],
		flavor: 'You hit your enemy, but you make some miscalculations, exposing yourself to enemy attack in the process.',
		effect: 'Your attack hits and deals normal damage. All enemies adjacent to you get an opportunity attack with advantage.'
	},
	{
		title: 'Show weakness',
		brutality: 4,
		associations: [ ],
		flavor: 'You fumble your attack, and to top it off, you clearly display your weak spot to the enemy.',
		effect: 'Your attack misses. (do apply miss effects). The next enemy that targets you with an attack scores an automatic critical hit (extra effects apply).'
	},
	{
		title: 'Static Discharge',
		brutality: 3,
		associations: [ categories.damageTypes.lightning ],
		flavor: 'You make a bunch of mistakes and end up nearly casting the spell on yourself. You can sizzle it just in time, but not without consequences.',
		effect: 'Your attack stops. You and all adjacent creatures are affected by Static Discharge until the end of the encounter. While you are, whenever you take damage, take 1d4 extra lightning damage.'
	}
];

