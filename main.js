function start(){

    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dcYq-7eTh/model.json', modelLoaded);

}

function modelLoaded(){

    console.log("Your Model Has Been Loaded!");
    classifier.classify(gotResults);
}

function gotResults(error, results) {

    if (error) {

        console.error(error);

    }

    else {

    console.log(results);

    ran_r = Math.floor(Math.random()*240) +1;
    ran_b = Math.floor(Math.random()*240) +1;
    ran_g = Math.floor(Math.random()*240) +1;
    
    document.getElementById("result_label").innerHTML='I Can Hear ' + results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy:' + (results[0].confidence * 100).toFixed(2)+"%";
    document.getElementById("result_label").style.color= "rgb("+ran_r+", "+ran_g+", "+ran_b+")";
    document.getElementById("result_confidence").style.color= "rgb("+ran_r+", "+ran_g+", "+ran_b+")";


    img = document.getElementById('img');
    
    


    if(results[0].label=="bird") {
    
        img.src='bird.jpeg';
        

    }

    else if(results[0].label=="cat") {

       img.src='cat.jpeg';
        
    

    }

    else if(results[0].label=="mooo")  {

        img.src='cow.jpeg';
       
    

    }

    else {

        img.src='dog.jpeg';
        
        
    

    }
    
    }
}