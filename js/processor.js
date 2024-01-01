var z = 0;
class WorkletProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputs, outputs, parameters) {
    // audio processing code here.

    const sourceLimit = Math.min(inputList.length, outputList.length);

    for (let inputNum = 0; inputNum < sourceLimit; inputNum++) {
      const input = inputList[inputNum];
      const output = outputList[inputNum];
      const channelCount = Math.min(input.length, output.length);

      for (let channelNum = 0; channelNum < channelCount; channelNum++) {
        input[channelNum].forEach((sample, i) => {
          // Manipulate the sample
          output[channelNum][i] = sample;
        });
      }
    };
    
    console.log(`WorkletProcessor ${z++}`);
    return true;
  }
}

registerProcessor('worklet-processor', WorkletProcessor);