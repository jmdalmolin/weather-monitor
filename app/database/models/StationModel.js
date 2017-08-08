var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DataSchema = new Schema({
    _station_id: Schema.Types.ObjectId, //id from the origin station

    name: Schema.Types.String, //date of collect send from the weather station
    description:  Schema.Types.String, //description

    longitude: {type: Number, min: -180.0, max: 180.0}, //date of storage on the database
    latitude: {type: Number, min: -180.0, max: 180.0}, //degrees Celsius

    termometer: Schema.Types.String, //temperature
    barometer: Schema.Types.String, //pressure
    humidity: Schema.Types.String,  //percentage
    anemometer: Schema.Types.String, //wind_speed
    windsock: Schema.Types.String, //wind_direction
    pluviometer: Schema.Types.String //precipitation
});

module.exports = mongoose.model('Data', DataSchema);