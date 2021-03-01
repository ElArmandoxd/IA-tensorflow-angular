import { Component, ViewChild, OnInit } from '@angular/core';
import { DrawableDirective } from '../../drawable.directive';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export default class NumbersComponent implements OnInit {

  linearModel: tf.Sequential;
  prediction: any;
  predictedNumber: string;
  model: tf.Model;
  predictions: any;
  render: boolean;

  @ViewChild(DrawableDirective) canvas;

  ngOnInit() {
    this.loadModel();
  }
  //// LOAD PRETRAINED KERAS MODEL ////

  async loadModel() {
    if(this.render == true){
      window.location.reload();
      this.render = false;
    }
    else{
      this.render = true;
      this.model = await tf.loadModel('../assets/model.json');
    }
  }

  async predict(imageData: ImageData) {

    const pred = await tf.tidy(() => {

      // Convert the canvas pixels to 
      let img = tf.fromPixels(imageData, 1);
      img = img.reshape([1, 28, 28, 1]);
      img = tf.cast(img, 'float32');

      // Make and format the predications
      if(this.model){
        const output = this.model.predict(img) as any;

        this.predictions = Array.from(output.dataSync());
        for (let i = 0; i < this.predictions.length; i++) {
          if (this.predictions[i] == "1") {
            this.predictedNumber = i.toString();
          }
        }
        if (this.predictedNumber == "") {
          this.predictedNumber = ":(";
        }
      }
      else{
        window.location.reload();
      }
    });

  }
  clear() {
    this.predictedNumber = "";
  }

}
