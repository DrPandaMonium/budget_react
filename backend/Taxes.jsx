/* federal tax and FICA are always required
there is also state taxes
*/

export function calculateTax(income, bracket) {
    for (let i = 0; i < bracket[0].length; i++) {
        if (income <= bracket[0][i]) {
            return bracket[1][i];
        }
    }

    return bracket[1][bracket[0].length];
}

export const taxes = {
    federal: [[11000, 44725, 95375, 182100, 231250, 578125], [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37]],
    AL: [[4000, 4500, 7000], [0, 0.02, 0.04, 0.05]],
    AK: [[],[0]],
    AZ: [[],[0.025]],
    AR: [],
    CA: [],
    CO: [[], [0.044]],
    CT: [],
    DE: [],
    DC: [],
    FL: [[],[0]],
    GA: [],
    HI: [],
    ID: [[], [0.058]],
    IL: [[], [0.0495]],
    IN: [[], [0.0315]],
    IA: [],
    KS: [],
    KY: [[], [0.045]],
    LA: [],
    ME: [],
    MD: [],
    MA: [],
    MI: [[], [0.0405]],
    MN: [],
    MS: [],
    MO: [],
    MT: [],
    NE: [],
    NV: [[],[0]],
    NH: [[],[0]],
    NJ: [],
    NM: [],
    NY: [],
    NC: [[], [0.0475]],
    ND: [],
    OH: [],
    OK: [],
    OR: [],
    PA: [[], [0.0307]],
    RI: [],
    SC: [],
    SD: [[],[0]],
    TN: [[],[0]],
    TX: [[],[0]],
    UT: [[], [0.0465]],
    VT: [],
    VA: [],
    WA: [[],[0]],
    WV: [],
    WI: [],
    WY: [[],[0]],
};
