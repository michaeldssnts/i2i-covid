[Introduction of the project]

## How to install and develop

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Pending to complete]

## How to upload the data

Data to be appended to ´covid_datas[taging|prod]`, set privacy as "public with link".

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
		"title": "Title of the widget", // REQUIRED. Title of the widget.
		"hint": "Lorem ipsum", // A small description you can add to explain to add more context to the widget
        "summary": "true", // REQUIRED. True if the widget appears in the summary page, possible values: "true" or "false" 
        "weight": "weight_ind", // REQUIRED. Pre-defined parameter to weight calculations (columns in `covid_data[staging|prod]`), possible values: "weight_ind" or "weight_hh"
        "calc": "percentage/average", // REQUIRED. Type of calculation, possible values: "percentage" or "average"
        "gridspace": "one", // REQUIRED. Length of widget over one gird line, possible values: "one" or "half"
        "orientation": "horizontal", // REQUIRED. Orientation of the x-axis of the chart, possible values: "horizontal" or "vertical"
        "category": "", // REQUIRED. Category of the indicator, possible values: "", "", ...
		"columns": [], // Array of strings with column names (i2i_metadata_[staging|prod])
		"chart": "bar" // Type of chart, possible values: "single-bar", "multiple-bar", "stacked-bar", "multiple-stacked-bar", or "line"
	},
	...
}
```

### Indicators (Data on charts)

You can edit the name of the indicators (data on charts). You have to edit `covid_metadata_[staging|prod]` table in the carto's account.
Indicators have associated labels and units in `covid_metadata_[staging|prod]`.
    For indicators with one response, multiple options, labels will be all unique values in indicator column in `covid_data_[staging|prod]`
    For indicators with multiple response, multiple options, labels will be taken from `covid_metadata_[staging|prod]`
    For indicators where unit = currency, currency unit will be taken from column "currency_iso" in `africa_adm0` for corresponding country

Type of columns should be text (check that there is no boolean types) for all fields except for:
    type date: "update_date
    type numeric: "past7dayshoursearned", "past7dayshoursworked", "priceofstaple", "priceofmilk", "priceofsoap", "timespentcaringforothers", "amountwillingtoaccepttostayhome", "timespousespentcaringforothers", "amountwillingtopayforcovid19vaccine",
        "age", "main_age", "past30daysvalueofgovt.support", "valueofremittancessent", "valueofremittancesreceived, "numberofcontactswithchildren", "numberofcontactswithworkingageadults", "numberofcontactswithelderly", "past14daysreligiousgroupattendance",
        "weight_hh", "weight_ind".
        Ensure numeric fields do not have "NaN" values, use "null" instead.

Undefined default values: "N/A", "nan", "-1", "REFUSED".

If you change any value in the columns: `field_name` you should [update the widgets](#widgets) and [categories](#categories) associated.

