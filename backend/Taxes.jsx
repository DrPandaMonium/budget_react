/* federal tax and FICA are always required
there is also state taxes
*/

export function calculateTax(income, bracket) {

    for (let i = 0; i < bracket[0].length; i++) {
        if (income <= bracket[0][i]) {
            if (bracket[2] != null) {
                return ((bracket[1][i] * income) + (bracket[2][i]));
            } else {
                return bracket[1][i] * income;
            }
        }
    }

    if (bracket[2] != null) {
        return ((bracket[1][bracket[0].length] * income) + (bracket[2][bracket[0].length]));
    } else {
        return bracket[1][bracket[0].length] * income;
    }
};

export function sumValues(obj) {
    return Object.values(obj).map((item) => parseFloat(item)).filter((n) => isNaN(n) === false).reduce((a, b) => a + b)
};

export function taxesPaid(budget, bracket) {
    let total;

    for (let i = 0; i < bracket[0].length; i++) {
        total = (budget / (1 - bracket[1][i]));

        if (total <= bracket[0][i]) {
            return bracket[1][i];
        }
    }

    return bracket[1][bracket[0].length];
};

export function calculateIncome(budget, fedTax, stateTax) {
    return (budget / (1 - (fedTax + 0.0765 + stateTax))).toFixed(2);
};

export const timePeriod = {
    yearly: 1,
    monthly: 12,
    weekly: 52,
    daily: 365
};

// values used are from efile.com tax bracket rates and forms for single filers
export const taxes = {
    federal: [[11000, 44725, 95375, 182100, 231250, 578125], [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37]],
    AL: [[4000, 4500, 7000], [0, 0.02, 0.04, 0.05]],
    AK: [[],[0]],
    AZ: [[],[0.025]],
    AR: [[5099, 10299, 14699, 24299.99], [0, 0.02, 0.03, 0.034, 0.049]],
    CA: [[10099, 23942, 37788, 52455, 66295, 338639, 406364, 677275], [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123], [0, 100.99, 377.85, 931.69, 1811.71, 2918.91, 28246.9, 35222.58, 65835.52]],
    CO: [[], [0.044]],
    CT: [[10000, 50000, 100000, 200000, 250000, 500000], [0.03, 0.05, 0.055, 0.06, 0.065, 0.069, 0.0699]],
    DE: [[2000, 5000, 10000, 20000, 25000, 60000], [0, 0.022, 0.039, 0.048, 0.052, 0.055, 0.066], [0, 0, 66, 261, 741, 1001, 2943.50]],
    DC: [[10000, 40000, 60000, 250000, 500000, 100000], [0.04, 0.06, 0.065, 0.085, 0.0925, 0.0975, 0.1075],[0, 400, 2200, 3500, 19650, 42775, 91525]],
    FL: [[],[0]],
    GA: [[705, 2250, 3750, 5250, 7000], [0.01, 0.02, 0.03, 0.04, 0.05, 0.0575], [0, 8, 38, 83, 143, 230]],
    HI: [[2400, 4800, 9600, 14400, 19200, 24000, 36000, 48000, 150000, 175000, 200000], [0.014, 0.032, 0.055, 0.064, 0.068, 0.072, 0.076, 0.079, 0.0825, 0.09, 0.1, 0.11], [0, 34, 110, 374, 682, 1008, 1354, 226, 3214, 11629, 13879, 16379]],
    ID: [[], [0.058]],
    IL: [[], [0.0495]],
    IN: [[], [0.0315]],
    IA: [[6000, 30000, 75000], [0.044, 0.0482, 0.057, 0.06], [0, 264, 1420.8, 3985.8]],
    KS: [[15000, 30000], [0.031, 0.0525, 0.057], [0, 465, 1252.5]],
    KY: [[], [0.045]],
    LA: [[12500, 50000], [0.0185, 0.035, 0.0425], [0, 231.25, 1543.75]],
    ME: [[24500, 58050], [0.058, 0.0675, 0.0715], [0, 1421, 3686]],
    MD: [[1000, 2000, 3000, 100000, 125000, 150000, 250000], [0.02, 0.03, 0.04, 0.0475, 0.05, 0.0525, 0.055, 0.0575], [0, 20, 50, 90, 4697.5, 5947.5, 7260, 12760]],
    MA: [[0], [0.05]],
    MI: [[], [0.0405]],
    MN: [[30070, 98760, 183340], [0.0535, 0.068, 0.0785, 0.0985], [0, 1608.75, 6715.68, 14392.19]],
    MS: [[5000, 10000], [0, 0.04, 0.05]],
    MO: [[1207, 2414, 3621, 4828, 6035, 7242, 8449], [0, 0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.0495], [0, 0, 24, 54, 90, 132, 180, 234]],
    MT: [[3600, 6300, 9700, 13000, 16800, 21600], [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.0675], [0, 36, 99, 196, 326, 494, 656]],
    NE: [[3700, 22170, 35730], [0.0246, 0.0351, 0.0501, 0.0664], [0, 91.02, 739.32, 1418.68]],
    NV: [[],[0]],
    NH: [[],[0]],
    NJ: [[20000, 35000, 40000, 75000, 500000, 1000000], [0.014, 0.0175, 0.035, 0.05525, 0.0637, 0.0897, 0.1075], [0, 70, 682.5, 1492.5, 2126.25, 15126.25, 32926.25]],
    NM: [[5500, 11000, 16000, 210000], [0.017, 0.032, 0.047, 0.049, 0.059], [0, 92.5, 269.5, 504.5, 10010.5]],
    NY: [[8500, 11700, 13900, 80650, 215400, 1077550, 5000000, 25000000], [0.04, 0.045, 0.0525, 0.0585, 0.0625, 0.0685, 0.0965, 0.103, 0.109],[0, 340, 484, 600, 4504, 12926, 71984, 450500, 2510500]],
    NC: [[], [0.0475]],
    ND: [[41775, 101050, 210825, 458350], [0.01, 0.0204, 0.0227, 0.0264, 0.029], [0, 459.53, 1668.74, 4160.63, 10695.29]],
    OH: [[26050, 46100, 92150, 115300], [0, 0.02765, 0.03226, 0.03688, 0.0399], [0, 360.69, 915.07, 2400.64, 3254.41]],
    OK: [[1000, 2500, 3750, 4900, 7200], [0.025, 0.075, 0.0175, 0.0275, 0.0375, 0.0475], [0, 2.50, 13.75, 35.63, 67.25, 153.5]],
    OR: [[4050, 10200, 125000], [0.0475, 0.0675, 0.0875, 0.099], [0, 192, 607, 10652]],
    PA: [[], [0.0307]],
    RI: [[73450, 166950], [0.0375, 0.0475, 0.0599], [0, 2754.38, 7195.63]],
    SC: [[3200, 6410, 9620, 12820, 16040], [0, 0.03, 0.04, 0.05, 0.06, 0.07], [0, 96, 160, 256, 385, 545]],
    SD: [[],[0]],
    TN: [[],[0]],
    TX: [[],[0]],
    UT: [[], [0.0465]],
    VT: [[42150, 102200, 213150], [0.0335, 0.066, 0.076, 0.0875], [0, 1412, 5375, 13808]],
    VA: [[3000, 5000, 17000], [0.02, 0.03, 0.05, 0.0575], [0, 60 ,120 ,720]],
    WA: [[],[0]],
    WV: [[10000, 25000, 40000, 60000], [0.0236, 0.0315, 0.0354, 0.0472, 0.0512], [0, 236, 708.5, 1239.5, 2183.5]],
    WI: [[12760, 25520, 280950], [0.0354, 0.0465, 0.053, 0.0765], [0, 451.7, 1045.04, 14582.83]],
    WY: [[],[0]],
};
