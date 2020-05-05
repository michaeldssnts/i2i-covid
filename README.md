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
        "published": boolean, // True for published widgets, False for hidden widgets
        "country": [], // Array of country iso codes for which the widget is published (default: all countries)
        "summary": "true", // REQUIRED. True if the widget appears in the summary page, possible values: "true" or "false" 
        "weight": "weight_ind", // REQUIRED. Pre-defined parameter to weight calculations (columns in `covid_data[staging|prod]`), possible values: "weight_ind" or "weight_hh"
        "calc": "percentage/average", // REQUIRED. Type of calculation, possible values: "percentage" or "average"
        "exclude_query": [], // REQUIRED. Array of strings or numbers to be excluded from calculations
        "exclude_chart": [], // REQUIRED. Array of strings of options to be excluded from the visualization
        "units": "Lorem ipsum", // REQUIRED. Units to show in the axis, if "currency" unit will be taken from `africa_adm0` table in CARTO
        "gridspace": "one", // REQUIRED. Length of widget over one gird line, possible values: "one" or "half"
        "orientation": "horizontal", // REQUIRED. Orientation of the x-axis of the chart, possible values: "horizontal" or "vertical"
        "category": "", // REQUIRED. Category of the indicator, possible values: "health", "financials", "earnings", "safety", "food security", "demographic"
        "order": int, // REQUIRED. Number that defines the order of the widget
        "category_order": [], // Array of strings with order of categories; if not specified the order will be defined by "sort_by"; i
        "sort_by": "Lorem ipsum" // If no category_order specified, order of categories within widget; if not specified, categories will be sorted by order in "columns" field, possible values: "answer ASC", "answer DESC", "value ASC", "value DESC"
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
    For indicators where unit = currency, currency units will be taken from column "currency_iso" in `africa_adm0` for corresponding country

Type of columns should be text (check that there is no boolean types) for all fields except for:
    type numeric: 'age', 'main_earner_age', 'past_7_days_hours_worked', 'past_7_days_hours_earned', 'price_of_staple', 'price_of_milk', 'price_of_soap',
    'past_30_days_value_of_govt_support', 'value_of_remittances_received', 'value_of_remittances_sent', 'time_spent_caring_for_others',
    'time_spouse_spent_caring_for_others', 'amount_willing_to_pay_for_covid19_vaccine', 'number_of_contacts_with_children',
    'number_of_contacts_with_working_age_adults', 'number_of_contacts_with_elderly', 'past_14_days_religious_group_attendance',
    'amount_willing_to_accept_to_stay_home', 'weight_ind', 'weight_hh'
        Ensure numeric fields do not have "NaN" values, use "null" instead.

If you change any value in the columns: `field_name` you should [update the widgets](#widgets) and [categories](#categories) associated.
