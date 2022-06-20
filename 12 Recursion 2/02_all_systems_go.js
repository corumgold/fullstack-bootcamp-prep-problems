// You are working for NASA because you are super cool!
// It's up to you to write the code that will determine if "all systems are go for launch".
// Your function will receive a deeply nested object. 
// The keys of the object represent the names of the systems on the spacecraft; 
// the values are true if the system is "go" for launch and false otherwise. 
// Your function should return true only if every system is "go" for launch!

let systems = {
    power: {
        batteries: true,
        solarCells: false,
        generator: true,
        fuelCells: true
    },
    telecoms: {
        antennas: {
            highGain: false,
            mediumGain: true,
            lowGain: true
        },
        transmitter: true,
        receiver: true
    },
    attitudeControl: {
        stabilization: {
            spin: true,
            threeAxis: true
        }
    },
    propulsion: {
        engines: {
            engine1: true,
            engine2: true,
            engine3: false
        },
        thrusters: true,
        propellant: true
    },
    environment: {
        cooling: true,
        heating: true,
        lifeSupport: true
    }
};

let solveCount = 1

function allSystemsGo(obj) {
    debugger;
    for (let key in obj) {
        let system = obj[key];
        if (typeof system === 'object') {
            let subSystem = allSystemsGo(system);
            if (!subSystem) return false;
        } 
        if (!system) return false;
    } return true;
}

allSystemsGo(systems); // => false