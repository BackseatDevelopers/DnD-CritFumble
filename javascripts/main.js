$(document).ready(function() {
	var categoryTemplate = $(".category.template").clone().removeClass("template");
	var optionTemplate = $(".option.template").clone().removeClass("template");

	var categoryContainer = $(".categories");
	for(var categoryName in categories) {
		var category = categories[categoryName];

		var categoryElement = categoryTemplate.clone();
		categoryElement.find(".description").text(category.description);
		categoryElement.data("name", categoryName);
		categoryElement.appendTo(categoryContainer);

		var optionContainer = categoryElement.find(".options");
		for(var optionName in category) {
			if(optionName === "description" || optionName ==="color")
				continue;
			var option = category[optionName];

			var optionElement = optionTemplate.clone();
			optionElement.find(".description").text(option.description);
			optionElement.find(".tagline").text(option.tagline);
			optionElement.css("background-color", option.color);
			optionElement.data("name", optionName);
			optionElement.appendTo(optionContainer);
		}
	}
	
	$("button.crit").click(function() {
		var associations = getAssociations();

		var associatedCrits = getAssociatedItems(crits, associations);
		if(!associatedCrits || !associatedCrits.length)
			associatedCrits = getAssociatedItems(crits, []);

		var randomCrit = associatedCrits[Math.floor(Math.random() * associatedCrits.length)];
		console.log(randomCrit);
	});

	function getAssociations() {		
		var associations = [];		
		var checkedOptions = $(".option :checked");

		for(categoryName in categories) {
			var category = categories[categoryName];
			
			checkedOptions.each(function() {
				var checkedOption = $(this);
				if(checkedOption.parents(".category").data("name") === categoryName) {
					var categoryOption = category[checkedOption.parents(".option").data("name")];
					associations.push(categoryOption);
				}
			});
		}

		return associations;
	}

	function getAssociatedItems(sourceItems, soughtAssociations) {
		var associatedItems = [];
		for(var i = 0; i < sourceItems.length; i++) {
			var sourceItem = sourceItems[i];
			if(!sourceItem.associations)
				associatedItems.push(sourceItem);
			
			for(var j = 0; j < sourceItem.associations.length; j++) {
				var sourceItemAssociation = sourceItem.associations[j];
				
				for(var k = 0; k < soughtAssociations.length; k++) {
					var soughtAssociation = soughtAssociations[k];

					// the more associated an item is, the more times it gets added
					// thus it has a higher chance of getting chosen (which is good)
					if(soughtAssociation === sourceItemAssociation)
						associatedItems.push(sourceItem);
				}
			}
		}
		return associatedItems;
	}
});