import React from 'react';
import './App.css';
import Tone from 'tone';
import { CanvasSpace, Pt, Group } from "pts";
import $ from "jquery";

function App() {
  return (
    <div className="App">
      <header className="App-header" id='hello'>
        {/* var synth = new Tone.Synth().toMaster();
        synth.triggerAttackRelease("C4", "8n"); */}
        <input type="text" value="75" className="dial" />

        <script>
          $(function() {
            $(".dial").knob();
          });
        </script> 
      </header>
    </div>
  );
}




// var space = new CanvasSpace("#hello");
// space.setup({ bgcolor: "#fff" });
// SOUND
// var reverb = new Tone.Reverb(10);
// var synth = new Tone.DuoSynth().connect('reverb');
// synth.triggerAttackRelease("B2", "1n").toMaster();
// reverb.connect(synth.triggerAttackRelease("B2", "1n"));
// synth.toMaster();

// Nice sounding: DuoSynth, MonoSynth, NoiseSynth, PolySynth

// var freeverb = new Tone.Freeverb().toMaster();
// freeverb.dampening.value = 1000;
// //routing synth through the reverb
// var synth1 = new Tone.AMSynth().connect(freeverb);
// synth1.triggerAttackRelease("B2", "1n");

// var reverb = new Tone.Freeverb(1).toMaster(); 
// var crush = new Tone.BitCrusher(4).connect(reverb);
// var synth = new Tone.DuoSynth().connect(crush);
// synth.triggerAttackRelease("B2", "1n");


export default App;
