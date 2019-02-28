// CODE here for your Lambda Classes


class person {
    constructor(Att){
        this.name = Att.name;
        this.age = Att.age;
        this.location = Att.location;
        this.gender = Att.gender;
    };

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    };
}; //person


class instructor extends person {
    constructor(InAtt){
        super(InAtt)
        this.specialty = InAtt.specialty;
        this.favLanguage = InAtt.favLanguage;
        this.catchPhrase = InAtt.catchPhrase;
    };

    demo() {
        return console.log(`Today we are learning about ${subject}`);
    };

    grade() {
        return console.log(`${student.name} receives a perfect score on ${subject}`);
    };
};//instructor


class student extends person {
    constructor(StAtt){
        super(StAtt)
        this.previousBackground = StAtt.previousBackground;
        this.className = StAtt.className;
        this.favSubject= StAtt.favSubject;
    };

    listsSubjects(){
        return console.log(`${student.name}'s favorite subjects are ${subject1}, ${subject2}, ${subject3}`);
    };

    PRAssignments(){
        return console.log(`${student.name} has submitted a PR for ${subject}`)
    };

    sprintChallenge(){
        return console.log(`${student.name} has begun sprint challenge on ${student.subject}`);
    }

};//student



class projectManager extends instructor {
    constructor(PMAtt){
        super(PMAtt)
        this.gradClassName = PMAtt.gradClassName;
        this.favInstructor = PMAtt.favInstructor;
    };

    standUp(channel){
        return console.log(`${projectManager.name} announces to ${channel}, @channel standby times!​​​​​`);
    }

    debugsCode(){
        return console.log(`${projectManager.name} debugs ${student.name}'s code on ${subject}`);
    }
};//projectManager




const fred = new projectManager({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
  });

  const john = new instructor({
    name: 'John',
    location: 'Florida',
    age: 27,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'full stack',
  });

  const alex = new student({
    name: 'Alex',
    location: 'North pole',
    age: 17,
    gender: 'female',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    favSubject: 'JavaScript',
  });

  const trey = new projectManager({
    name: 'Trey',
    location: 'Georgia',
    age: 57,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Game dev', 
  });

  console.log(alex.sprintChallenge());