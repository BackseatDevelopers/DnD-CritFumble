$(document).ready(function() {
	linkCategories();

	var offscreenCanvas = $(".offscreen-canvas");
	var statisticsContainer = $(".statistics-container");

	linkCategories();

	var category1 = categories.damageTypes;
	var category2 = categories.attackTypes;

	var critCarthesian = createCarthesian(category1, category2, crits);
	var fumbleCarthesian = createCarthesian(category1, category2, fumbles);

	var critTableData = createTableStructureFromCarthesian(critCarthesian);
	var fumbleTableData = createTableStructureFromCarthesian(fumbleCarthesian);

	var critTable = createHtmlTableFromStructure(critTableData);
	var fumbleTable = createHtmlTableFromStructure(fumbleTableData);

	critTable.appendTo(".statistics-container .crits");
	fumbleTable.appendTo(".statistics-container .fumbles");

	function createCarthesian(category1, category2, items) {
		var totallyGenericItems = [];
		var category1GenericItems = {};
		var category2GenericItems = {};
		var nonGenericItems = {};

		for(var i = 0; i < items.length; i++) {
			var item = items[i];
			var category1Associations = [];
			var category2Associations =  [];

			for(var j = 0; j < item.associations.length; j++) {
				var association = item.associations[j];

				if(association.category.name === category1.name) {
					category1Associations.push(association);
				}
				if(association.category.name === category2.name) {
					category2Associations.push(association);
				}
			}

			if(category1Associations.length === 0 && category2Associations.length === 0) {
				totallyGenericItems.push(item);
				continue;
			}

			if(category1Associations.length == 0) {
				for(var j = 0; j < category2Associations.length; j++) {
					var association = category2Associations[j];
					var bucket = category2GenericItems[association.name] || (category2GenericItems[association.name] = []);
					bucket.push(item);
				}
				continue;
			}
			if(category2Associations.length == 0) {
				for(var j = 0; j < category1Associations.length; j++) {
					var association = category1Associations[j];
					var bucket = category1GenericItems[association.name] || (category1GenericItems[association.name] = []);
					bucket.push(item);
				}
				continue;
			}

			for(var j = 0; j < category1Associations.length; j++) {
				var category1Association = category1Associations[j];

				for(var k = 0; k < category2Associations.length; k++) {
					var category2Association = category2Associations[k];

					var category1Bucket = nonGenericItems[category1Association.name] || (nonGenericItems[category1Association.name] = {});
					var category2Bucket = category1Bucket[category2Association.name] || (category1Bucket[category2Association.name] = []);
					category2Bucket.push(item);
				}
			}
		}

		var carthesian = {};
		carthesian.genericItems = totallyGenericItems;
		carthesian.category1Items = category1GenericItems;
		carthesian.category2Items = category2GenericItems;
		carthesian.nonGenericItems = nonGenericItems;
		carthesian.category1 = category1;
		carthesian.category2 = category2;

		return carthesian;
	}

	function createTableStructureFromCarthesian(carthesian) {
		var tableStructure = [];

		var tableRow = 0;
		var tableColumn = 0;

		tableStructure[tableRow] = [""];
		for(var category2OptionName in filterCategoryOptions(carthesian.category2)) {
			var category2Option = carthesian.category2[category2OptionName];
			tableStructure[tableRow][++tableColumn] = category2Option.description;
		}
		tableStructure[tableRow][++tableColumn] = "Generic";

		for(var category1OptionName in filterCategoryOptions(carthesian.category1)) {
			var category1Option = carthesian.category1[category1OptionName];
			tableStructure[++tableRow] = [];
			tableStructure[tableRow][tableColumn = 0] = category1Option.description;

			for(var category2OptionName in filterCategoryOptions(carthesian.category2)) {
				var category2Option = carthesian.category2[category2OptionName];
				++tableColumn;
				tableStructure[tableRow][tableColumn] = 0;
				if(carthesian.nonGenericItems[category1OptionName] && carthesian.nonGenericItems[category1OptionName][category2OptionName]) {
					tableStructure[tableRow][tableColumn] = carthesian.nonGenericItems[category1OptionName][category2OptionName].length;
				}
			}
			tableStructure[tableRow][++tableColumn] = (carthesian.category1Items[category1OptionName] || []).length;
		}

		tableStructure[++tableRow] = ["Generic"];
		tableColumn = 0;
		for(var category2OptionName in filterCategoryOptions(carthesian.category2)) {
			var category2Option = carthesian.category2[category2OptionName];
			tableStructure[tableRow][++tableColumn] = (carthesian.category2Items[category2OptionName] || []).length;
		}

		tableStructure[tableRow][++tableColumn] = carthesian.genericItems.length;

		return tableStructure;
	}

	function createHtmlTableFromStructure(tableData) {
		var table = $("<table></table>");
		for(var i = 0; i < tableData.length; i++) {
			var row = $("<tr></tr>");
			row.appendTo(table);
			for(var j = 0; j < tableData[i].length; j++) {
				var cell = $("<td></td>");
				cell.text(tableData[i][j]);
				cell.appendTo(row);
			}
		}
		return table;
	}

	function filterCategoryOptions(category) {
		var options = {};
		for(var optionName in category) {
			if(optionName === "description" || optionName === "name")
				continue;
			options[optionName] = category[optionName];
		}
		return options;
	}

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