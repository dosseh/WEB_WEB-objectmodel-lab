
import { version, Door, TimeSeries, Datum, Temperature, typeOfSensor, FanSpeed, fromNameToTypeOfSensor } from ".";
import { data } from '../resources/sensors_data';

describe('Sensor model tests', () => {
  describe('Dummy tests', () => {
    test('data is loaded with 3 elements', () => {
      expect(data.length).toBe(3);
    });
    test('version number from the model', () => {
      expect(version()).toBe('1.0.0');
    });
  });


  //============================== TEST DE TEMPERATURE DE BUREAU =========================================


  describe('Desktop Temperature tests', () => {


    let references0 = data[0];
    let timeSeriesRight = TimeSeries.createTimeSeries([23, 23, 22, 21, 23, 23, 23, 25, 25], ["2016-10-19T08:00:00.000Z", "2016-10-19T09:00:00.000Z", "2016-10-19T10:00:00.000Z", "2016-10-19T11:00:00.000Z", "2016-10-19T12:00:00.000Z", "2016-10-19T13:00:00.000Z", "2016-10-19T14:00:00.000Z", "2016-10-19T15:00:00.000Z", "2016-10-19T16:00:00.000Z"]);
    let timeSeriesWrong = TimeSeries.createTimeSeries([23, 23, 22, 21], ["2016-10-19T08:00:00.033Z", "2016-10-19T09:00:00.Z00Z", "2016-10-19T10:00:00.000Z", "2016-10-19T11:00:00.000Z", "2016-10-19T12:00:00.000Z", "2016-10-19T13:00:00.000Z", "2016-10-19T14:00:00.000Z", "2016-10-19T15:00:00.000Z", "2016-10-19T16:00:00.100Z"]);
  
    let temperatureRight = Temperature.createTemperature(1234, "Température Bureau", timeSeriesRight, typeOfSensor("TEMPERATURE"));
    let temperatureWrong = Temperature.createTemperature(1344, "Lampe", timeSeriesWrong, typeOfSensor("LIGHT"));
    let temperatureEmpty = Temperature.createTemperature();

    describe(' Temperature tests of id ', () => {

      test('test  with wright parametter', () => {
        expect(temperatureRight.id).toEqual(references0.id);
      });

      test('test  with wrong parametter', () => {
        expect(temperatureWrong.id).not.toEqual(references0.id);
      });

      test('test  with empty parametter', () => {
        expect(temperatureEmpty.id).toBe(0);
      });

      test('test with no Integer containing parametter ', () => {
        expect(temperatureRight.id).toEqual(expect.any(Number));
      });

    });


    describe(' Temperature tests of name ', () => {

      test('test  with wright parametter', () => {
        expect(temperatureRight.name).toEqual(references0.name);
      });

      test('test  with wrong parametter', () => {
        expect(temperatureWrong.name).not.toEqual(references0.name);
      });

      test('test  with empty parametter', () => {
        expect(temperatureEmpty.name).toEqual("");
      });

      test('test with no Integer containing parametter ', () => {
        expect(temperatureRight.name).not.toEqual(expect.any(Number));
      });

    });

    describe(' Temperature tests of type ', () => {

      test('test  with wright parametter', () => {
        expect(temperatureRight.type).toEqual(references0.type);
      });

      test('test  with wrong parametter', () => {
        expect(temperatureWrong.type).not.toEqual(references0.type);
      });

      test('test  with empty parametter', () => {
        expect(temperatureEmpty.type).toEqual("");
      });

      test('test with no Integer containing parametter ', () => {
        expect(temperatureRight.type).not.toEqual(expect.any(Number));
      });

    });

    describe(' Temperature tests of data ', () => {

      test('test with wright parametter', () => {
        expect(temperatureRight.data).toEqual(expect.objectContaining(references0.data));

      });

      test('test  with wrong parametter', () => {
        expect(temperatureWrong.data).not.toEqual(references0.data);
      });

      test('test  with empty parametter', () => {
        expect(temperatureEmpty.data).toEqual({});
      });


      test('test with no Integer containing parametter ', () => {
        expect(temperatureRight.data).not.toEqual(expect.any(Number));
      });
    });

    describe(' Temperature tests of parametters of data ', () => {

      describe(' tests of data\'s values ', () => {

        test('test  with wright parametter', () => {
          expect(temperatureRight.data.values).toEqual(references0.data.values);
        });

        test('test  with wrong parametter', () => {
          expect(temperatureWrong.data.values).not.toEqual(references0.data.values);
        });

        test('test  with empty parametter', () => {
          expect(temperatureEmpty.data.values).toEqual(undefined);
        });

        test('test with no Integer containing parametter ', () => {
          expect(temperatureRight.data.values).not.toEqual(expect.any(Number));
        });

      });

      describe(' tests of data\'s labels ', () => {

        test('test  with wright parametter', () => {
          expect(temperatureRight.data.labels).toEqual(references0.data.labels);
        });

        test('test  with wrong parametter', () => {
          expect(temperatureWrong.data.labels).not.toEqual(references0.data.labels);
        });

        test('test  with empty parametter', () => {
          expect(temperatureEmpty.data.labels).toEqual(undefined);
        });

        test('test with no Integer containing parametter ', () => {
          expect(temperatureRight.data.labels).not.toEqual(expect.any(Number));
        });

      });

      describe(' tests of data\'s labels ', () => {

        test('test  with wright parametter', () => {
          expect(temperatureRight.data.labels).toEqual(references0.data.labels);
        });

        test('test  with wrong parametter', () => {
          expect(temperatureWrong.data.labels).not.toEqual(references0.data.labels);
        });

        test('test  with empty parametter', () => {
          expect(temperatureEmpty.data.labels).toEqual(undefined);
        });

        test('test with no Integer containing parametter ', () => {
          expect(temperatureRight.data.labels).not.toEqual(expect.any(Number));
        });

      });

      describe(' tests of typeOfSensor, number of values, average Value and latest Date Of Mesuring ', () => {

        describe('test  on typeOfSensor', () => {
          test('test  with wright parametter', () => {
            expect(fromNameToTypeOfSensor(temperatureRight.name)).toEqual(references0.type);
          });

          test('test  with wrong parametter', () => {
            expect(fromNameToTypeOfSensor(temperatureWrong.name)).not.toEqual(references0.type);
          });

          test('test  with empty parametter', () => {
            expect(fromNameToTypeOfSensor(temperatureEmpty.name)).toEqual("");
          });

          test('test with no Integer containing parametter ', () => {
            expect(fromNameToTypeOfSensor(temperatureRight.name)).not.toEqual(expect.any(Number));
          });
        });

        describe('test  on number of values', () => {
          test('test  with wright parametter', () => {
            expect(temperatureRight.nomberOfValues()).toEqual(9);
          });

          test('test  with wrong parametter', () => {
            expect(temperatureWrong.nomberOfValues()).not.toEqual(9);
          });


        });

        describe('test  on number of values', () => {

          test('test  with wright parametter', () => {
            expect(temperatureRight.averageValues()).toEqual(23.11111111111111);
          });

          test('test  with wrong parametter', () => {
            expect(temperatureWrong.averageValues()).not.toEqual(23.11111111111111);
          });


        });

        describe('test  on latest Date Of Mesuring', () => {
          test('test  with wright parametter', () => {
            expect(temperatureRight.latestDateOfMesuring()).toEqual("2016-10-19T16:00:00.000Z");
          });

          describe('test  on latest Date Of Mesuring', () => {

            test('test  with wrong parametter', () => {
              expect(temperatureWrong.latestDateOfMesuring()).not.toEqual("2016-10-19T16:00:00.000Z");
            });

          });


        });


      });


    });


    //============================== TEST DE PORTE DE GARAGE =========================================


    describe('Garage\'s door  tests', () => {

      let references1 = data[1];
      let datumRight = Datum.createDatum(0);
      let datumWrong = Datum.createDatum(122535);

      let doorRight = Door.createDoor(10245, "Porte du Garage", datumRight, typeOfSensor("DOOR"));
      let doorWrong = Door.createDoor(77565, "Porte de sortie du couloire", datumWrong, typeOfSensor("RFID"));
      let doorEmpty = Door.createDoor();

      describe(' Garage\'s door tests of id ', () => {

        test('test  with wright parametter', () => {
          expect(doorRight.id).toEqual(references1.id);
        });

        test('test  with wrong parametter', () => {
          expect(doorWrong.id).not.toEqual(references1.id);
        });

        test('test  with empty parametter', () => {
          expect(doorEmpty.id).toBe(0);
        });

        test('test with no Integer containing parametter ', () => {
          expect(doorRight.id).toEqual(expect.any(Number));
        });

      });

      describe('Garage\'s door tests of name ', () => {

        test('test  with wright parametter', () => {
          expect(doorRight.name).toEqual(references1.name);
        });

        test('test  with wrong parametter', () => {
          expect(doorWrong.name).not.toEqual(references1.name);
        });

        test('test  with empty parametter', () => {
          expect(doorEmpty.name).toEqual("");
        });

        test('test with no Integer containing parametter ', () => {
          expect(doorRight.name).not.toEqual(expect.any(Number));
        });

      });

      describe(' Garage\'s door tests of type ', () => {

        test('test  with wright parametter', () => {
          expect(doorRight.type).toEqual(references1.type);
        });

        test('test  with wrong parametter', () => {
          expect(doorWrong.type).not.toEqual(references1.type);
        });

        test('test  with empty parametter', () => {
          expect(doorEmpty.type).toEqual("");
        });

        test('test with no Integer containing parametter ', () => {
          expect(doorRight.type).not.toEqual(expect.any(Number));
        });

      });
      describe('Garage\'s door tests of data ', () => {

        test('test with wright parametter', () => {
          expect(doorRight.data).toEqual(expect.objectContaining(references1.data));

        });

        test('test  with wrong parametter', () => {
          expect(doorWrong.data).not.toEqual(references1.data);
        });

        test('test  with empty parametter', () => {
          expect(doorEmpty.data).toEqual({});
        });

        test('test with no Integer containing parametter ', () => {
          expect(doorRight.data).not.toEqual(expect.any(Number));
        });
      });

      describe('Garage\'s door  tests of parametters of data ', () => {

        describe(' tests of data\'s value ', () => {

          test('test  with wright parametter', () => {
            expect(doorRight.data.value).toEqual(references1.data.value);
          });

          test('Garage\'s door test  with wrong parametter', () => {
            expect(doorWrong.data.value).not.toEqual(references1.data.value);
          });

          test('test  with empty parametter', () => {
            expect(doorEmpty.data.value).toEqual();
          });


          test('test with no Integer containing parametter ', () => {
            expect(doorRight.data.value).toEqual(expect.any(Number));
          });

        });

        //---------------------------------------- > Datum doesn't have a label

        describe(' tests of typeOfSensor', () => {

          describe('test  on typeOfSensor', () => {
            test('test  with wright parametter', () => {
              expect(fromNameToTypeOfSensor(doorRight.name)).toEqual(references1.type);
            });

            test('test  with wrong parametter', () => {
              expect(fromNameToTypeOfSensor(doorWrong.name)).not.toEqual(references1.type);
            });

            test('test  with empty parametter', () => {
              expect(fromNameToTypeOfSensor(doorEmpty.name)).toEqual("");
            });

            test('test with no Integer containing parametter ', () => {
              expect(fromNameToTypeOfSensor(doorRight.name)).not.toEqual(expect.any(Number));
            });

          });


        });


      });



    });

    //============================== TEST DE VENTILATEUR ORDINATEUR BUREAU =========================================



    describe('Desktop Temperature tests', () => {

      let references2 = data[2];
      let timeSeriesRight2 = TimeSeries.createTimeSeries([1073, 1800, 2299, 2176, 1899, 1400], ["2016-10-19T10:00:00.000Z", "2016-10-19T10:05:00.000Z", "2016-10-19T10:10:00.000Z", "2016-10-19T10:15:00.000Z", "2016-10-19T10:20:00.000Z", "2016-10-19T10:25:00.000Z"]);
      let timeSeriesWrong2 = TimeSeries.createTimeSeries([1234, 1113, 1800, 3232, 2176, 1899, 4997], ["2015-18-19154:00:00.001Z", "2015-10-19T10:05:00.000Z", "2016-10-19T10:10:00.000Z", "2015-10-19T10:15:00.000Z", "2016-10-19T10:20:00.000Z", "2016-10-19T11:25:00.000Z"]);

      let desktopFanRight = FanSpeed.createFanSpeed(2222, "Ventilateur Ordinateur Bureau", timeSeriesRight2, typeOfSensor("FAN_SPEED"));
      let desktopFanWrong = FanSpeed.createFanSpeed(6363, "Ventilateur De Chambre", timeSeriesWrong2, typeOfSensor("HUMIDITY"));
      let desktopFanEmpty = FanSpeed.createFanSpeed();


      describe(' Desktop Temperature tests of id ', () => {

        test('test  with wright parametter', () => {
          expect(desktopFanRight.id).toEqual(references2.id);
        });

        test('test  with wrong parametter', () => {
          expect(desktopFanWrong.id).not.toEqual(references2.id);
        });

        test('test  with empty parametter', () => {
          expect(desktopFanEmpty.id).toBe(0);
        });

        test('test with no Integer containing parametter ', () => {
          expect(desktopFanRight.id).toEqual(expect.any(Number));
        });

      });

      describe('Desktop Temperature tests of name ', () => {

        test('test  with wright parametter', () => {
          expect(desktopFanRight.name).toEqual(references2.name);
        });

        test('test  with wrong parametter', () => {
          expect(desktopFanWrong.name).not.toEqual(references2.name);
        });

        test('test  with empty parametter', () => {
          expect(desktopFanEmpty.name).toEqual("");
        });

        test('test with no Integer containing parametter ', () => {
          expect(desktopFanRight.name).not.toEqual(expect.any(Number));
        });

      });

      describe(' Desktop Temperature tests of type ', () => {

        test('test  with wright parametter', () => {
          expect(desktopFanRight.type).toEqual(references2.type);
        });

        test('test  with wrong parametter', () => {
          expect(desktopFanWrong.type).not.toEqual(references2.type);
        });

        test('test  with empty parametter', () => {
          expect(desktopFanEmpty.type).toEqual("");
        });


        test('test with no Integer containing parametter ', () => {
          expect(desktopFanRight.type).not.toEqual(expect.any(Number));
        });

      });

      describe(' Desktop Temperature tests of data ', () => {

        test('test with wright parametter', () => {
          expect(desktopFanRight.data).toEqual(expect.objectContaining(references2.data));

        });

        test('test  with wrong parametter', () => {
          expect(desktopFanWrong.data).not.toEqual(references2.data);
        });

        test('test  with empty parametter', () => {
          expect(desktopFanEmpty.data).toEqual({});
        });

        test('test with no Integer containing parametter ', () => {
          expect(desktopFanRight.data).not.toEqual(expect.any(Number));
        });
      });

      describe(' Desktop Temperature tests\'s parametters of data ', () => {

        describe(' tests of data\'s values ', () => {

          test('test  with wright parametter', () => {
            expect(desktopFanRight.data.values).toEqual(references2.data.values);
          });

          test('test  with wrong parametter', () => {
            expect(desktopFanWrong.data.values).not.toEqual(references2.data.values);
          });

          test('test  with empty parametter', () => {
            expect(desktopFanEmpty.data.values).toEqual(undefined);
          });

          test('test with no Integer containing parametter ', () => {
            expect(desktopFanRight.data.values).not.toEqual(expect.any(Number));
          });

        });

        describe(' Desktop Temperature tests of data\'s labels ', () => {

          test('test  with wright parametter', () => {
            expect(desktopFanRight.data.labels).toEqual(references2.data.labels);
          });

          test('test  with wrong parametter', () => {
            expect(desktopFanWrong.data.labels).not.toEqual(references2.data.labels);
          });

          test('test  with empty parametter', () => {
            expect(desktopFanEmpty.data.labels).toEqual(undefined);
          });

          test('test with no Integer containing parametter ', () => {
            expect(desktopFanRight.data.labels).not.toEqual(expect.any(Number));
          });

        });
      });

      describe(' tests of typeOfSensor, number of values, average Value and latest Date Of Mesuring ', () => {

        describe('test  on typeOfSensor', () => {

          test('test  with wright parametter', () => {
            expect(fromNameToTypeOfSensor(desktopFanRight.name)).toEqual(references2.type);
          });

          test('test  with wrong parametter', () => {
            expect(fromNameToTypeOfSensor(desktopFanWrong.name)).not.toEqual(references2.type);
          });

          test('test  with empty parametter', () => {
            expect(fromNameToTypeOfSensor(desktopFanEmpty.name)).toEqual("");
          });

          test('test with no Integer containing parametter ', () => {
            expect(fromNameToTypeOfSensor(desktopFanRight.name)).not.toEqual(expect.any(Number));
          });
        });

        describe('test  on number of values', () => {

          test('test  with wright parametter', () => {
            expect(desktopFanRight.nomberOfValues()).toEqual(6);
          });

          test('test  with wrong parametter', () => {
            expect(desktopFanWrong.nomberOfValues()).not.toEqual(6);
          });


        });

        describe('test  on number of values', () => {

          test('test  with wright parametter', () => {
            expect(desktopFanRight.averageValues()).toEqual(1774.5);
          });

          test('test  with wrong parametter', () => {
            expect(desktopFanWrong.averageValues()).not.toEqual(1774.5);
          });

        });

        describe('test  on latest Date Of Mesuring', () => {
          test('test  with wright parametter', () => {
            expect(desktopFanRight.latestDateOfMesuring()).toEqual("2016-10-19T10:25:00.000Z");
          });

          test('test  with wrong parametter', () => {
            expect(desktopFanWrong.latestDateOfMesuring()).not.toEqual("2016-10-19T10:25:00.000Z");
          });


        });


      });

    });
  });
});
  //============================== END OF TESTS =========================================




