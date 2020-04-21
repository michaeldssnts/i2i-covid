[Introduction of the project]

## How to install and develop

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Pending to complete]

## How to upload the data

### Categories

You can edit the name of tabs (categories) in the country page. You have to edit `covid_categories` table in the carto's account.

If you change a `category_slug` you should [update the widgets](#widgets) associated.

### Widgets

You can edit information for widget editing the file:
[https://github.com/Vizzuality/i2i-covid/edit/develop/src/data/widgets.json](https://github.com/Vizzuality/i2i-covid/edit/develop/src/data/widgets.json)

```
{
	...,
	{
		"slug": "title-of-the-widget", // REQUIRED. A unique slug for widgets, you can use to access a specific widget
		"title": "Title of the widget", // REQUIRED. Title of the widget
		"hint": "Lorem ipsum", // A small description you can add to explain to add more context to the widget
		"columns": [], // Array of strings with column names (i2i_metadata_[staging|prod])
		"chart": "bar" // Type of chart, possible values: "single-bar", "multiple-bar", "stacked-bar" or "line"
	},
	...
}
```

### Indicators (Data on charts)

You can edit the name of the indicators (data on charts). You have to edit `covid_metadata_[staging|prod]` table in the carto's account.

If you change any value in the columns: `field_name` you should [update the widgets](#widgets) and [categories](#categories) associated.
