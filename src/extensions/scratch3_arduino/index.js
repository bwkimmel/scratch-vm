
// create by scratch3-extension generator
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const Timer = require('../../util/timer');
const log = require('../../util/log');
const formatMessage = require('format-message');

const menuIconURI = "data:image/png;base64,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";
const blockIconURI = "data:image/png;base64,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";


function _do (f) {
  return Promise.resolve().then(f).catch(e => { log.warn(e); });
}


class Arduino {
  constructor () {
    this.digital_outputs = {};
    this.digital_inputs = {};
    this.pwm_outputs = {};
    this.analog_inputs = {};
    this.dhts = {};
    this.servos = {};
    this.sonars = {};
    this.tones = {};

    this.stepper_attached = false;

    this._updateCapabilities();
  }

  _updateCapabilities () {
    return Promise.all([
      this._rpc('get_capabilities', []).then(result => {
        this.pin_capabilities = result;
      }),
      this._rpc('get_analog_map', []).then(result => {
        this.analog_pins = result;
      })
    ]);
  }

  _rpc (method, params) {
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:4000';
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    let req = JSON.stringify({
      jsonrpc: '2.0',
      id:      1,
      method:  method,
      params:  params
    });

    return new Promise((resolve, reject) => {
      xhr.onload = function (e) {
        if (xhr.readyState !== 4) {
          return;
        }
        if (xhr.status !== 200) {
          reject(`RPC returned status code ${xhr.status}`);
          return;
        }
        try {
          let resp = JSON.parse(xhr.responseText);
          if (resp.hasOwnProperty('error')) {
            reject(resp.error);
            return;
          }
          if (!resp.hasOwnProperty('result')) {
            reject('invalid RPC response: missing result');
            return;
          }
          if (resp.result === null) {
            resolve();
          } else {
            resolve(resp.result);
          }
        } catch (e) {
          reject(`error parsing RPC response: ${e}`);
          return;
        }
      };
      xhr.send(req);
    });
  }

  _checkPin (pin, type) {
    if (pin < 0 || pin >= this.pin_capabilities.length) {
      throw `Pin ${pin} does not exist`;
    }
    if (!this.pin_capabilities[pin].hasOwnProperty(type)) {
      throw `Pin ${pin} does not support mode: ${type}`;
    }
  }

  attachDigitalOutput (name, pin) {
    this._checkPin(pin, 'digital_output');
    this.digital_outputs[name] = pin;
    return this._rpc('set_pin_mode_digital_output', [pin]);
  }

  attachDigitalInput (name, pin) {
    this._checkPin(pin, 'digital_input');
    this.digital_inputs[name] = pin;
    return this._rpc('set_pin_mode_digital_input', [pin]);
  }

  attachPWMOutput (name, pin) {
    this._checkPin(pin, 'pwm');
    this.pwm_outputs[name] = pin;
    return this._rpc('set_pin_mode_pwm_output', [pin]);
  }

  attachAnalogInput (name, pin) {
    if (pin < 0 || pin >= this.analog_pins.length) {
      throw `Pin A${PIN} does not exist`;
    }

    this.analog_inputs[name] = pin;
    return this._rpc('set_pin_mode_analog_input', [pin]);
  }

  attachDHT (name, pin, type) {
    this._checkPin(pin, 'dht');
    this.dhts[name] = pin;
    return this._rpc('set_pin_mode_dht', [pin, type]);
  }

  attachServo (name, pin, min_pulse, max_pulse) {
    this._checkPin(pin, 'servo');
    this.servos[name] = pin;
    return this._rpc('set_pin_mode_servo', [pin, min_pulse, max_pulse]);
  }

  attachSonar (name, trigger_pin, echo_pin) {
    this._checkPin(trigger_pin, 'sonar');
    this._checkPin(echo_pin, 'sonar');
    this.sonars[name] = trigger_pin;
    return this._rpc('set_pin_mode_sonar', [trigger_pin, echo_pin]);
  }

  attachStepper (steps_per_revolution, pins) {
    for (var i = 0; i < pins.length; i++) {
      this._checkPin(pins[i], 'stepper');
    }

    this.stepper_attached = true;
    return this._rpc('set_pin_mode_stepper', [steps_per_revolution, pins]);
  }

  attachTone (name, pin) {
    this._checkPin(pin, 'tone');
    this.tones[name] = pin;
    return this._rpc('set_pin_mode_tone', [pin]);
  }

  digitalWrite (name, value) {
    let pin = this.digital_outputs[name];
    if (typeof pin === 'undefined') {
      throw `Digital output '${name}' is not attached`;
    }
    return this._rpc('digital_write', [pin, value]);
  }

  digitalRead (name) {
    let pin = this.digital_inputs[name];
    if (typeof pin === 'undefined') {
      throw `Digital input '${name}' is not attached`;
    }
    return this._rpc('digital_read', [pin]);
  }

  analogWrite (name, value) {
    let pin = this.pwm_outputs[name];
    if (typeof pin === 'undefined') {
      throw `PWM output '${name}' is not attached`;
    }
    let max = (1 << this.pin_capabilities[pin].pwm) - 1;
    return this._rpc('pwm_write', [pin, Math.round(value * max)]);
  }

  analogRead (name) {
    let pin = this.analog_inputs[name];
    if (typeof pin === 'undefined') {
      throw `Analog input '${name}' is not attached`;
    }
    let max = (1 << this.pin_capabilities[this.analog_pins[pin]].analog_input) - 1;
    return this._rpc('analog_read', [pin]).then(x => x / max);
  }

  dhtRead (name) {
    let pin = this.dhts[name];
    if (typeof pin === 'undefined') {
      throw `DHT '${name}' is not attached`;
    }
    return this._rpc('dht_read', [pin]);
  }

  sonarRead (name) {
    let pin = this.sonars[name];
    if (typeof pin === 'undefined') {
      throw `Sonar '${name}' is not attached`;
    }
    return this._rpc('sonar_read', [pin]);
  }

  playTone (name, frequency, duration) {
    let pin = this.tones[name];
    if (typeof pin === 'undefined') {
      throw `Tone device '${name}' is not attached`;
    }
    return this._rpc('play_tone', [pin, frequency, duration]);
  }

  playToneContinuously (name, frequency) {
    let pin = this.tones[name];
    if (typeof pin === 'undefined') {
      throw `Tone device '${name}' is not attached`;
    }
    return this._rpc('play_tone_continuously', [pin, frequency]);
  }

  playToneOff (name) {
    let pin = this.tones[name];
    if (typeof pin === 'undefined') {
      throw `Tone device '${name}' is not attached`;
    }
    return this._rpc('play_tone_off', [pin]);
  }

  servoWrite (name, position) {
    let pin = this.servos[name]
    if (typeof pin === 'undefined') {
      throw `Servo '${name}' is not attached`;
    }
    return this._rpc('servo_write', [pin, position]);
  }

  stepperWrite (speed, steps) {
    if (!this.stepper_attached) {
      throw 'Stepper motor is not attached';
    }
    return this._rpc('stepper_write', [SPEED, STEPS]);
  }
}


class ArduinoBlocks {
  constructor (runtime) {
    this._runtime = runtime;
    this._runtime.registerPeripheralExtension('arduino', this);

    this._arduino = new Arduino();

    this._default_tempo = 60;
  }

  scan () {
    console.log('scan');
  }

  connect (id) {
    console.log('connect ' + id);
  }

  disconnect () {
    console.log('disconnect');
    this._runtime.emit(this._runtime.constructor.PERIPHERAL_DISCONNECTED);
  }

  isConnected () {
    console.log('isConnected');
    return false;
  }

  getInfo () {
    return {
      id: 'arduino',
      name: 'Arduino',
      color1: '#0FBD8C',
      color2: '#0DA57A',
      menuIconURI: menuIconURI,
      blockIconURI: blockIconURI,
      showStatusButton: true,
      menus: {
        digitalState: {
          acceptReporters: true,
          items: [
            {'value': 0, 'text': 'LOW'},
            {'value': 1, 'text': 'HIGH'}
          ]
        },
        dhtType: [
          {'value': 11, 'text': 'DHT11'},
          {'value': 12, 'text': 'DHT12'},
          {'value': 21, 'text': 'DHT21'},
          {'value': 22, 'text': 'DHT22'},
          {'value': 2301, 'text': 'AM2301'}
        ]
      },
      blocks: [
        {
          opcode: 'attachDigitalOutput',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'digital_output',
              defaultValue: 'output1'
            },
            PIN: {
              type: ArgumentType.NUMBER
            }
          },
          text: 'attach digital output [NAME] to pin [PIN]'
        },
        {
          opcode: 'digitalWrite',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'digital_output',
              defaultValue: 'output1'
            },
            VALUE: {
              type: ArgumentType.NUMBER,
              menu: 'digitalState'
            }
          },
          text: 'digital write [NAME] to [VALUE]'
        },
        '---',
        {
          opcode: 'attachDigitalInput',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'digital_input',
              defaultValue: 'input1'
            },
            PIN: {
              type: ArgumentType.NUMBER
            }
          },
          text: 'attach digital input [NAME] to pin [PIN]'
        },
        {
          opcode: 'digitalRead',
          blockType: BlockType.BOOLEAN,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'digital_input',
              defaultValue: 'input1'
            },
            VALUE: {
              type: ArgumentType.NUMBER,
              menu: 'digitalState',
              defaultValue: 1
            }
          },
          text: 'digital input [NAME] is [VALUE]'
        },
        '---',
        {
          opcode: 'attachPWMOutput',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'pwm',
              defaultValue: 'pwm1'
            },
            PIN: {
              type: ArgumentType.NUMBER
            }
          },
          text: 'attach PWM output [NAME] to pin [PIN]'
        },
        {
          opcode: 'analogWrite',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'pwm',
              defaultValue: 'pwm1'
            },
            VALUE: {
              type: ArgumentType.NUMBER
            }
          },
          text: 'PWM write [NAME] to [VALUE]'
        },
        '---',
        {
          opcode: 'attachAnalogInput',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'analog_input',
              defaultValue: 'analog1'
            },
            PIN: {
              type: ArgumentType.NUMBER
            }
          },
          text: 'attach analog input [NAME] to pin A[PIN]'
        },
        {
          opcode: 'analogRead',
          blockType: BlockType.REPORTER,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'analog_input',
              defaultValue: 'analog1'
            }
          },
          text: 'analog read [NAME]'
        },
        '---',
        {
          opcode: 'attachDHT',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'dht',
              defaultValue: 'dht1'
            },
            TYPE: {
              type: ArgumentType.NUMBER,
              menu: 'dhtType',
              defaultValue: 11
            },
            PIN: {
              type: ArgumentType.NUMBER
            }
          },
          text: 'attach DHT [NAME] type [TYPE] to pin [PIN]'
        },
        {
          opcode: 'dhtReadTemperature',
          blockType: BlockType.REPORTER,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'dht',
              defaultValue: 'dht1'
            }
          },
          text: 'temperature from [NAME]'
        },
        {
          opcode: 'dhtReadHumidity',
          blockType: BlockType.REPORTER,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'dht',
              defaultValue: 'dht1'
            }
          },
          text: 'humidity from [NAME]'
        },
        '---',
        {
          opcode: 'attachSonar',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'sonar',
              defaultValue: 'sonar1'
            },
            TRIGGER_PIN: {
              type: ArgumentType.NUMBER
            },
            ECHO_PIN: {
              type: ArgumentType.NUMBER,
              defaultValue: '1'
            }
          },
          text: 'attach sonar [NAME] trigger to pin [TRIGGER_PIN] and echo to pin [ECHO_PIN]'
        },
        {
          opcode: 'sonarRead',
          blockType: BlockType.REPORTER,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'sonar',
              defaultValue: 'sonar1'
            }
          },
          text: 'sonar [NAME] distance'
        },
        '---',
        {
          opcode: 'attachTone',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'tone',
              defaultValue: 'tone1'
            },
            PIN: {
              type: ArgumentType.NUMBER
            }
          },
          text: 'attach tone device [NAME] to pin [PIN]'
        },
        {
          opcode: 'playTone',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'tone',
              defaultValue: 'tone1'
            },
            FREQUENCY: {
              type: ArgumentType.NUMBER,
              defaultValue: '440'
            },
            DURATION: {
              type: ArgumentType.NUMBER,
              defaultValue: '1'
            }
          },
          text: 'play [FREQUENCY]Hz tone on [NAME] for [DURATION] seconds'
        },
        {
          opcode: 'playNote',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'tone',
              defaultValue: 'tone1'
            },
            NOTE: {
              type: ArgumentType.NOTE
            },
            BEATS: {
              type: ArgumentType.NUMBER,
              defaultValue: '0.25'
            }
          },
          text: 'play note [NOTE] on [NAME] for [BEATS] beats'
        },
        {
          opcode: 'startTone',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'tone',
              defaultValue: 'tone1'
            },
            FREQUENCY: {
              type: ArgumentType.NUMBER,
              defaultValue: '440'
            },
            DURATION: {
              type: ArgumentType.NUMBER,
              defaultValue: '1'
            }
          },
          text: 'start [FREQUENCY]Hz tone on [NAME] for [DURATION] seconds'
        },
        {
          opcode: 'startNote',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'tone',
              defaultValue: 'tone1'
            },
            NOTE: {
              type: ArgumentType.NOTE
            },
            BEATS: {
              type: ArgumentType.NUMBER,
              defaultValue: '0.25'
            }
          },
          text: 'start note [NOTE] on [NAME] for [BEATS] beats'
        },
        {
          opcode: 'startToneContinuously',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'tone',
              defaultValue: 'tone1'
            },
            FREQUENCY: {
              type: ArgumentType.NUMBER,
              defaultValue: '440'
            }
          },
          text: 'start [FREQUENCY]Hz tone on [NAME]'
        },
        {
          opcode: 'startNoteContinuously',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'tone',
              defaultValue: 'tone1'
            },
            NOTE: {
              type: ArgumentType.NOTE
            }
          },
          text: 'start note [NOTE] on [NAME]'
        },
        {
          opcode: 'stopTone',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'tone',
              defaultValue: 'tone1'
            }
          },
          text: 'stop tone [NAME]'
        },
        '---',
        {
          opcode: 'attachServo',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'servo',
              defaultValue: 'servo1'
            },
            PIN: {
              type: ArgumentType.NUMBER
            },
            MIN_PULSE: {
              type: ArgumentType.NUMBER,
              defaultValue: '544'
            },
            MAX_PULSE: {
              type: ArgumentType.NUMBER,
              defaultValue: '2400'
            }
          },
          text: 'attach servo [NAME] with pulses between [MIN_PULSE]ms and [MAX_PULSE]ms to pin [PIN]'
        },
        {
          opcode: 'servoWrite',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.VARIABLE,
              variableType: 'servo',
              defaultValue: 'servo1'
            },
            POSITION: {
              type: ArgumentType.ANGLE
            }
          },
          text: 'move servo [NAME] to position [POSITION]'
        },
        '---',
        {
          opcode: 'attach2PinStepper',
          func: 'attachStepper',
          blockType: BlockType.COMMAND,
          arguments: {
            STEPS_PER_REVOLUTION: {
              type: ArgumentType.NUMBER,
              defaultValue: '360'
            },
            PIN1: {
              type: ArgumentType.NUMBER
            },
            PIN2: {
              type: ArgumentType.NUMBER,
              defaultValue: '1'
            }
          },
          text: 'attach stepper with [STEPS_PER_REVOLUTION] steps per revolution to pins [PIN1], [PIN2]'
        },
        {
          opcode: 'attach4PinStepper',
          func: 'attachStepper',
          blockType: BlockType.COMMAND,
          arguments: {
            STEPS_PER_REVOLUTION: {
              type: ArgumentType.NUMBER,
              defaultValue: '360'
            },
            PIN1: {
              type: ArgumentType.NUMBER
            },
            PIN2: {
              type: ArgumentType.NUMBER,
              defaultValue: '1'
            },
            PIN3: {
              type: ArgumentType.NUMBER,
              defaultValue: '2'
            },
            PIN4: {
              type: ArgumentType.NUMBER,
              defaultValue: '3'
            }
          },
          text: 'attach stepper with [STEPS_PER_REVOLUTION] steps per revolution to pins [PIN1], [PIN2], [PIN3], [PIN4]'
        },
        {
          opcode: 'stepperWrite',
          blockType: BlockType.COMMAND,
          arguments: {
            STEPS: {
              type: ArgumentType.NUMBER,
              defaultValue: '90'
            },
            SPEED: {
              type: ArgumentType.NUMBER,
              defaultValue: '100'
            }
          },
          text: 'move stepper [STEPS] steps at speed [SPEED]'
        }
      ]
    }
  }

  attachDigitalOutput (args, util) {
    const NAME = args.NAME;
    const PIN = Cast.toNumber(args.PIN);
    return _do(() => this._arduino.attachDigitalOutput(NAME, PIN));
  }

  attachDigitalInput (args, util) {
    const NAME = args.NAME;
    const PIN = Cast.toNumber(args.PIN);
    return _do(() => this._arduino.attachDigitalInput(NAME, PIN));
  }

  attachPWMOutput (args, util) {
    const NAME = args.NAME;
    const PIN = Cast.toNumber(args.PIN);
    return _do(() => this._arduino.attachPWMOutput(NAME, PIN));
  }

  attachAnalogInput (args, util) {
    const NAME = args.NAME;
    const PIN = Cast.toNumber(args.PIN);
    return _do(() => this._arduino.attachAnalogInput(NAME, PIN));
  }

  attachDHT (args, util) {
    const NAME = args.NAME;
    const PIN = Cast.toNumber(args.PIN);
    const TYPE = Cast.toNumber(args.TYPE);
    return _do(() => this._arduino.attachDHT(NAME, PIN, TYPE));
  }

  attachServo (args, util) {
    const NAME = args.NAME;
    const PIN = Cast.toNumber(args.PIN);
    const MIN_PULSE = Cast.toNumber(args.MIN_PULSE);
    const MAX_PULSE = Cast.toNumber(args.MAX_PULSE);
    return _do(() => this._arduino.attachServo(NAME, PIN, MIN_PULSE, MAX_PULSE));
  }

  attachSonar (args, util) {
    const NAME = args.NAME;
    const TRIGGER_PIN = Cast.toNumber(args.TRIGGER_PIN);
    const ECHO_PIN = Cast.toNumber(args.ECHO_PIN);
    return _do(() => this._arduino.attachSonar(NAME, TRIGGER_PIN, ECHO_PIN));
  }

  attachStepper (args, util) {
    const STEPS_PER_REVOLUTION = Cast.toNumber(args.STEPS_PER_REVOLUTION);
    const PIN1 = Cast.toNumber(args.PIN1);
    const PIN2 = Cast.toNumber(args.PIN2);
    const PIN3 = args.hasOwnProperty('PIN3') ? Cast.toNumber(args.PIN3) : undefined;
    const PIN4 = args.hasOwnProperty('PIN4') ? Cast.toNumber(args.PIN4) : undefined;

    let pins = [PIN1, PIN2];
    if (typeof PIN3 !== 'undefined' && typeof PIN4 !== 'undefined') {
      pins.push(PIN3);
      pins.push(PIN4);
    }

    return _do(() => this._arduino.attachStepper(STEPS_PER_REVOLUTION, pins));
  }

  attachTone (args, util) {
    const NAME = args.NAME;
    const PIN = Cast.toNumber(args.PIN);
    return _do(() => this._arduino.attachTone(NAME, PIN));
  }

  digitalWrite (args, util) {
    const NAME = args.NAME;
    const VALUE = Math.round(Cast.toNumber(args.VALUE));
    return _do(() => this._arduino.digitalWrite(NAME, VALUE));
  }

  digitalRead (args, util) {
    const NAME = args.NAME;
    const VALUE = Cast.toNumber(args.VALUE);
    return _do(() => this._arduino.digitalRead(NAME).then(x => x == VALUE));
  }

  analogWrite (args, util) {
    const NAME = args.NAME;
    const VALUE = Cast.toNumber(args.VALUE);
    return _do(() => this._arduino.analogWrite(NAME, VALUE));
  }

  analogRead (args, util) {
    const NAME = args.NAME;
    return _do(() => this._arduino.analogRead(NAME));
  }

  dhtRead (args, util) {
    const NAME = args.NAME;
    return _do(() => this._arduino.dhtRead(NAME));
  }

  dhtReadTemperature (args, util) {
    return _do(() => this.dhtRead(args, util)).then(x => x.temperature);
  }

  dhtReadHumidity (args, util) {
    return _do(() => this.dhtRead(args, util)).then(x => x.humidity);
  }

  sonarRead (args, util) {
    const NAME = args.NAME;
    return _do(() => this._arduino.sonarRead(NAME));
  }

  playTone (args, util) {
    const NAME = args.NAME;
    const FREQUENCY = Cast.toNumber(args.FREQUENCY);
    const DURATION = Cast.toNumber(args.DURATION);
    let millis = Math.round(DURATION * 1000);
    return _do(() => this._arduino.playTone(NAME, FREQUENCY, millis).then(() => new Promise(resolve => {
      window.setTimeout(resolve, millis);
    })));
  }

  _noteFrequency (note) {
    return Math.round(Math.pow(2, (note - 9) / 12) * 440);
  }

  _beatsToSeconds (beats) {
    return beats * (60 / this._default_tempo);
  }

  playNote (args, util) {
    const NAME = args.NAME;
    const NOTE = Cast.toNumber(args.NOTE);
    const BEATS = Cast.toNumber(args.BEATS);
    let frequency = this._noteFrequency(NOTE);
    let seconds = this._beatsToSeconds(BEATS);
    let millis = Math.round(1000 * seconds);
    return _do(() => this._arduino.playTone(NAME, frequency, millis).then(() => new Promise(resolve => {
      window.setTimeout(resolve, millis);
    })));
  }

  startTone (args, util) {
    const NAME = args.NAME;
    const FREQUENCY = Cast.toNumber(args.FREQUENCY);
    const DURATION = Cast.toNumber(args.DURATION);
    let millis = Math.round(DURATION * 1000);
    return _do(() => this._arduino.playTone(NAME, FREQUENCY, millis));
  }

  startNote (args, util) {
    const NAME = args.NAME;
    const NOTE = Cast.toNumber(args.NOTE);
    const BEATS = Cast.toNumber(args.BEATS);
    let frequency = this._noteFrequency(NOTE);
    let seconds = this._beatsToSeconds(BEATS);
    let millis = Math.round(1000 * seconds);
    return _do(() => this._arduino.playTone(NAME, frequency, millis));
  }

  startToneContinuously (args, util) {
    const NAME = args.NAME;
    const FREQUENCY = Cast.toNumber(args.FREQUENCY);
    return _do(() => this._arduino.playToneContinuously(NAME, FREQUENCY));
  }

  startNoteContinuously (args, util) {
    const NAME = args.NAME;
    const NOTE = Cast.toNumber(args.NOTE);
    const BEATS = Cast.toNumber(args.BEATS);
    let frequency = this._noteFrequency(NOTE);
    return _do(() => this._arduino.playToneContinuously(NAME, frequency));
  }

  stopTone (args, util) {
    const NAME = args.NAME;
    return _do(() => this._arduino.playToneOff(NAME));
  }

  servoWrite (args, util) {
    const NAME = args.NAME;
    const POSITION = Cast.toNumber(args.POSITION);
    return _do(() => this._arduino.servoWrite(NAME, POSITION));
  }

  stepperWrite (args, util) {
    const SPEED = Cast.toNumber(args.SPEED);
    const STEPS = Cast.toNumber(args.STEPS);
    return _do(() => this._arduino.stepperWrite(SPEED, STEPS));
  }

}

//Scratch.extensions.register(new Arduino());
module.exports = ArduinoBlocks;
