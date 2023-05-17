(() => {

    // min = 0,
    // medium = 1
    // max = 2
    // enum AudioLevel {
    //     min,
    //     medium,
    //     max
    // }

    enum AudioLevel {
        min = 1,
        medium,
        medium2,
        max = 10
    }

    let currentAudio:AudioLevel = AudioLevel.max;

    console.log(currentAudio);
    console.log(AudioLevel);

})()