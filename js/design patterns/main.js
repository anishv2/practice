

// JavaScript design patterns
// Structural Patterns


// Decorator
// The Decorator pattern allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class.


class Car {
    cost(){
        return 10000;
    }
}

class SportsCar extends Car {
    cost(){
        return super.cost() + 5000;
    }
}

class LuxuryCar extends Car {
    cost(){
        return super.cost() + 10000;
    }
}


// Adapter
// The Adapter pattern converts the interface of a class into another interface the clients expect. It allows classes to work together that couldn't otherwise because of incompatible interfaces.

class EuropeanPlug {
     charge(){
        console.log("Charging with European plug");
     }
}

class USPlug {
    returnCurrent(){
        console.log("Providing US current");
    }
}

class PlugAdapter extends USPlug {
    charge(){
        this.returnCurrent();
    }
}

const europeanDevice = new EuropeanPlug();
const adapter = new PlugAdapter();
adapter.charge();

// Facade
// The Facade pattern provides a simplified interface to a library, a framework, or any other complex set of classes.

class SubSystemA {
    methodA(){
        console.log("Subsystem method");
    }
}

class SubSystemB {
    methodB(){
        console.log("SubSystemB method");
    }
}

class Facade {
    constructor(){
        this.subsystemA = new SubSystemA();
        this.subsystemB = new SubSystemB();
    }

    operation(){
        this.subsystemA.methodA();
        this.subsystemB.methodB();
    }
}

const facade = new Facade();
facade.operation();


// Composite
// The Composite pattern allows you to compose objects into tree structures to represent part-whole hierarchies, making the individual and the composite objects uniform in treatment.


class Component {
    operation() { 
        throw new Error('Component.operation() must be implemented. ');
    }
}

class Leaf extends Component {
    operation() {
        console.log('Leaf operation');
    }
}

class Composite extends Component {
    constructor() {
        super();
        this.children = [];
    }
    add(component) {
        this.children.push(component);
    }
    remove(component) {
        this.children = this.children. filter (c => c !== component);
    }
    operation() {
        for (const child of this.children) {
            child.operation();
        }
    }
}

// Flyweight
// The Flyweight pattern reduces the memory footprint of an application by sharing as much data as possible with related objects.



class FlyweightFactory { 
    constructor() {
        this.flyweights = {};
    }
    getFlyweight(key) {
    if (!(key in this.flyweights)) {
        this.flyweights [key] = new ConcreteFlyweight (key);
    }
    return this.flyweights [key];
    }
}

class ConcreteFlyweight extends Flyweight {
    constructor(intrinsicState) {
        super();
        this.intrinsicState = intrinsicState;
    }

    operation (extrinsicState) {
    // Implement the operation using intrinsic and extrinsic states
    }
}

 
class Flyweight {
    operation(extrinsicState) {
        throw new Error('Flyweight.operation() must be implemented.');
    }    
}




// Proxy
// The Proxy pattern provides a surrogate or placeholder for another object to control access to it.


class RealSubject { 
    request() {
        console.log('RealSubject request()');
    }
}
class Proxy {
    constructor(realSubject) { 
        this.realSubject = realSubject;
    }
    request() {
        // Add additional functionality before/after forwarding the request 
        console.log('Proxy pre-processing');
        this.realSubject.request();
        console.log('Proxy post-processing');
    }
}


// Usage
const realSubject = new RealSubject(); 
const proxy = new Proxy (realSubject); 
proxy.request();



