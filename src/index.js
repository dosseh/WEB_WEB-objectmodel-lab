
export const version = () => "1.0.0";
export class Data {

}

export class TimeSeries extends Data {

    constructor(values, labels) {
        super();
        this._values = values;
        this._labels = labels;
    }
    get values() {
        return this._values || [];
    }
    get labels() {
        return this._labels || [];
    }

    static createTimeSeries(createValues, createLabels) {
        return new this(createValues, createLabels);
    }

}

export class Datum extends Data {
    constructor(value) {
        super(value);
        this._value = value;
    }
    get value() {
        return this._value || 0;
    }
    static createDatum(createValue) {
        return new this(createValue);
    }

}

export class Sensor {

    constructor(id, name, data, type) {

        this._id = id;
        this._name = name;
        this._data = data;
        this._type = type;

    }

    get id() {
        return this._id || 0;
    }
    get name() {
        return this._name || "";
    }
    get data() {
        return this._data || {};
    }
    get type() {
        return this._type || "";
    }

    nomberOfValues() { return this._data._values.length; }

    averageValues() { return this._data.length !== 0 ? this._data._values.reduce((a, b) => a + b, 0) / this._data._values.length : 0; }

    latestDateOfMesuring() { return this._data._labels.length !== 0 ? this._data._labels[this._data._labels.length - 1] : ''; }


}


export class Temperature extends Sensor {
    constructor(id, name, data, type) {
        super(id, name, data, type);

    }



    static createTemperature(createId, createName, dataCreate, createType) {
        return new this(createId, createName, dataCreate, createType);
    }
}

export class Door extends Sensor {
    constructor(id, name, data, type) {
        super(id, name, data, type);

    }
    static createDoor(createId, createName, createData, createType) {
        return new this(createId, createName, createData, createType);
    }
}

export class FanSpeed extends Sensor {
    constructor(id, name, data, type) {
        super(id, name, data, type);
    }


    static createFanSpeed(createId, createName, dataCreate, createType) {
        return new this(createId, createName, dataCreate, createType);
    }
}


/*export class Humidity extends Sensor {
    constructor(id, name, data, type) {
        super(id, name, data, type);

    }
    static createHumidity(createId, createName, createData, createType) {
        return new this(createId, createName, createData, createType);
    }
}

export class Light extends Sensor {
    constructor(id, name, data, type) {
        super(id, name, data, type);

    }
    static createLight(createId, createName, createData, createType) {
        return new this(createId, createName, createData, createType);
    }
}

export class Switch extends Sensor {
    constructor(id, name, data, type) {
        super(id, name, data, type);

    }
    static createSwitch(createId, createName, createData, createType) {
        return new this(createId, createName, createData, createType);
    }
}
*/

const Enumeration = function (keys) {
    const enumeration = Object.create(null);
    for (const key of keys) {
        enumeration[key] = key;
    }
    enumeration[Symbol.iterator] = function* () {
        for (const key of keys) {
            yield enumeration[key];
        }
    };
    Object.freeze(enumeration);
    return enumeration;
};


const sensorType = new Enumeration(['TEMPERATURE', 'HUMIDITY', 'LIGHT', 'SWITCH', 'DOOR', 'FAN_SPEED']);

export const typeOfSensor = whitchOne => (sensorType[whitchOne]);


var HashMap = {};
export const fromNameToTypeOfSensor = name => {

    HashMap["Température Bureau"] = "TEMPERATURE";
    HashMap["Sol"] = "HUMIDITY";
    HashMap["Lumiere"] = "LIGHT";
    HashMap["Interrupteur"] = "SWITCH";
    HashMap["Porte du Garage"] = "DOOR";
    HashMap["Ventilateur Ordinateur Bureau"] = "FAN_SPEED";

    var values = [];
    if (HashMap.hasOwnProperty(name)) values.push(HashMap[name]);
    return values.join('');
};