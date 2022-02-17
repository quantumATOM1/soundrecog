function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/s_GmcT3od/model.json',modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(){
}