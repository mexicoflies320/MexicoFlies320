function checkAnswers() {
    const answers = {
        n1normA319: 100,
        n1normA320: 100,
        n1normA321: 100,
        n1normNEO: 100,
        n1permNEO: 105,
        n2normA319: 100,
        n2normA320: 100,
        n2normA321: 100,
        n2normNEO: 100,
        n2permNEO: 105,
        toGoAroundA319: 635,
        toGoAroundA320: 635,
        toGoAroundA321: 650,
        toGoAroundNEO: 1083,
        mctA319: 610,
        mctA320: 610,
        mctA321: 610,
        mctNEO: 1043,
        startingA319: 635,
        startingA320: 635,
        startingA321: 635,
        startingNEO: 1083,
        minOilQtybNEO: 16.5,
        maxContTempA319: 155,
        maxContTempA320: 155,
        maxContTempA321: 155,
        maxContTempNEO: 151,
        maxTransientTempA319: 165,
        maxTransientTempA320: 165,
        maxTransientTempA321: 165,
        minStartTempA319: -40,
        minStartTempA320: -40,
        minStartTempA321: -40,
        minStartTempNEO: -40,
        minIDLETempA319: -10,
        minIDLETempA320: -10,
        minIDLETempA321: -10,
        minTakeoffTempA319: 50,
        minTakeoffTempA320: 50,
        minTakeoffTempA321: 50,
        minTakeoffTempNEO: 52,
        minOilQtyA319: 11,
        minOilQtyA320: 11,
        minOilQtyA321: 11,
        minOilQtyNEO: 14,
        minOilPressureA319: 60,
        minOilPressureA320: 60,
        minOilPressureA321: 60,
        minOilPressureNEO: 65,
        maxOilPressureNEO: 270,
        cleanMin: -2,
        cleanMax: 2.5,
        otherMin: 0,
        otherMax: 2,
        runwaySlopeA319: 2,
        runwaySlopeA320: 2,
        runwaySlopeA321: 2,
        runwaySlopeNEO: 2,
        runwayAltitudeA319: 9200,
        runwayAltitudeA320: 14100,
        runwayAltitudeA321: 14100,
        runwayAltitudeNEO: 14100,
        nominalRunwayWidthA319: 45,
        nominalRunwayWidthA320: 45,
        nominalRunwayWidthA321: 45,
        nominalRunwayWidthNEO: 45,
        minimalRunwayWidthA319: 30,
        minimalRunwayWidthA320: 30,
        minimalRunwayWidthA321: 30,
        minimalRunwayWidthNEO: 30,
        maxDemoWindTOA319: 38,
        maxDemoWindTOA320: 38,
        maxDemoWindTOA321: 38,
        maxDemoWindTONEO: 38,
        maxTailwindTOA319: 15,
        maxTailwindTOA320: 15,
        maxTailwindTOA321: 15,
        maxTailwindTONEO: 15,
        maxWindPaxDoorA319: 65,
        maxWindPaxDoorA320: 65,
        maxWindPaxDoorA321: 65,
        maxWindPaxDoorNEO: 65,
        cargoDoorLimitA319: 65,
        cargoDoorLimitA320: 65,
        cargoDoorLimitA321: 65,
        cargoDoorLimitNEO: 65,
        vmoA319: 350,
        vmoA320: 350,
        vmoA321: 350,
        vmoNEO: 350,
        mmoA319: 0.82,
        mmoA320: 0.82,
        mmoA321: 0.82,
        mmoNEO: 0.82,
        flaps1A319Input: 230,
        flaps1A320Input: 230,
        flaps1A321Input: 235,
        flaps1NEOInput: 238,
        flaps1F_A319Input: 215,
        flaps1F_A320Input: 215,
        flaps1F_A321Input: 225,
        flaps1F_NEOInput: 225,
        flaps2_A319Input: 200,
        flaps2_A320Input: 200,
        flaps2_A321Input: 215,
        flaps2_NEOInput: 215,
        flaps3_A319Input: 185,
        flaps3_A320Input: 185,
        flaps3_A321Input: 195,
        flaps3_NEOInput: 195,
        flapsFull_A319Input: 177,
        flapsFull_A320Input: 177,
        flapsFull_A321Input: 190,
        flapsFull_NEOInput: 186,
        maxAltitudeFlapsA319: 20000,
        maxAltitudeFlapsA320: 20000,
        maxAltitudeFlapsA321: 20000,
        maxAltitudeFlapsNEO: 20000,
        cockpitWindowOpenMaxSpeedA319Input: 200,
        cockpitWindowOpenMaxSpeedA320Input: 200,
        cockpitWindowOpenMaxSpeedA321Input: 200,
        cockpitWindowOpenMaxSpeedNEOInput: 200,
        maxGroundSpeedA319Input: 195,
        maxGroundSpeedA320Input: 195,
        maxGroundSpeedA321Input: 195,
        maxGroundSpeedNEOInput: 195,
        maxWipersSpeedA319Input: 230,
        maxWipersSpeedA320Input: 230,
        maxWipersSpeedA321Input: 230,
        maxWipersSpeedNEOInput: 230,
        vmclA319Input: 109,
        vmclA320Input: 114,
        vmclA321Input: 114,
        vmclNEOInput: 116,
        maxPositiveDiffInput: 9.0,
        maxNegativeDiffInput: -1.0,
        safetyReliefInput: 8.6,
        mtwA319: 70400,
        mtwA320: 77400,
        mtwA320NEO: 79400,
        mtwA321: 93400,
        mtwA321NEO: 93900,
        mtowbrA319: 70000,
        mtowbrA320: 77000,
        mtowbrA320NEO: 79000,
        mtowbrA321: 93000,
        mtowbrA321NEO: 93500,
        mlwA319: 61000,
        mlwA320: 66000,
        mlwA320NEO: 67400,
        mlwA321: 77800,
        mlwA321NEO: 79200,
        mzfwA319: 57000,
        mzfwA320: 62500,
        mzfwA320NEO: 64300,
        mzfwA321: 73800,
        mzfwA321NEO: 75600,
        mwA319: 35400,
        mwA320: 37230,
        mwA320NEO: 40300,
        mwA321: 47500,
        mwA321NEO: 46300,
        takeoffInput: 100,
        appFGSInput: 200,
        appFPAInput: 250,
        circlingInput: 500,
        ILS_CAT1Input: 160,
        GLS_AUTOLANDInput: 160,
        ILS_CAT2_CAT3Input: 0,
        PARInput: 250,
        manualGoAroundInput: 100,
        allOtherPhasesA319Input: 500,
        allOtherPhasesA320Input: 500,
        allOtherPhasesA321Input: 900,
        allOtherPhasesNEOInput: 900,
        rotorSpeedA319Input: 107,
        maxEGTA319Input: 1090,
        maxEGTA320Input: 1120,
        maxEGTA321Input: 675,
        maxAltitudeEngineStartInput: 20000,
        maxAltitude1PackInput: 22500,
        maxAltitude2PackInput: 15000,
        n1A319Input: 21.4,
        n1A320Input: 21.4,
        n1A321Input: 21.4,
        n1NEOInput: 19,
        egtA319Input: 414,
        egtA320Input: 414,
        egtA321Input: 414,
        egtNEOInput: 550,
        n2A319Input: 57.8,
        n2A320Input: 57.8,
        n2A321Input: 57.8,
        n2NEOInput: 59,
        ffA319Input: 350,
        ffA320Input: 350,
        ffA321Input: 350,
        ffNEOInput: 270,
        eprA319Input: 1.01,
        eprA320Input: 1.01,
        eprA321Input: 1.01,
        thrustQuestion1: "5 minutes", // Correct answer for thrust section question
        thrustQuestion2: "Not limited", // Correct answer for thrust section question
        thrustQuestion3: "10 minutes", // Correct answer for thrust section question
        shaftSpeedQuestion: "105%" // Correct answer for shaft speeds section question
    };

    let score = 0;
    let totalQuestions = 0;

    // Iterate through the answers and check user inputs for number-based questions
    for (const [key, value] of Object.entries(answers)) {
        const inputField = document.getElementById(key);
        if (inputField) {
            totalQuestions++; // Count every question, regardless of input type

            const userInput = parseFloat(inputField.value);

            if (!isNaN(userInput) && userInput === value) {
                inputField.classList.add('correct');
                score++;
            } else {
                inputField.classList.add('wrong');
            }
            inputField.disabled = true;
        }
    }

    // Handle multiple-choice questions
    const allQuestions = document.querySelectorAll('input[type="radio"]');
    const questionGroups = {}; // Track unique question groups by their names

    allQuestions.forEach(option => {
        const questionName = option.name;
        if (!questionGroups[questionName]) {
            questionGroups[questionName] = true; // Mark the question group as counted
            totalQuestions++; // Count each unique question group
        }

        const isCorrect = option.getAttribute("data-correct") === "true";
        if (option.checked) {
            if (isCorrect) {
                score++;
                option.parentElement.style.color = "green";
            } else {
                option.parentElement.style.color = "red";
            }
        }
        option.disabled = true; // Disable all options after checking
    });

    // Show the result based on the score
    const resultDiv = document.getElementById('result');
    const percentage = Math.floor((score / totalQuestions) * 100);

    if (percentage === 100) {
        resultDiv.textContent = `100% You're decent`;
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = `${percentage}% You're trash`;
        resultDiv.style.color = "red";
    }
}

function resetInputs() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.value = '';
        input.classList.remove('correct', 'wrong');
        input.disabled = false;
    });

    const allOptions = document.querySelectorAll('input[type="radio"]');
    allOptions.forEach(option => {
        option.checked = false;
        option.disabled = false;
        option.parentElement.style.color = "";
    });

    document.getElementById('result').textContent = '';
}
