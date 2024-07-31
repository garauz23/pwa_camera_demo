import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview'

@Component({
  selector: 'app-camera-preview',
  templateUrl: './camera-preview.page.html',
  styleUrls: ['./camera-preview.page.scss'],
})
export class CameraPreviewPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  async startCamera() {
    const cameraPreviewOptions = {
      position: 'rear',
      parent: 'cameraPreview', // The id of the parent element
      className: 'cameraPreview', // The class name of the preview element
      toBack: false,
      disableExifHeaderStripping: true
    };

    CameraPreview.start(cameraPreviewOptions);
  }

  async stopCamera() {
    await CameraPreview.stop();
  }

  async takePicture() {
    const result = await CameraPreview.capture({
      quality: 90,
    });
    console.log(result.value);
  }

  async switchCamera() {
    await CameraPreview.flip();
  }
}
