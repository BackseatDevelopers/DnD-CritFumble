$(document).ready(function() {
	var categoryTemplate = $(".category.template").clone().removeClass("template");
	var optionTemplate = $(".option.template").clone().removeClass("template");

	var categoryContainer = $(".categories");
	for(var categoryName in categories) {
		var category = categories[categoryName];

		var categoryElement = categoryTemplate.clone();
		categoryElement.find(".description").text(category.description);
		categoryElement.data("category", category);
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
			optionElement.data("option", option);
			optionElement.appendTo(optionContainer);
		}
	}
	
	$("button.crit").click(function() {
		
	});
});