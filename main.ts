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
basic.showIcon(IconNames.Diamond)
codalAudio.setMicrophoneGain(AudioGainEnum.High)
