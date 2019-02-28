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

    demo(subject) {
        return console.log(`Today we are learning about ${subject}`);
    };

    grade(name, subject) {
        return console.log(`${name} receives a perfect score on ${subject}`);
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
        return console.log(`${student.name}'s favorite subjects are ${this.favSubject}`);
    };

    PRAssignments(subject){
        return console.log(`${student.name} has submitted a PR for ${subject}`)
    };

    sprintChallenge(subject){
        return console.log(`${student.name} has begun sprint challenge on ${subject}`);
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

    debugsCode(student, subject){
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
    catchPhrase: `YOOOOOOO`,
  });

  const john = new instructor({
    name: 'John',
    location: 'Florida',
    age: 27,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'full stack',
    catchPhrase: `YEHAW`,
  });

  const alex = new student({
    name: 'Alex',
    location: 'North pole',
    age: 17,
    gender: 'female',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    favSubject: 'JavaScript',
    catchPhrase: `WEEWOOOOO`,
  });

  const trey = new projectManager({
    name: 'Trey',
    location: 'Georgia',
    age: 57,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Game dev', 
    catchPhrase: 'HEEEHOOOOO',
  });

  console.log(alex.sprintChallenge('HTML'));
  console.log(alex.PRAssignments('JavaScript'));
  console.log(john.demo('Inheritance'));
  console.log(trey.grade('alex', 'JavaScript' ));