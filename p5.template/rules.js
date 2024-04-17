class Start extends Scene {
    create() {
        this.engine.setTitle(this.engine.storyData.Title); // TODO: replace this text using this.engine.storyData to find the story title.
        this.engine.addChoice("Begin the story");
    }

    handleChoice() {
        this.engine.gotoScene(Location, this.engine.storyData.InitialLocation); // TODO: replace this text by the initial location of the story.
    }
}

let keyFound = false
let inDoorRoom = false
class Location extends Scene {
    create(key) {
        let locationData = key; // TODO: use `key` to get the data object for the current story location.
        this.engine.show(this.engine.storyData.Locations[locationData].Body); // TODO: replace this text by the Body of the location data.

        if(this.engine.storyData.Locations[locationData].choice =! null) { // TODO: check if the location has any Choices.
            for(let choice of [this.engine.storyData.Locations[locationData].choice]) { // TODO: loop over the location's Choices.
                let i = this.engine.storyData.Locations[locationData].Amount;
                if (this.engine.storyData.Locations[locationData].keyFound == "yes"){
                    console.log("key found");
                    keyFound = true
                }
                if (this.engine.storyData.Locations[locationData].KeyRoom == "yes") {
                    console.log("in door room")
                    inDoorRoom = true
                } else {
                    inDoorRoom = false
                }
                if ((inDoorRoom) && keyFound ) {
                    this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[0].Text, this.engine.storyData.Locations[locationData].Choices[0].Target);
                    this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[2].Text, this.engine.storyData.Locations[locationData].Choices[2].Target);
                } else if (inDoorRoom && keyFound == false){
                    this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[0].Text, this.engine.storyData.Locations[locationData].Choices[0].Target);
                    this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[1].Text, this.engine.storyData.Locations[locationData].Choices[1].Target);
                } else if (i == "four"){
                    this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[0].Text, this.engine.storyData.Locations[locationData].Choices[0].Target);
                    this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[1].Text, this.engine.storyData.Locations[locationData].Choices[1].Target);
                    this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[2].Text, this.engine.storyData.Locations[locationData].Choices[2].Target);
                    this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[3].Text, this.engine.storyData.Locations[locationData].Choices[3].Target);
                    
                } else if (i == "three") {
                    this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[0].Text, this.engine.storyData.Locations[locationData].Choices[0].Target);
                    this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[1].Text, this.engine.storyData.Locations[locationData].Choices[1].Target);
                    this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[2].Text, this.engine.storyData.Locations[locationData].Choices[2].Target);
                } else if (i == "two"){
                    this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[0].Text, this.engine.storyData.Locations[locationData].Choices[0].Target);
                    this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[1].Text, this.engine.storyData.Locations[locationData].Choices[1].Target);
                } else if (i == "one") {
                    this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[0].Text, this.engine.storyData.Locations[locationData].Choices[0].Target);
                }
                // if (this.engine.storyData.Locations[locationData].Body != "Grass, don't forget to check for ticks!") {
                //     this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[0].Text, this.engine.storyData.Locations[locationData].Choices[0].Target); // TODO: use the Text of the choice.                
                //     if (Array.length(this.engine.storyData.Locations[locationData].Choices) == 3) {
                //         this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[1].Text, this.engine.storyData.Locations[locationData].Choices[1].Target); // TODO: use the Text of the choice.                
                //         this.engine.addChoice(this.engine.storyData.Locations[locationData].Choices[2].Text, this.engine.storyData.Locations[locationData].Choices[2].Target); // TODO: use the Text of the choice.                
                //     }
            }// TODO: add a useful second argument to addChoice so that the current code of handleChoice below works.
        } else {
            this.engine.addChoice("The end.")
        }
    }

    handleChoice(choice) {
        if(choice) {
            this.engine.show("&gt; "+choice);
            this.engine.gotoScene(Location, choice);
        } else {
            this.engine.gotoScene(End);
        }
    }
}

class End extends Scene {
    create() {
        this.engine.show("<hr>");
        this.engine.show(this.engine.storyData.Credits);
    }
}

Engine.load(Start, 'myStory.json');