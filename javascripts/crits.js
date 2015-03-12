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
		effect: 'Your spell deals damage as normal. Choose one target hit by your current spell. All enemies in a sphere 1 around the target are automatically hit (again) by your spell.'
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
		title: 'Alchemical Sniper',
		brutality: 2,
		associations: [ categories.damageTypes.acid ],
		flavor: 'You are the master of targeting. Even limbs are not a problem for you. In this case, you make the target dance so fiercely Michael Jackson himself turns over in his grave.',
		effect: 'You roll full damage twice and use the best result. The target must either move one square (provoking opportunity attacks) or take an additional 2d6 acid damage.'
	},
	{
		title: 'Acid Fountain',
		brutality: 2,
		associations: [ categories.damageTypes.acid ],
		flavor: 'Upon striking your target, your acid is sprayed all over the enemies behind them.',
		effect: 'You roll full damage twice and use the best result. All enemies in a cone 5 behind the original take 1d4 acid damage.'
	},
	{
		title: 'Ice Mastery',
		brutality: 3,
		associations: [ categories.damageTypes.cold ],
		flavor: 'You manage to get that little extra out of your attack, pestering your target even more than you already should have.',
		effect: 'You roll full damage twice and use the best result. All nemies in a sphere 1 centered on the target are slowed for one round. Gain +2 damage for all cold spells until the end of this encounter.'
	},
	{
		title: 'Frostburn',
		brutality: 5,
		associations: [ categories.damageTypes.cold ],
		flavor: 'Somehow, your target really pissed you off. You decide treat your enemy to a taste of your versatility.',
		effect: 'You roll full damage twice and use the best result. You may cast any fire-based attack or spell at your disposal on the target as a free action.'
	},
	{
		title: 'Divine Roasting',
		brutality: 4,
		associations: [ categories.damageTypes.fire ],
		flavor: 'Your skills have curried the favor of divine onlookers and they lend you their help.',
		effect: 'You roll full damage twice and use the best result. The target takes ongoing damage 3 (fire) and every time it does, you are healed for 3 hit points.'
	},
	{
		title: 'Immolation',
		brutality: 5,
		associations: [ categories.damageTypes.fire ],
		flavor: 'Mastery of fire isn\'t easy, but from time to time, inspiration bubbles up and you want to test it immediately, this is such time.',
		effect: 'You roll full damage twice and use the best result. For one round, the target is affected by immolation, which deals 5 ongoing fire damage to it, and to all enemies adjacent to it. You can sustain this effect as a bonus action.'
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
		title: 'Thundering Echo',
		brutality: 2,
		associations: [ categories.damageTypes.thunder ],
		flavor: 'Your thunder leaves the enemy confused and disoriented, and that\'s not even the worst of it!',
		effect: 'You roll full damage twice and use the best result. The target is deafened. Until the end of the encounter, whenever any thunder ability is used or activated, the target takes 2 damage.'
	},
	{
		title: 'Soft Spot',
		brutality: 2,
		associations: [ categories.attackTypes.meleeFineBlades ],
		flavor: 'You aim for the soft spot and cut through your target like butter, finishing off with a nasty twist of your blade, just before you pull it out.',
		effect: 'You roll full damage twice and use the best result. Add 2d4 for the twist.'
	},
	{
		title: 'Savage Strike',
		brutality: 3,
		associations: [ categories.attackTypes.meleeMediumBlades ],
		flavor: 'Your strike out with great strength, cutting deep into the body of your target..',
		effect: 'You roll full damage twice and use the best result. If the target has blood, it bleeds for 2d4 ongoing damage at the start of its turn (medicine check DC20 ends).'
	},
	{
		title: 'Brutal Strike',
		brutality: 3,
		associations: [ categories.attackTypes.meleeHeavyWeapons ],
		flavor: 'Your strike out with the rage of a bear, putting all of your weight into your strike and landing a blow of great impact.',
		effect: 'You roll full damage twice and use the best result. You may move the target up to one square in any direction, provoking opportunity attacks as normal except from you.'
	},
	{
		title: 'Whirling Cleave',
		brutality: 3,
		associations: [ categories.attackTypes.meleeLongWeapons ],
		flavor: 'Your strike slices through the target with great ease, allowing you to pivot and spin.',
		effect: 'You roll full damage twice and use the best result. All other targets in range of your weapon take half as much damage.'
	},
	{
		title: 'Body of Steel',
		brutality: 3,
		associations: [ categories.attackTypes.meleeUnarmed ],
		flavor: 'You flex all your muscles, putting all your weight into quick and deadly blow to the target and strengthening your overall physique.',
		effect: 'You roll full damage twice and use the best result. Increase your strength or dexterity modifier by 1 until the end of the encounter.'
	},
	{
		title: 'Lady Luck',
		brutality: 2,
		associations: [],
		flavor: 'Lady Luck smiles and frowns upon you at the same time. She steals your luck today, but gives it back with intrest.',
		effect: '<strong>You deal damage as normal.</strong> The next time a monster would crit you, it fumbles instead, or the next time you would fumble, you crit instead (which ever happens first).'
	},
	{
		title: 'Arcane Resourcefulness',
		brutality: 1,
		associations: [ categories.damageTypes.force ],
		flavor: 'You have the knowledge of magic at your disposal. Your innate talent allows you to spice things up a little and create new things.',
		effect: 'You roll full damage twice and use the best result. You may change your spell to include any damage types of your choice.'
	},
	{
		title: 'Arcane Resourcefulness',
		brutality: 1,
		associations: [ categories.damageTypes.force ],
		flavor: 'You have the knowledge of magic at your disposal. Your innate talent allows you to spice things up a little and create new things.',
		effect: 'You roll full damage twice and use the best result. You may change your damage types of your choice.'
	},
	{
		title: 'The great wall',
		brutality: 4,
		associations: [ categories.damageTypes.force ],
		flavor: 'You manage to use the remnant power from your spell to create an interesting effect.',
		effect: 'You roll full damage twice and use the best result. The target\'s space and up to two adjacent unoccupied tiles become transculent walls which enemies cannot traverse, but allies can move through freely. These walls give partial cover to allies.'
	},
	{
		title: 'Soul Syphon',
		brutality: 4,
		associations: [ categories.attackTypes.meleeSpell ],
		flavor: 'When you touch the target to cast your spell upon them, you drain the target\'s very soul.',
		effect: 'You roll full damage twice and use the best result. If the target is a spellcaster, it is unable to focus or cast spells for 1d4 rounds. Otherwise, they take an additional 2d6 spirit damage.'
	},
	{
		title: 'Fully Charged',
		brutality: 3,
		associations: [ categories.damageTypes.lightning ],
		flavor: 'Somehow the enemy acts like a battery, a little extra juice might do something interesting.',
		effect: 'You roll full damage twice and use the best result. The next time the target is hit by a Lightning attack he explodes doing 2d6 damage to all enemies in a Circle 1 centered on them.'
	},
	{
		title: 'Improvisation',
		brutality: 3,
		associations: [ categories.attackTypes.meleeImprovised ],
		flavor: 'Bonus points for improvisation to you, good sir!',
		effect: 'Instead of 1d4, roll 3d20 for damage.'
	},
	{
		title: 'Not the knee!',
		brutality: 2,
		associations: [ categories.attackTypes.rangedThrown ],
		flavor: 'You throw your weapon straight into their kneecap, hampering their movement and hurting them like hell!',
		effect: 'You roll full damage twice and use the best result. The target has its speed reduced by half.'
	},
	{
		title: 'Mammonite',
		brutality: 5,
		associations: [ categories.attackTypes.rangedSling ],
		flavor: '&quot;Fuck it&quot;',
		effect: 'You roll full damage twice and use the best result. You can spend up to 50gp on this attack. For each 5gp you spend, add 1d8 to the damage (roll these only once).'
	},
	{
		title: 'Cupid',
		brutality: 2,
		associations: [ categories.attackTypes.rangedBow ],
		flavor: 'You fire an arrow straight into the heart of your enemy, causing it to become delusional and fall in love with you.',
		effect: 'You roll full damage twice and use the best result. The target becomes charmed.'
	},
	{
		title: 'Empowered Explosion',
		brutality: 1,
		associations: [ categories.attackTypes.rangedSpellArea ],
		flavor: 'You draw inspiration from your successes, improving your results across the board.',
		effect: 'You roll full damage twice and use the best result. All targets hit by this attack take an additional 1d6 damage.'
	},
	{
		title: 'Double Take',
		brutality: 3,
		associations: [ categories.attackTypes.rangedSpellMulti ],
		flavor: 'Your aim is focussed and true. Even when you thought you\'d missed for sure, your projectiles turn around to haunt their targets once again.',
		effect: 'You roll full damage twice and use the best result. Re-roll any attacks on targets missed by this ability.'
	},
	{
		title: 'Encore',
		brutality: 3,
		associations: [ categories.attackTypes.rangedSpellSingle ],
		flavor: 'You cast your spell brutally and without mercy. Afterwards, you keep the spell clearly in your mind, as if it\'s begging to be cast again.',
		effect: 'You roll full damage twice and use the best result. During your next turn, you may cast this spell again without spending any spell slots and with advantage.'
	},
	{
		title: 'Blood Magic',
		brutality: 5,
		associations: [ categories.attackTypes.rangedSpellArea ],
		flavor: 'You increase the potency of your spell at the cost of your own well-being, essentially using your personal spirit power to bolster the damage dealt.',
		effect: 'You roll full damage twice and use the best result. You may expend any amount of hit dice. If you do, roll them and add twice the value to your damage for all targets hit by this spell.'
	},
	{
		title: 'Life Drain',
		brutality: 2,
		associations: [ categories.attackTypes.rangedSpellSingle ],
		flavor: 'Your target\'s pain is your pleasure.',
		effect: 'You roll full damage twice and use the best result. You regain life equal to half the damage you deal.'
	},
	{
		title: 'Illusory Feint',
		brutality: 3,
		associations: [ categories.damageTypes.psychic ],
		flavor: 'You invade your target\'s mind, muddling their perception and mixing in your illusion.',
		effect: 'You roll full damage twice and use the best result. You create an illusion in an unoccupied space within 5 spaces of you. At the start of its turn, the target must make a DC15 wisdom saving throw or be compelled to do anything in its power to attack the illusion until it is dispelled. When the illusion takes damage, it is dispelled. It has your defences and cannot take any actions.'
	},
	{
		title: 'Magic Conduct',
		brutality: 2,
		associations: [ categories.attackTypes.rangedSpellArea ],
		flavor: 'You leave traces in the stuff of magic, allowing other spells to be easily channeled through them.',
		effect: 'You roll full damage twice and use the best result. Until the end of the encounter, the area of your spell becomes affected by "Magic Conduct". Anyone inside of this area grants advantage when targeted by a spell, and has a disadvantage on saving throws for spells.'
	},
	{
		title: 'Magic Conduct',
		brutality: 2,
		associations: [ categories.attackTypes.rangedSpellArea ],
		flavor: 'You leave traces in the stuff of magic, allowing other spells to be easily channeled through them.',
		effect: 'You roll full damage twice and use the best result. Until the end of the encounter, the area of your spell becomes affected by "Magic Conduct". Anyone inside of this area grants advantage when targeted by a spell, and has a disadvantage on saving throws for spells.'
	},
	{
		title: 'Uppercut',
		brutality: 2,
		associations: [ categories.attackTypes.meleeUnarmed ],
		flavor: 'You use all your might to send your target flying.',
		effect: 'You roll full damage twice and use the best result. You push the target a number of spaces equal to your strength modifier.'
	},
	{
		title: 'Low Kick',
		brutality: 2,
		associations: [ categories.attackTypes.meleeUnarmed ],
		flavor: 'You make a feint with your fist, but decide to go for a low kick instead, knocking the target off its feet.',
		effect: 'You roll full damage twice and use the best result. The target falls prone.'
	},
	{
		title: 'Five-Point-Palm Exploding Heart',
		brutality: 5,
		associations: [ categories.attackTypes.meleeUnarmed ],
		flavor: 'The target is affected by the five-point-palm exploding heart technique.',
		effect: 'You roll full damage twice and use the best result. If the target moves three or more spaces, its heart explodes and it dies instantaneously. The target must succeed on a DC25 consitution or history check to be aware of this effect.'
	},
	{
		title: 'Warrior\'s Repose',
		brutality: 3,
		associations: [ categories.attackTypes.meleeMediumBlades, categories.attackTypes.meleeHeavyWeapons, categories.attackTypes.meleeLongWeapons, categories.attackTypes.meleeUnarmed ],
		flavor: 'You find peace and tranquility in the middle of chaos and destruction.',
		effect: 'You roll full damage twice and use the best result. You regain the use of one hit die. You may spend it as a free action.'
	},
	{
		title: 'Cutpurse',
		brutality: 2,
		associations: [ categories.attackTypes.meleeFineBlades ],
		flavor: 'You notice that some of the enemy\'s valuables are dangling not too far away from their weak spot and decide to allow your blade a little detour.',
		effect: 'You roll full damage twice and use the best result. You cut open a secret stash of valuables. To determine the value, roll a number of d10 equal to the target\'s challenge rating and multiply by a modifier set by the DM (default 10).'
	},
	{
		title: 'Acid Pool',
		brutality: 2,
		associations: [ categories.damageTypes.acid ],
		flavor: 'You produce more acid than needed for the attack, leaving some of it to drip on the ground, creating a small pool of acid.',
		effect: 'You roll full damage twice and use the best result. The target\'s location becomes the origin of a cube 1 for one round. Any non-flying enemy starting their turn in this cube must make a DC15 dexterity check or take 5 acid damage. You can sustain this effect as a bonus action.'
	},
	{
		title: 'Set - Up',
		brutality: 3,
		associations: [ categories.attackTypes.meleeUnarmed, categories.attackTypes.meleeFineBlades, categories.attackTypes.meleeMediumBlades, categories.attackTypes.meleeHeavyWeapons, categories.attackTypes.meleeImprovised ],
		flavor: 'You strike your enemy fiercely and move in a way that makes it easy for you to anticipate it\'s next move.',
		effect: 'You roll full damage twice and use the best result. Until the start of your next turn, if the enemy takes any action, you ar granted an attack of opportunity.'
	},
	{
		title: 'Boomerang',
		brutality: 4,
		associations: [ categories.attackTypes.rangedThrown ],
		flavor: 'You throw your weapon in a way that you are certain it will return to you, and it turns out even better than you had anticipated.',
		effect: 'You roll full damage twice and use the best result. At the beginning of your next turn, make an additional attack (no action) against the target. If it hits, the target takes damage equal to half the damage you did earlier. Either way, if you succeed a DC10 dexterity check, your weapon returns to your hand.'
	},
	{
		title: 'Radiant Glow',
		brutality: 3,
		associations: [ categories.damageTypes.radiant ],
		flavor: 'You make a glorious radiant attack. Inspired by the warm glow emanating from you, your allies are inspired to fight on.',
		effect: 'You roll full damage twice and use the best result. Each ally that can see you regains the use of one hit die.' 
	},
	{
		title: 'Radiant Protection',
		brutality: 4,
		associations: [ categories.damageTypes.radiant ],
		flavor: 'Your righteous strike of radiance creates an outflow of radiant power, protecting you and your allies by shining brightly into the eyes of your enemies.',
		effect: 'You roll full damage twice and use the best result. For the next 1d4 rounds, all allies within 50ft of you are granted partial cover.' 
	},
	{
		title: 'Fatal Blow',
		brutality: 4,
		associations: [ categories.attackTypes.meleeUnarmed, categories.attackTypes.meleeSpell, categories.attackTypes.meleeHeavyWeapons, categories.attackTypes.rangedSpellSingle, categories.attackTypes.meleeImprovised ],
		flavor: 'With raw power, you overwhelm your enemy, knocking them out instantly.',
		effect: 'You roll full damage twice and use the best result. The enemy is knocked unconscious for a full day.' 
	},
	{
		title: 'Disarming Strike',
		brutality: 3,
		associations: [ categories.attackTypes.meleeUnarmed, categories.attackTypes.meleeFineBlades, categories.attackTypes.meleeMediumBlades, categories.attackTypes.meleeHeavyWeapons, categories.attackTypes.meleeHeavyWeapons ],
		flavor: 'The enemy parries your attack, but you simply break through their guard, damaging it in the process.',
		effect: 'You roll full damage twice and use the best result. Any weapon the enemy would naturally use to parry is broken and un-usable. If there is no weapon to parry with, the attack deals double damage.'
	},
	{
		title: 'Nimble feet',
		brutality: 3,
		associations: [ categories.attackTypes.meleeFineBlades, categories.attackTypes.meleeUnarmed, categories.attackTypes.meleeLongWeapons, categories.attackTypes.meleeSpell, categories.attackTypes.meleeImprovised ],
		flavor: 'You dance around your enemy like a cat around a mouse, confusing it and finding the perfect opportunity for a strike.',
		effect: 'You roll full damage twice and use the best result. You may shift two spaces and move unhindered through the enemy space as if it were an ally.'
	},
	{
		title: 'Create Opportunity',
		brutality: 3,
		associations: [ categories.attackTypes.meleeFineBlades, categories.attackTypes.meleeUnarmed, categories.attackTypes.meleeLongWeapons, categories.attackTypes.meleeSpell, categories.attackTypes.meleeImprovised ],
		flavor: 'Your attack carves a path for others to follow.',
		effect: '<strong>You roll your damage as normal.</strong> The next attack any ally makes vs this target is an automatic critical hit (don\'t roll), you may random a new extra effect for this new critical hit.'
	},
	{
		title: 'Ice, Ice, Baby!',
		brutality: 4,
		associations: [ categories.damageTypes.cold ],
		flavor: '&quot;Cookin\' MCs like a pound of bacon&quot;',
		effect: '<strong>You roll your damage as normal.</strong> You may rap about this in-character. If you do, the target gets so burned that you deal the same damage again as fire damage.'
	},
	{
		title: 'MC Hammer',
		brutality: 4,
		associations: [ categories.attackTypes.meleeHeavyWeapons ],
		flavor: '&quot;Can\'t touch this!&quot;',
		effect: 'You roll full damage twice and use the best result. You taunt all enemies adjacent to you and get a +5 bonus to AC until the end of your next turn.'
	},
	{
		title: 'Sword Magic',
		brutality: 4,
		associations: [ categories.attackTypes.meleeMediumBlades ],
		flavor: 'You time your attack perfectly with your ally, creating a beautiful combo attack.',
		effect: 'You roll full damage twice and use the best result. The ally you are most friendly with automatically hits your target with a cantrip he or she can cast.'
	},
	{
		title: 'Bait and Switch',
		brutality: 3,
		associations: [ ],
		flavor: 'You synchronize your attack and movement with a nearby ally, covering eachother\'s backs.',
		effect: 'You roll full damage twice and use the best result. You and the ally closest to you are now in sync. Whenever either of you is targetted by an attack, and adjacent to the other, you may trade places as a free action (no opportunities triggered). If you do, the attack now targets the other person.'
	},
	{
		title: 'Provocative Strike',
		brutality: 3,
		associations: [ categories.attackTypes.meleeFineBlades, categories.attackTypes.meleeMediumBlades, categories.attackTypes.meleeLongWeapons, categories.attackTypes.meleeHeavyWeapons, categories.attackTypes.meleeImprovised ],
		flavor: 'You strike out at your enemy, taunting them with harsh words.',
		effect: 'You roll full damage twice and use the best result. You and the ally closest to you are now in sync. Whenever either of you is targetted by an attack, and adjacent to the other, you may trade places as a free action (no opportunities triggered). If you do, the attack now targets the other person.'
	},
	{
		title: 'Know Your Enemy',
		brutality: 3,
		associations: [ categories.attackTypes.meleeFineBlades, categories.attackTypes.meleeMediumBlades, categories.attackTypes.meleeLongWeapons, categories.attackTypes.meleeHeavyWeapons, categories.attackTypes.meleeImprovised ],
		flavor: 'As you rain down pain upon your enemy, you remember some wise words from a book and decide to start paying very close attention to your partner.',
		effect: 'You roll full damage twice and use the best result. Until the end of this encounter, you have advantage against this target.'
	},
	{
		title: 'Power to the People!',
		brutality: 3,
		associations: [ categories.damageTypes.lightning ],
		flavor: 'You master the lightning and cook up a side effect for your allies.',
		effect: 'You roll full damage twice and use the best result. Until the end of this encounter, whenever your allies deal damage to an enemy, they add 2 lightning damage.'
	},
	{
		title: 'Shock armor',
		brutality: 3,
		associations: [ categories.damageTypes.lightning ],
		flavor: 'You know how to handle lightning, and are even able to tap its strength to create a barrier.',
		effect: 'You roll full damage twice and use the best result. Choose yourself or one ally within 15ft of you. They gain +1 to AC and, when they are hit, deal 1d4 damage to their attacker.'
	},
	{
		title: 'Thriller!',
		brutality: 4,
		associations: [ categories.damageTypes.necrotic ],
		flavor: 'Through the power of death and the life thereafter, you are able to perform some quaint feats.',
		effect: 'You roll full damage twice and use the best result. If, during this encounter, the target is killed by necrotic damage, it comes on to life for one turn, under your control. It deals only half damage in this state.'
	},
	{
		title: 'Necroshield',
		brutality: 3,
		associations: [ categories.damageTypes.necrotic ],
		flavor: 'Your enemies (and probably some of your allies) are appalled by your display of necromastery, making them reluctant to attack you.',
		effect: 'You roll full damage twice and use the best result. Until the end of this turn, enemies try to avoid you as much as they can. Enemies cannot willingly move closer to you and have disadvantage on any attacks.'
	}
];