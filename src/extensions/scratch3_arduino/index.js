
// create by scratch3-extension generator
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

const menuIconURI = "data:image/png;base64,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";
const blockIconURI = "data:image/png;base64,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";

class Arduino {
  constructor (runtime) {
    this.outputs = ['New output'];
    this.runtime = runtime;
    this.runtime.registerPeripheralExtension('arduino', this);
    this.comm = runtime.ioDevices.comm;
  }

  debug (obj) {
    console.log(Object.getOwnPropertyNames(obj).map(function (p) {
      if (p[0] == '_') {
        return p + ': (private)';
      } else {
        return p + ': ' + (typeof obj[p]);
      }
    }));
    /*
    var cache = [];
    return JSON.stringify(obj, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        // Duplicate reference found, discard key
        if (cache.includes(value)) return;
    
        // Store value in our collection
        cache.push(value);
      }
      return value;
    });
    */
  }

  scan () {
    console.log('scan');
  }

  connect (id) {
    console.log('connect ' + id);
  }

  disconnect () {
    console.log('disconnect');
    this.runtime.emit(this.runtime.constructor.PERIPHERAL_DISCONNECTED);
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
        pinMode: ['INPUT', 'INPUT_PULLUP', 'OUTPUT', 'PWM'],
        digitalState: [
          {'value': 0, 'text': 'LOW'},
          {'value': 1, 'text': 'HIGH'}
        ],
        digitalOutputs: 'digitalOutputs',
        digitalInputs: {
          acceptReporters: true,
          items: 'digitalInputs'
        },
        pwmOutputs: 'pwmOutputs',
        analogInputs: 'analogInputs'
      },
/*
      customFieldTypes: {
        'digitalOutput': {
          output: ArgumentType.STRING,
          outputShape: 2,
          implementation: {
            fromJson: options => {
              console.log(JSON.stringify(options));
              return null;
            }
          }
        }
      },
*/
      blocks: [
        {
          opcode: 'attachDigitalOutput',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
							type: ArgumentType.VARIABLE
            },
            PIN: {
              type: ArgumentType.NUMBER
            }
          },
          text: 'attach digital output [NAME] to pin [PIN]'
        },
        {
          opcode: 'attachDigitalInput',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.STRING,
              menu: 'digitalInputs'
            },
            PIN: {
              type: ArgumentType.NUMBER
            }
          },
          text: 'attach digital input [NAME] to pin [PIN]'
        },
        {
          opcode: 'attachPWMOutput',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.STRING
 //             menu: 'pwmOutputs'
            },
            PIN: {
              type: ArgumentType.NUMBER
            }
          },
          text: 'attach PWM output [NAME] to pin [PIN]'
        },
        {
          opcode: 'attachAnalogInput',
          blockType: BlockType.COMMAND,
          arguments: {
            NAME: {
              type: ArgumentType.STRING
//              menu: 'analogInputs'
            },
            PIN: {
              type: ArgumentType.NUMBER
            }
          },
          text: 'attach analog input [NAME] to pin A[PIN]'
        },
        {
          opcode: 'pinMode',
          blockType: BlockType.COMMAND,
          arguments: {
            PIN: {
              type: ArgumentType.NUMBER
            },
            MODE: {
              type: ArgumentType.STRING,
              menu: 'pinMode'
            }
          },
          text: 'set pin [PIN] mode to [MODE]'
        },
        {
          opcode: 'digitalWrite',
          blockType: BlockType.COMMAND,
          arguments: {
            PIN: {
              type: ArgumentType.NUMBER
            },
            VALUE: {
              type: ArgumentType.NUMBER,
              menu: 'digitalState'
            }
          },
          text: 'digital write pin [PIN] to [VALUE]'
        },
        {
          opcode: 'digitalRead',
          blockType: BlockType.BOOLEAN,
          arguments: {
            PIN: {
              type: ArgumentType.NUMBER
            },
            VALUE: {
              type: ArgumentType.NUMBER,
              menu: 'digitalState',
              default: 1
            }
          },
          text: 'pin [PIN] is [VALUE]'
        },
        {
          opcode: 'analogWrite',
          blockType: BlockType.COMMAND,
          arguments: {
            PIN: {
              type: ArgumentType.NUMBER
            },
            VALUE: {
              type: ArgumentType.NUMBER
            }
          },
          text: 'analog write pin [PIN] to [VALUE]'
        },
        {
          opcode: 'analogRead',
          blockType: BlockType.REPORTER,
          arguments: {
            PIN: {
              type: ArgumentType.NUMBER
            }
          },
          text: 'analog pin [PIN]'
        }
      ]
    }
  }

  rpc (method, params) {
    const http = new XMLHttpRequest();
    const url = 'http://localhost:4000';
    http.open('POST', url, false);
    http.setRequestHeader('Content-Type', 'application/json');
    http.setRequestHeader('Accept', 'application/json');
    http.send(JSON.stringify({
      jsonrpc: '2.0',
      id:      1,
      method:  method,
      params:  params
    }));
    return JSON.parse(http.responseText).result;
  }

  attachDigitalOutput (args, util) {
    const NAME = args.NAME;
    const PIN = Number(args.PIN);
    const r = util;
    console.log(Object.getOwnPropertyNames(r).map(function (p) {
      if (p[0] == '_') {
        return p + ': (private)';
      } else {
        return p + ': ' + (typeof r[p]);
      }
    }));
  }

  attachDigitalInput (args, util) {
    const NAME = args.NAME;
    const PIN = Number(args.PIN);
  }

  attachPWMOutput (args, util) {
    const NAME = args.NAME;
    const PIN = Number(args.PIN);
  }

  attachAnalogInput (args, util) {
    const NAME = args.NAME;
    const PIN = Number(args.PIN);
  }

  addDigitalOutput () {
		console.log('addDigitalOutput');
    this.outputs.push(prompt('name of new digital output'));
  }

  digitalOutputs () {
    return this.outputs;
  }

  digitalInputs () {
    return ['digital input 1'];
  }

  pwmOutputs () {
    return ['pwm output 1'];
  }

  analogInputs () {
    return ['analog input 1'];
  }

  pinMode (args, util) {
    const PIN = Number(args.PIN);
    const MODE = args.MODE;

    switch (MODE) {
      case 'INPUT':
        this.rpc('set_pin_mode_digital_input', [PIN]);
        break;
      case 'INPUT_PULLUP':
        this.rpc('set_pin_mode_digital_input_pullup', [PIN]);
        break;
      case 'OUTPUT':
        this.rpc('set_pin_mode_digital_output', [PIN]);
        break;
      case 'PWM':
        this.rpc('set_pin_mode_pwm_output', [PIN]);
        break;
    };
  }

  digitalWrite (args, util) {
    const PIN = Number(args.PIN);
    const VALUE = Number(args.VALUE);
    this.rpc('digital_write', [PIN, VALUE]);
  }

  digitalRead (args, util) {
    const PIN = Number(args.PIN);
    const VALUE = Number(args.VALUE);
    return this.rpc('digital_read', [PIN]) == VALUE;
  }

  analogWrite (args, util) {
    const PIN = Number(args.PIN);
    const VALUE = Number(args.VALUE);
    this.rpc('pwm_write', [PIN, VALUE]);
  }

  analogRead (args, util) {
    const PIN = Number(args.PIN);
    return this.rpc('analog_read', [PIN]);
  }
}

//Scratch.extensions.register(new Arduino());
module.exports = Arduino;
