$(document).ready(function() {
	linkCategories();

	var categoryTemplate = $(".category.template").clone().removeClass("template");
	var optionTemplate = $(".option.template").clone().removeClass("template");

	var offscreenCanvas = $(".offscreen-canvas");
	var categoryContainer = $(".category-container");
	for(var categoryName in categories) {
		var category = categories[categoryName];

		var categoryElement = categoryTemplate.clone();
		categoryElement.find(".description").text(category.description);
		categoryElement.data("name", categoryName);
		categoryElement.appendTo(categoryContainer);

		var optionContainer = categoryElement.find(".option-container");
		for(var optionName in category) {
			if(optionName === "description" || optionName === "color" || optionName === "name")
				continue;
			var option = category[optionName];

			var optionElement = optionTemplate.clone();
			optionElement.find(".description").text(option.description);
			optionElement.find(".tagline").text(option.tagline);	
			optionElement.data("name", optionName);

			(function(innerOption, innerOptionElemnt) {
				var maskImage = new Image();
				maskImage.onload = function() {
					innerOptionElemnt.find(".icon").attr("src", renderMask(maskImage, innerOption.color)).attr("title", innerOption.description);
				}
				maskImage.src = "images/" + option.icon;
			})(option, optionElement);

			optionElement.appendTo(optionContainer);
		}
	}
	
	$("button.crit").click(function() {
		var associations = getAssociations();

		var associatedCrits = getAssociatedItems(crits, associations);
		if(!associatedCrits || !associatedCrits.length)
			associatedCrits = getAssociatedItems(crits, []);

		var randomCrit = associatedCrits[Math.floor(Math.random() * associatedCrits.length)];
		displayResult(randomCrit);
	});
	
	$("button.fumble").click(function() {
		var associations = getAssociations();

		var associatedFumbles = getAssociatedItems(fumbles, associations);
		if(!associatedFumbles || !associatedFumbles.length)
			associatedFumbles = getAssociatedItems(fumbles, []);

		var randomFumble = associatedFumbles[Math.floor(Math.random() * associatedFumbles.length)];
		displayResult(randomFumble);
	});

	$("button.reset").click(function() {
		$(".option :checked").prop("checked", false);
		displayResult(null);
	});

	function linkCategories() {
		for(var categoryName in categories) {
			var category = categories[categoryName];
			category.name = categoryName;
			for(var optionName in category) {
				var option = category[optionName];
				option.name = optionName;
				option.category = category;
			}
		}
	}

	function displayResult(result) {
		if(!result) {
			$(".result").children(".title, .flavor, .effect, .severity").text("");
			$(".result .brutality").removeClass("b1 b2 b3 b4 b5");
			return;
		}
		$(".result .title").html(result.title);
		$(".result .flavor").html(result.flavor);
		$(".result .effect").html(result.effect);
		$(".result .brutality").html(result.brutality)
		$(".result .brutality").removeClass("b1 b2 b3 b4 b5").addClass("b" + result.brutality);
		$("html, body").animate({ scrollTop: $(document).height() }, "fast");
	}

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

	function getAssociatedItems(sourceItems, availableAssociations) {
		var associatedItems = [];
		for(var i = 0; i < sourceItems.length; i++) {
			var sourceItem = sourceItems[i];
			if(!sourceItem.associations) {
				associatedItems.push(sourceItem);
				break;
			}

			var	sourceItemCategorySatisfaction = {};
			
			for(var j = 0; j < sourceItem.associations.length; j++) {
				var sourceItemAssociation = sourceItem.associations[j];

				if(!sourceItemCategorySatisfaction[sourceItemAssociation.category.name]) {
					sourceItemCategorySatisfaction[sourceItemAssociation.category.name] = 0;
				}

				for(var k = 0; k < availableAssociations.length; k++) {
					var availableAssociation = availableAssociations[k];
					if(sourceItemAssociation === availableAssociation) {
						sourceItemCategorySatisfaction[sourceItemAssociation.category.name]++;
					}
				}
			}

			var sourceItemCategoriesAreAllSatisfied = true;
			for(var sourceItemCategoryName in sourceItemCategorySatisfaction) {			
				if(sourceItemCategorySatisfaction[sourceItemCategoryName] === 0) {
					sourceItemCategoriesAreAllSatisfied = false;
					break;
				}
			}

			if(sourceItemCategoriesAreAllSatisfied) {

				// the more categories you satisfy, the more relevant you are
				for(var satisfaction in sourceItemCategorySatisfaction) {	
					associatedItems.push(sourceItem);
				}
				
				// push it at least twice, because it's more relevant than generic, which already gets added once! :)
				associatedItems.push(sourceItem);
			}

		}
		return associatedItems;
	}

	function renderMask(mask, foregroundColor)
	{
		var htmlCanvas = offscreenCanvas[0];
		htmlCanvas.height = mask.height;
		htmlCanvas.width = mask.width;

		var ctx = htmlCanvas.getContext("2d");
		ctx.clearRect ( 0 , 0 , htmlCanvas.width, htmlCanvas.height );

		var composition = ctx.globalCompositeOperation;

		ctx.globalCompositeOperation = "source-over";
		ctx.drawImage(mask, 0, 0);
		ctx.globalCompositeOperation = "source-in";
		ctx.fillStyle = foregroundColor;
		ctx.fillRect(0, 0, mask.width, mask.height);
		
		ctx.globalCompositeOperation = composition;

		return htmlCanvas.toDataURL();
	}
});