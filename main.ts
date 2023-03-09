/**
 * Beta version of extension to allow audio record / playback on a V2 microbit
 * 
 * Press BUTTON A to start recording
 * 
 * Press BUTTON B to stop recording
 * 
 * Press A+B to replay
 * 
 * **********************************************
 * 
 * * Max record time approx 3 seconds!!!  *
 * 
 * **********************************************
 */
input.onButtonPressed(Button.A, function () {
    codalAudio.record()
    basic.showIcon(IconNames.EigthNote)
})
input.onButtonPressed(Button.AB, function () {
    codalAudio.play()
})
input.onButtonPressed(Button.B, function () {
    codalAudio.stop()
    basic.showIcon(IconNames.Yes)
})
basic.showIcon(IconNames.StickFigure)
codalAudio.setMicrophoneGain(AudioGainEnum.High)
