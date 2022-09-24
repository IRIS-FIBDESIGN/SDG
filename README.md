# SDG-App

### Customize configuration
All text and data in website are in `json` folder.
Please don't change the structure of json files, it'll break the website.

## All
The `id` in `topGoals` & `allGoals` data, referencing the `ID` of a goal in `SDG.json`

## country
In targets there are 3 parts: `data`,`nodes`,`info`

### Data
In `data` section connect `nodes` to each other.
##### Structure: 
```json
{
  "from": "id of node 1",
  "to":"id of node 2",
  "weight": "must be number"
}
```
##### Example: 
* acceptable:
```json
{
  "from":"SDG",
  "to":"one",
  "weight": 15
}
```
* not acceptable
```json
{
  "from":"SDG",
  "to":"one",
  "weight": "15"
}
```

### Nodes
In `nodes` section define nodes.
* Structure:
```json
{
  "id": "this will be use in data section and needs to have no space",
  "name":"the label that showing on chart",
  "color":"color of node in hex"
}
```
#### regional
* In `value>name of region>links` you can define as much `income` you want. these links can be disabled by setting `true` the `disabled` section. the value of these incomes are in `value` section next to the `links`.
