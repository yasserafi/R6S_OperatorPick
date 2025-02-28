const operators = {
    attackers: [
        {
            name: 'Striker',
            primary: [
                { name: 'M4', image: 'images/weapons/M4.avif' },
                { name: 'M249', image: 'images/weapons/M249.avif' }
            ],
            secondary: [
                { name: '5.7 USG', image: 'images/weapons/57_USG.avif' },
                { name: 'ITA12S', image: 'images/weapons/ITA12S.avif' },
            ],
            gadgets: [
                { name: 'Breach Charge', image: 'images/gadgets/breach.avif' },
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' },
                { name: 'Frag Grenade', image: 'images/gadgets/frag.avif' },
                { name: 'HARD BREACH CHARGE', image: 'images/gadgets/hard.avif' },
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' },
                { name: 'Stun Grenade', image: 'images/gadgets/stun.avif' },
                { name: 'Impact EMP Grenade', image: 'images/gadgets/emp.png' }
            ],
            image: 'images/operators/striker.avif'
        },
        {
            name: 'Sledge',
            primary: [
                { name: 'L85A2', image: 'images/weapons/L85A2.avif' },
                { name: 'M590A1', image: 'images/weapons/M590A1.avif' }
            ],
            secondary: [
                { name: 'P226 Mk 25', image: 'images/weapons/P226_MK_25.avif' },
            ],
            gadgets: [
                { name: 'Frag Grenade', image: 'images/gadgets/frag.avif' },
                { name: 'Stun Grenade', image: 'images/gadgets/stun.avif' },
                { name: 'Impact EMP Grenade', image: 'images/gadgets/emp.png' }
            ],
            image: 'images/operators/sledge.png'
        },
        {
            name: 'Thatcher',
            primary: [
                { name: 'AR33', image: 'images/weapons/AR33.avif' },
                { name: 'L85A2', image: 'images/weapons/L85A2.avif' },
                { name: 'M590A1', image: 'images/weapons/M590A1.avif' }
            ],
            secondary: [
                { name: 'P226 Mk 25', image: 'images/weapons/P226_MK_25.avif' },
            ],
            gadgets: [
                { name: 'Breach Charge', image: 'images/gadgets/breach.avif' },
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' }
            ],
            image: 'images/operators/thatcher.avif'
        },
        {
            name: 'Ash',
            primary: [
                { name: 'G36C', image: 'images/weapons/G36C.avif' },
                { name: 'R4-C', image: 'images/weapons/R4-C.avif' }
            ],
            secondary: [
                { name: '5.7 USG', image: 'images/weapons/57_USG.avif' },
                { name: 'M45 MEUSOC', image: 'images/weapons/M45_MEUSOC.avif' }
            ],
            gadgets: [
                { name: 'Breach Charge', image: 'images/gadgets/breach.avif' },
                { name: 'Flashbang', image: 'images/gadgets/stun.avif' }
            ],
            image: 'images/operators/ash.png'
        },
        {
            name: 'Thermite',
            primary: [
                { name: '556XI', image: 'images/weapons/556XI.avif' },
                { name: 'M1014', image: 'images/weapons/M1014.avif' }
            ],
            secondary: [
                { name: '5.7 USG', image: 'images/weapons/57_USG.avif' },
                { name: 'M45 MEUSOC', image: 'images/weapons/M45_MEUSOC.avif' }
            ],
            gadgets: [
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' },
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' }
            ],
            image: 'images/operators/thermite.png'
        },
        {
            name: 'Twitch',
            primary: [
                { name: 'F2', image: 'images/weapons/F2.avif' },
                { name: '417', image: 'images/weapons/417.avif' },
                { name: 'SG-CQB', image: 'images/weapons/SG-CQB.avif' }
            ],
            secondary: [
                { name: 'P9', image: 'images/weapons/P9.avif' },
                { name: 'LFP586', image: 'images/weapons/LFP586.avif' }
            ],
            gadgets: [
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' },
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' }
            ],
            image: 'images/operators/twitch.png'
        },
        {
            name: 'Montagne',
            primary: [
                { name: 'LE ROC SHIELD', image: 'images/weapons/leroc.avif' },
            ],
            secondary: [
                { name: 'P9', image: 'images/weapons/P9.avif' },
                { name: 'LFP586', image: 'images/weapons/LFP586.avif' }
            ],
            gadgets: [
                { name: 'HARD BREACH CHARGE', image: 'images/gadgets/hard.avif' },
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' },
                { name: 'Impact EMP Grenade', image: 'images/gadgets/emp.png' }
            ],
            image: 'images/operators/monty.png'
        },
        {
            name: 'Glaz',
            primary: [
                { name: 'OTs-03', image: 'images/weapons/OTs-03.avif' },
            ],
            secondary: [
                { name: 'PMM', image: 'images/weapons/PMM.avif' },
                { name: 'Gonne-6', image: 'images/weapons/GON6.avif' },
                { name: 'Bearing 9', image: 'images/weapons/Bearing_9.avif' }
            ],
            gadgets: [
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' },
                { name: 'Frag Grenade', image: 'images/gadgets/frag.avif' },
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' }
            ],
            image: 'images/operators/glaz.png'
        },
        {
            name: 'Fuze',
            primary: [
                { name: 'AK-12', image: 'images/weapons/AK-12.avif' },
                { name: '6P41', image: 'images/weapons/6P41.avif' },
                { name: 'Ballistic Shield', image: 'images/weapons/Ballistic_Shield.webp' }
            ],
            secondary: [
                { name: 'PMM', image: 'images/weapons/PMM.avif' },
                { name: 'GSh-18', image: 'images/weapons/GSh-18.avif' }
            ],
            gadgets: [
                { name: 'Breach Charge', image: 'images/gadgets/breach.avif' },
                { name: 'Hard Breach Charge', image: 'images/gadgets/hard.avif' },
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' }
            ],
            image: 'images/operators/fuze.png'
        },
        {
            name: 'Iq',
            primary: [
                { name: 'AUG A2', image: 'images/weapons/AUG_A2.avif' },
                { name: '552 Commando', image: 'images/weapons/552_Commando.avif' },
                { name: 'G8A1', image: 'images/weapons/G8A1.avif' }
            ],
            secondary: [
                { name: 'P12', image: 'images/weapons/P12.avif' },
            ],
            gadgets: [
                { name: 'Breach Charge', image: 'images/gadgets/breach.avif' },
                { name: 'Frag Grenade', image: 'images/gadgets/frag.avif' },
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' }
            ],
            image: 'images/operators/iq.png'
        },
        {
            name: 'Blitz',
            primary: [
                { name: 'G52-Tactical Shield', image: 'images/weapons/bltz.webp' },
            ],
            secondary: [
                { name: 'P12', image: 'images/weapons/P12.avif' },
            ],
            gadgets: [
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' },
                { name: 'Breach Charge', image: 'images/gadgets/breach.avif' }
            ],
            image: 'images/operators/blitz.png'
        },
        {
            name: 'Buck',
            primary: [
                { name: 'C8-SFW', image: 'images/weapons/C8-SFW.avif' },
                { name: 'CAMRS', image: 'images/weapons/CAMRS.avif' }
            ],
            secondary: [
                { name: 'Mk1 9mm', image: 'images/weapons/Mk1_9mm_BI.avif' },
            ],
            gadgets: [
                { name: 'Stun Grenade', image: 'images/gadgets/stun.avif' },
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' },
            ],
            image: 'images/operators/buck.png'
        },
        {
            name: 'BlackBeard',
            primary: [
                { name: 'H.U.L.L. ADAPTABLE SHIELD', image: 'images/weapons/bbshield.png' },
            ],
            secondary: [
                { name: 'Mk17 CQB', image: 'images/weapons/Mk17_CQB.avif' },
                { name: 'SR-25', image: 'images/weapons/SR-25.avif' },
            ],
            gadgets: [
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' },
                { name: 'Frag Grenade', image: 'images/gadgets/frag.avif' }
            ],
            image: 'images/operators/bb.avif'
        },
        {
            name: 'CAPITÃO',
            primary: [
                { name: 'M249', image: 'images/weapons/M249.avif' },
                { name: 'PARA-308', image: 'images/weapons/PARA-308.avif' }
            ],
            secondary: [
                { name: 'Gonne-6', image: 'images/weapons/GON6.avif' },
                { name: 'PRB92', image: 'images/weapons/PRB92.avif' },
            ],
            gadgets: [
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' },
                { name: 'Hard Breach Charge', image: 'images/gadgets/hard.avif' },
                { name: 'Impact EMP Grenade', image: 'images/gadgets/emp.png' }
            ],
            image: 'images/operators/capi.png'
        },
        {
            name: 'Hibana',
            primary: [
                { name: 'Type-89', image: 'images/weapons/Type-89.avif' },
                { name: 'SuperNova', image: 'images/weapons/SuperNova.avif' }
            ],
            secondary: [
                { name: 'P229', image: 'images/weapons/P229.avif' },
                { name: 'Bearing 9', image: 'images/weapons/Bearing_9.avif' },
            ],
            gadgets: [
                { name: 'Stun Grenade', image: 'images/gadgets/stun.avif' },
                { name: 'Breach Charge', image: 'images/gadgets/breach.avif' }
            ],
            image: 'images/operators/hibana.avif'
        },
        {
            name: 'Jackal',
            primary: [
                { name: 'C7E', image: 'images/weapons/C7E.avif' },
                { name: 'PDW9', image: 'images/weapons/PDW9.avif' },
                { name: 'ITA12L', image: 'images/weapons/ITA12L.avif' }
            ],
            secondary: [
                { name: 'USP40', image: 'images/weapons/USP40.avif' },
                { name: 'ITA12S', image: 'images/weapons/ITA12S.avif' },
            ],
            gadgets: [
                { name: 'Claymore', image: 'images/gadgets/smoke.avif' },
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' }
            ],
            image: 'images/operators/jackal.avif'
        },
        {
            name: 'Ying',
            primary: [
                { name: 'T-95 LSW', image: 'images/weapons/T-95_LSW.avif' },
                { name: 'SIX12', image: 'images/weapons/SIX12.avif' }
            ],
            secondary: [
                { name: 'Q-929', image: 'images/weapons/Q-929.avif' },
            ],
            gadgets: [
                { name: 'HARD BREACH CHARGE', image: 'images/gadgets/hard.avif' },
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' }
            ],
            image: 'images/operators/ying.avif'
        },
        {
            name: 'Zofia',
            primary: [
                { name: 'LMG-E', image: 'images/weapons/LMG-E.avif' },
                { name: 'M762', image: 'images/weapons/M762.avif' }
            ],
            secondary: [
                { name: 'RG15', image: 'images/weapons/RG15.avif' },
            ],
            gadgets: [
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' },
                { name: 'Hard Breach Charge', image: 'images/gadgets/hard.avif' }
            ],
            image: 'images/operators/zofia.png'
        },
        {
            name: 'Dokkaebi',
            primary: [
                { name: 'Mk 14 EBR', image: 'images/weapons/Mk_14_EBR.avif' },
                { name: 'BOSG.12.2', image: 'images/weapons/BOSG122.avif' }
            ],
            secondary: [
                { name: 'Gonne-6', image: 'images/weapons/GON6.avif' },
                { name: 'SMG-12', image: 'images/weapons/SMG-12.avif' },
                { name: 'C75 Auto', image: 'images/weapons/C75_AUTO.avif' },
            ],
            gadgets: [
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' },
                { name: 'Stun Grenade', image: 'images/gadgets/stun.avif' },
                { name: 'Impact EMP Grenade', image: 'images/gadgets/emp.png' }
            ],
            image: 'images/operators/dokka.avif'
        },
        {
            name: 'Finka',
            primary: [
                { name: '6P41', image: 'images/weapons/6P41.avif' },
                { name: 'SASG-12', image: 'images/weapons/SASG-12.avif' },
                { name: 'Spear .308', image: 'images/weapons/Spear_308.avif' }
            ],
            secondary: [
                { name: 'GSh-18', image: 'images/weapons/GSh-18.avif' },
                { name: 'PMM', image: 'images/weapons/PMM.avif' },
            ],
            gadgets: [
                { name: 'Frag Grenade', image: 'images/gadgets/frag.avif' },
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' },
                { name: 'Stun Grenade', image: 'images/gadgets/stun.avif' }
            ],
            image: 'images/operators/finka.avif'
        },
        {
            name: 'Lion',
            primary: [
                { name: '417', image: 'images/weapons/417.avif' },
                { name: 'SG-CQB', image: 'images/weapons/SG-CQB.avif' },
                { name: 'V308', image: 'images/weapons/V308.avif' }
            ],
            secondary: [
                { name: 'LFP586', image: 'images/weapons/LFP586.avif' },
                { name: 'P9', image: 'images/weapons/P9.avif' },
            ],
            gadgets: [
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' },
                { name: 'Frag Grenade', image: 'images/gadgets/frag.avif' },
                { name: 'Stun Grenade', image: 'images/gadgets/stun.avif' }
            ],
            image: 'images/operators/lion.png'
        },
        {
            name: 'Maverick',
            primary: [
                { name: 'AR-15.50', image: 'images/weapons/AR-1550.avif' },
                { name: 'M4', image: 'images/weapons/M4.avif' }
            ],
            secondary: [
                { name: '1911 TACOPS', image: 'images/weapons/1911_TACOPS.avif' },
            ],
            gadgets: [
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' },
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' },
                { name: 'Stun Grenade', image: 'images/gadgets/stun.avif' }
            ],
            image: 'images/operators/mave.avif'
        },
        {
            name: 'Nomad',
            primary: [
                { name: 'AK-74M', image: 'images/weapons/AK-74M.avif' },
                { name: 'ARX200', image: 'images/weapons/ARX200.avif' }
            ],
            secondary: [
                { name: 'PRB92', image: 'images/weapons/PRB92.avif' },
                { name: '.44 MAG SEMI-AUTO', image: 'images/weapons/44_Mag_Semi-Auto.avif' },
            ],
            gadgets: [
                { name: 'Breach Charge', image: 'images/gadgets/breach.avif' },
                { name: 'Stun Grenade', image: 'images/gadgets/stun.avif' },
            ],
            image: 'images/operators/nomad.avif'
        },
        {
            name: 'Gridlock',
            primary: [
                { name: 'F90', image: 'images/weapons/F90.avif' },
                { name: 'M249 SAW', image: 'images/weapons/M249_SAW.avif' }
            ],
            secondary: [
                { name: 'Super Shorty', image: 'images/weapons/SHORTY.png' },
                { name: 'SDP 9mm', image: 'images/weapons/SDP_9mm.avif' },
            ],
            gadgets: [
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' },
                { name: 'Frag Grenade', image: 'images/gadgets/frag.avif' },
                { name: 'Impact EMP Grenade', image: 'images/gadgets/emp.png' }
            ],
            image: 'images/operators/gridlock.png'
        },
        {
            name: 'Nokk',
            primary: [
                { name: 'FMG-9', image: 'images/weapons/FMG-9.avif' },
                { name: 'SIX12 SD', image: 'images/weapons/SIX12_SD.avif' }
            ],
            secondary: [
                { name: '5.7 USG', image: 'images/weapons/57_USG.avif' },
                { name: 'D-50', image: 'images/weapons/D-50.avif' },
            ],
            gadgets: [
                { name: 'HARD BREACH CHARGE', image: 'images/gadgets/hard.avif' },
                { name: 'Frag Grenade', image: 'images/gadgets/frag.avif' },
                { name: 'Impact EMP Grenade', image: 'images/gadgets/emp.png' }
            ],
            image: 'images/operators/nokk.avif'
        },
        {
            name: 'Amaru',
            primary: [
                { name: 'G8A1', image: 'images/weapons/G8A1.avif' },
                { name: 'SuperNova', image: 'images/weapons/SuperNova.avif' }
            ],
            secondary: [
                { name: 'Gonne-6', image: 'images/weapons/GON6.avif' },
                { name: 'SMG-11', image: 'images/weapons/SMG-11.avif' },
                { name: 'ITA12S', image: 'images/weapons/ITA12S.avif' }
            ],
            gadgets: [
                { name: 'Stun Grenade', image: 'images/gadgets/stun.avif' },
                { name: 'Hard Breach Charge', image: 'images/gadgets/hard.avif' }
            ],
            image: 'images/operators/amaru.png'
        },
        {
            name: 'Kali',
            primary: [
                { name: 'CSRX 300', image: 'images/weapons/CSRX_300.avif' },
            ],
            secondary: [
                { name: 'SPSMG9', image: 'images/weapons/SPSMG9.avif' },
                { name: 'C75 Auto', image: 'images/weapons/C75_Auto.avif' },
                { name: 'P226 Mk 25', image: 'images/weapons/P226_Mk_25.avif' },
            ],
            gadgets: [
                { name: 'Breach Charge', image: 'images/gadgets/breach.avif' },
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' },
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' }
            ],
            image: 'images/operators/kali.avif'
        },
        {
            name: 'Iana',
            primary: [
                { name: 'ARX200', image: 'images/weapons/ARX200.avif' },
                { name: 'G36C', image: 'images/weapons/G36C.avif' }
            ],
            secondary: [
                { name: 'Gonne-6', image: 'images/weapons/GON6.avif' },
                { name: 'Mk1 9mm', image: 'images/weapons/Mk1_9mm_BI.avif' },
            ],
            gadgets: [
                { name: 'Impact EMP Grenade', image: 'images/gadgets/emp.png' },
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' }
            ],
            image: 'images/operators/iana.avif'
        },
        {
            name: 'Ace',
            primary: [
                { name: 'AK-12', image: 'images/weapons/AK-12.avif' },
                { name: 'M1014', image: 'images/weapons/M1014.avif' }
            ],
            secondary: [
                { name: 'P9', image: 'images/weapons/P9.avif' },
            ],
            gadgets: [
                { name: 'Breach Charge', image: 'images/gadgets/breach.avif' },
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' }
            ],
            image: 'images/operators/ace.avif'
        },
        {
            name: 'Zero',
            primary: [
                { name: 'MP7', image: 'images/weapons/MP7.avif' },
                { name: 'SC3000K', image: 'images/weapons/SCK3000.PNG' }
            ],
            secondary: [
                { name: '5.7 USG', image: 'images/weapons/57_USG.avif' },
                { name: 'Gonne-6', image: 'images/weapons/GON6.avif' },
            ],
            gadgets: [
                { name: 'HARD BREACH CHARGE', image: 'images/gadgets/hard.avif' },
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' }
            ],
            image: 'images/operators/zero.png'
        },
        {
            name: 'Flores',
            primary: [
                { name: 'AR33', image: 'images/weapons/AR33.avif' },
                { name: 'SR-25', image: 'images/weapons/SR-25.avif' }
            ],
            secondary: [
                { name: 'GSh-18', image: 'images/weapons/GSh-18.avif' },
            ],
            gadgets: [
                { name: 'Stun Grenade', image: 'images/gadgets/stun.avif' },
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' }
            ],
            image: 'images/operators/flores.avif'
        },
        {
            name: 'Osa',
            primary: [
                { name: '556xi', image: 'images/weapons/556xi.avif' },
                { name: 'PDW9', image: 'images/weapons/PDW9.avif' }
            ],
            secondary: [
                { name: 'PMM', image: 'images/weapons/PMM.avif' },
            ],
            gadgets: [
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' },
                { name: 'Frag Grenade', image: 'images/gadgets/frag.avif' },
                { name: 'Impact EMP Grenade', image: 'images/gadgets/emp.png' }
            ],
            image: 'images/operators/osa.avif'
        },
        {
            name: 'Sens',
            primary: [
                { name: '417', image: 'images/weapons/417.avif' },
                { name: 'POF9', image: 'images/weapons/POF9.avif' }
            ],
            secondary: [
                { name: 'SDP 9mm', image: 'images/weapons/SDP_9mm.avif' },
            ],
            gadgets: [
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' },
                { name: 'Frag Grenade', image: 'images/gadgets/frag.avif' },
                { name: 'Hard Breach Charge', image: 'images/gadgets/hard.avif' }
            ],
            image: 'images/operators/sens.avif'
        },
        {
            name: 'Grim',
            primary: [
                { name: '552 Commando', image: 'images/weapons/552_Commando.avif' },
                { name: 'SG-CQB', image: 'images/weapons/SG-CQB.avif' }
            ],
            secondary: [
                { name: 'Bailiff 410', image: 'images/weapons/Bailiff_410.avif' },
                { name: 'P229', image: 'images/weapons/P229.avif' },
            ],
            gadgets: [
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' },
                { name: 'HARD BREACH CHARGE', image: 'images/gadgets/hard.avif' },
                { name: 'Impact EMP Grenade', image: 'images/gadgets/emp.png' }
            ],
            image: 'images/operators/grim.avif'
        },
        {
            name: 'Brava',
            primary: [
                { name: 'PARA-308', image: 'images/weapons/PARA-308.avif' },
                { name: 'CAMRS', image: 'images/weapons/CAMRS.avif' }
            ],
            secondary: [
                { name: 'USP40', image: 'images/weapons/USP40.avif' },
                { name: 'Super Shorty', image: 'images/weapons/SHORTY.png' },
            ],
            gadgets: [
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' },
                { name: 'Claymore', image: 'images/gadgets/claymore.avif' }
            ],
            image: 'images/operators/brava.avif'
        },
        {
            name: 'Ram',
            primary: [
                { name: 'R4-C', image: 'images/weapons/R4-C.avif' },
                { name: 'LMG-E', image: 'images/weapons/LMG-E.avif' }
            ],
            secondary: [
                { name: 'Mk1 9mm', image: 'images/weapons/Mk1_9mm_BI.avif' },
            ],
            gadgets: [
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' },
                { name: 'Stun Grenade', image: 'images/gadgets/stun.avif' }
            ],
            image: 'images/operators/ram.avif'
        },
        {
            name: 'Deimos',
            primary: [
                { name: 'AK-74M', image: 'images/weapons/AK-74M.avif' },
                { name: 'M590A1', image: 'images/weapons/M590A1.avif' }
            ],
            secondary: [
                { name: '.44 VENDETTA', image: 'images/weapons/44VENDETTA.avif' },
            ],
            gadgets: [
                { name: 'Frag Grenade', image: 'images/gadgets/frag.avif' },
                { name: 'HARD BREACH CHARGE', image: 'images/gadgets/hard.avif' }
            ],
            image: 'images/operators/deimos.avif'
        },
        {
            name: 'Rauora',
            primary: [
                { name: '417', image: 'images/weapons/417.avif' },
                { name: 'M249', image: 'images/weapons/M249.avif' }
            ],
            secondary: [
                { name: 'Reaper MK2', image: 'images/weapons/reaper-mk2.avif' },
                { name: 'GSh-18', image: 'images/weapons/GSh-18.avif' },
            ],
            gadgets: [
                { name: 'Smoke Grenade', image: 'images/gadgets/smoke.avif' },
                { name: 'Breach Charge', image: 'images/gadgets/breach.avif' },
            ],
            image: 'images/operators/rauora.avif'
        },
        
    ],
    defenders: [
        {
            name: 'Mute',
            primary: [
                { name: 'MP5K', image: 'images/weapons/mp5k.webp' },
                { name: 'M590A1', image: 'images/weapons/M590A1.avif' }
            ],
            secondary: [
                { name: 'P226 MK 25', image: 'images/weapons/P226_MK_25.avif' }
            ],
            gadgets: [
                { name: 'Nitro Cell', image: 'images/gadgets/nitro.avif' },
                { name: 'Bulletproof Camera', image: 'images/gadgets/bp.avif' }
            ],
            image: 'images/operators/mute.avif'
        },
        {
            name: 'Smoke',
            primary: [
                { name: 'M590A1', image: 'images/weapons/M590A1.avif' },
                { name: 'FMG-9', image: 'images/weapons/FMG-9.avif' }
            ],
            secondary: [
                { name: 'P226 Mk 25', image: 'images/weapons/P226_MK_25.avif' },
                { name: 'SMG-11', image: 'images/weapons/SMG-11.avif' },
            ],
            gadgets: [
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' },
                { name: 'PROXIMITY ALARM', image: 'images/gadgets/proxy.avif' },
            ],
            image: 'images/operators/smoke.avif'
        },
        {
            name: 'Pulse',
            primary: [
                { name: 'UMP45', image: 'images/weapons/UMP45.avif' },
                { name: 'M1014', image: 'images/weapons/M1014.avif' }
            ],
            secondary: [
                { name: '5.7 USG', image: 'images/weapons/57_USG.avif' },
                { name: 'M45 MEUSOC', image: 'images/weapons/M45_MEUSOC.avif' },
            ],
            gadgets: [
                { name: 'Nitro Cell', image: 'images/gadgets/nitro.avif' },
                { name: 'Deployable Shield', image: 'images/gadgets/shield.avif' },
                { name: 'Observation Blocker', image: 'images/gadgets/obs.png' }
            ],
            image: 'images/operators/pulse.png'
        },
        {
            name: 'Castle',
            primary: [
                { name: 'UMP45', image: 'images/weapons/UMP45.avif' },
                { name: 'M1014', image: 'images/weapons/M1014.avif' }
            ],
            secondary: [
                { name: '5.7 USG', image: 'images/weapons/57_USG.avif' },
                { name: 'M45 MEUSOC', image: 'images/weapons/M45_MEUSOC.avif' },
                { name: 'Super Shorty', image: 'images/weapons/SHORTY.png' },
            ],
            gadgets: [
                { name: 'PROXIMITY ALARM', image: 'images/gadgets/proxy.avif' },
                { name: 'Bulletproof camera', image: 'images/gadgets/bp.avif' },
            ],
            image: 'images/operators/castle.avif'
        },
        {
            name: 'Rook',
            primary: [
                { name: 'MP5', image: 'images/weapons/MP5.avif' },
                { name: 'P90', image: 'images/weapons/P90.avif' },
                { name: 'SG-CQB', image: 'images/weapons/SG-CQB.avif' }
            ],
            secondary: [
                { name: 'P9', image: 'images/weapons/P9.avif' },
                { name: 'LFP586', image: 'images/weapons/LFP586.avif' },
            ],
            gadgets: [
                { name: 'PROXIMITY ALARM', image: 'images/gadgets/proxy.avif' },
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' },
                { name: 'Observation Blocker', image: 'images/gadgets/obs.png' }
            ],
            image: 'images/operators/ROOK.png'
        },
        {
            name: 'Doc',
            primary: [
                { name: 'MP5', image: 'images/weapons/MP5.avif' },
                { name: 'P90', image: 'images/weapons/P90.avif' },
                { name: 'SG-CQB', image: 'images/weapons/SG-CQB.avif' }
            ],
            secondary: [
                { name: 'P9', image: 'images/weapons/P9.avif' },
                { name: 'LFP586', image: 'images/weapons/LFP586.avif' },
            ],
            gadgets: [
                { name: 'Bulletproof camera', image: 'images/gadgets/bp.avif' },
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' },
            ],
            image: 'images/operators/doc.avif'
        },
        {
            name: 'Tachanka',
            primary: [
                { name: 'DP27', image: 'images/weapons/DP27.webp' },
                { name: '9x19VSN', image: 'images/weapons/9X19SVN.avif' }
            ],
            secondary: [
                { name: 'PMM', image: 'images/weapons/PMM.avif' },
                { name: 'GSh-18', image: 'images/weapons/GSh-18.avif' },
                { name: 'Bearing 9', image: 'images/weapons/Bearing_9.avif' },
            ],
            gadgets: [
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' },
                { name: 'PROXIMITY ALARM', image: 'images/gadgets/proxy.avif' },
                { name: 'Deployable Shield', image: 'images/gadgets/shield.avif' }
            ],
            image: 'images/operators/tachanka.avif'
        },
        {
            name: 'Kapkan',
            primary: [
                { name: 'SASG-12', image: 'images/weapons/SASG-12.avif' },
                { name: '9x19VSN', image: 'images/weapons/9X19SVN.avif' }
            ],
            secondary: [
                { name: 'PMM', image: 'images/weapons/PMM.avif' },
                { name: 'GSh-18', image: 'images/weapons/GSh-18.avif' },
            ],
            gadgets: [
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' },
                { name: 'Bulletproof camera', image: 'images/gadgets/bp.avif' }
            ],
            image: 'images/operators/kapkan.png'
        },
        {
            name: 'Bandit',
            primary: [
                { name: 'MP7', image: 'images/weapons/MP7.avif' },
                { name: 'M870', image: 'images/weapons/M870.avif' }
            ],
            secondary: [
                { name: 'P12', image: 'images/weapons/P12.avif' },
            ],
            gadgets: [
                { name: 'Nitro Cell', image: 'images/gadgets/nitro.avif' },
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' }
            ],
            image: 'images/operators/bandit.png'
        },
        {
            name: 'Jager',
            primary: [
                { name: 'M870', image: 'images/weapons/M870.avif' },
                { name: '416-C Carbine', image: 'images/weapons/416-C_Carbine.avif' }
            ],
            secondary: [
                { name: 'P12', image: 'images/weapons/P12.avif' },
            ],
            gadgets: [
                { name: 'Bulletproof camera', image: 'images/gadgets/bp.avif' },
                { name: 'Observation Blocker', image: 'images/gadgets/obs.png' }
            ],
            image: 'images/operators/jager.png'
        },
        {
            name: 'FROST',
            primary: [
                { name: 'Super 90', image: 'images/weapons/Super_90.avif' },
                { name: '9mm C1', image: 'images/weapons/9mm_C1.avif' }
            ],
            secondary: [
                { name: 'Mk1 9mm', image: 'images/weapons/Mk1_9mm_BI.avif' },
                { name: 'ITA12S', image: 'images/weapons/ITA12S.avif' },
            ],
            gadgets: [
                { name: 'Bulletproof camera', image: 'images/gadgets/bp.avif' },
                { name: 'Deployable Shield', image: 'images/gadgets/shield.avif' },
            ],
            image: 'images/operators/frost.png'
        },
        {
            name: 'VALKYRIE',
            primary: [
                { name: 'MPX', image: 'images/weapons/MPX.avif' },
                { name: 'SPAS-12', image: 'images/weapons/SPAS-12.avif' }
            ],
            secondary: [
                { name: 'D-50', image: 'images/weapons/D-50.avif' },
            ],
            gadgets: [
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' },
                { name: 'Nitro cell', image: 'images/gadgets/nitro.avif' },
            ],
            image: 'images/operators/valk.png'
        },
        {
            name: 'CAVEIRA',
            primary: [
                { name: 'M12', image: 'images/weapons/M12.avif' },
                { name: 'SPAS-15', image: 'images/weapons/SPAS-15.avif' }
            ],
            secondary: [
                { name: 'Luison', image: 'images/weapons/Luison.avif' },
            ],
            gadgets: [
                { name: 'PROXIMITY ALARM', image: 'images/gadgets/proxy.avif' },
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' },
                { name: 'Observation Blocker', image: 'images/gadgets/obs.png' }
            ],
            image: 'images/operators/cav.avif'
        },
        {
            name: 'Echo',
            primary: [
                { name: 'MP5SD', image: 'images/weapons/MP5SD.avif' },
                { name: 'SuperNova', image: 'images/weapons/SuperNova.avif' }
            ],
            secondary: [
                { name: 'Bearing 9', image: 'images/weapons/Bearing_9.avif' },
                { name: 'P229', image: 'images/weapons/P229.avif' },
            ],
            gadgets: [
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' },
                { name: 'Deployable Shield', image: 'images/gadgets/shield.avif' },
            ],
            image: 'images/operators/echo.png'
        },
        {
            name: 'Mira',
            primary: [
                { name: 'Vector .45 ACP', image: 'images/weapons/Vector_45_ACP.avif' },
                { name: 'ITA12L', image: 'images/weapons/ITA12L.avif' }
            ],
            secondary: [
                { name: 'USP40', image: 'images/weapons/USP40.avif' },
                { name: 'ITA12S', image: 'images/weapons/ITA12S.avif' },
            ],
            gadgets: [
                { name: 'PROXIMITY ALARM', image: 'images/gadgets/proxy.avif' },
                { name: 'Nitro Cell', image: 'images/gadgets/nitro.avif' },
            ],
            image: 'images/operators/mira.png'
        },
        {
            name: 'Lesion',
            primary: [
                { name: 'SIX12 SD', image: 'images/weapons/SIX12_SD.avif' },
                { name: 'T-5 SMG', image: 'images/weapons/T-5_SMG.avif' }
            ],
            secondary: [
                { name: 'Q-929', image: 'images/weapons/Q-929.avif' },
                { name: 'Super Shorty', image: 'images/weapons/SHORTY.png' },
            ],
            gadgets: [
                { name: 'Observation Blocker', image: 'images/gadgets/obs.png' },
                { name: 'Bulletproof camera', image: 'images/gadgets/bp.avif' },
            ],
            image: 'images/operators/lesion.avif'
        },
        {
            name: 'ELA',
            primary: [
                { name: 'Scorpion EVO 3 A1', image: 'images/weapons/Scorpion_EVO_3_A1.avif' },
                { name: 'FO-12', image: 'images/weapons/FO-12.avif' }
            ],
            secondary: [
                { name: 'RG15', image: 'images/weapons/RG15.avif' },
            ],
            gadgets: [
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' },
                { name: 'Deployable Shield', image: 'images/gadgets/shield.avif' },
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' }
            ],
            image: 'images/operators/ela.avif'
        },
        {
            name: 'VIGIL',
            primary: [
                { name: 'K1A', image: 'images/weapons/K1A.avif' },
                { name: 'BOSG.12.2', image: 'images/weapons/BOSG122.avif' }
            ],
            secondary: [
                { name: 'C75 Auto', image: 'images/weapons/C75_Auto.avif' },
                { name: 'SMG-12', image: 'images/weapons/SMG-12.avif' },
            ],
            gadgets: [
                { name: 'Bulletproof camera', image: 'images/gadgets/bp.avif' },
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' },
            ],
            image: 'images/operators/vigil.png'
        },
        {
            name: 'ALIBI',
            primary: [
                { name: 'Mx4 Storm', image: 'images/weapons/Mx4_Storm.avif' },
                { name: 'ACS12', image: 'images/weapons/ACS12_PB.avif' }
            ],
            secondary: [
                { name: 'Keratos .357', image: 'images/weapons/Keratos_357.avif' },
                { name: 'Bailiff 410', image: 'images/weapons/Bailiff_410.avif' },
            ],
            gadgets: [
                { name: 'PROXIMITY ALARM', image: 'images/gadgets/proxy.avif' },
                { name: 'Observation Blocker', image: 'images/gadgets/obs.png' },
            ],
            image: 'images/operators/alibi.png'
        },
        {
            name: 'Maestro',
            primary: [
                { name: 'ALDA 5.56', image: 'images/weapons/ALDA_556.avif' },
                { name: 'ACS12', image: 'images/weapons/ACS12_PB.avif' }
            ],
            secondary: [
                { name: 'Keratos .357', image: 'images/weapons/Keratos_357.avif' },
                { name: 'Bailiff 410', image: 'images/weapons/Bailiff_410.avif' },
            ],
            gadgets: [
                { name: 'Barbed Wire', image: 'images/gadgets/wire.avif' },
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' },
                { name: 'Observation Blocker', image: 'images/gadgets/obs.png' },
            ],
            image: 'images/operators/alibi.png'
        },
        {
            name: 'CLASH',
            primary: [
                { name: 'CCE Shield', image: 'images/weapons/CCE_Shield.avif' },
            ],
            secondary: [
                { name: 'P-10C', image: 'images/weapons/P-10C.avif' },
                { name: 'SPSMG9', image: 'images/weapons/SPSMG9.avif' },
                { name: 'Super Shorty', image: 'images/weapons/SHORTY.png' },
            ],
            gadgets: [
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' },
                { name: 'Deployable Shield', image: 'images/gadgets/shield.avif' },
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' }
            ],
            image: 'images/operators/clash.png'
        },
        {
            name: 'KAID',
            primary: [
                { name: 'AUG A3', image: 'images/weapons/AUG_A3.avif' },
                { name: 'TCSG12', image: 'images/weapons/TCSG12.avif' }
            ],
            secondary: [
                { name: '.44 MAG SEMI-AUTO', image: 'images/weapons/44_Mag_Semi-Auto.avif' },
                { name: 'LFP586', image: 'images/weapons/LFP586.avif' },
            ],
            gadgets: [
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' },
                { name: 'Nitro Cell', image: 'images/gadgets/nitro.avif' },
                { name: 'Observation Blocker', image: 'images/gadgets/obs.png' }
            ],
            image: 'images/operators/kaid.avif'
        },
        {
            name: 'MOZZIE',
            primary: [
                { name: 'Commando 9', image: 'images/weapons/Commando_9.avif' },
                { name: 'P10 RONI', image: 'images/weapons/P10.avif' }
            ],
            secondary: [
                { name: 'SDP 9mm', image: 'images/weapons/SDP_9mm.avif' },
            ],
            gadgets: [
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' },
                { name: 'Nitro Cell', image: 'images/gadgets/nitro.avif' },
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' }
            ],
            image: 'images/operators/mozzie.png'
        },
        {
            name: 'WARDEN',
            primary: [
                { name: 'M590A1', image: 'images/weapons/M590A1.avif' },
                { name: 'MPX', image: 'images/weapons/MPX.avif' }
            ],
            secondary: [
                { name: 'P-10C', image: 'images/weapons/P-10C.avif' },
                { name: 'SMG-12', image: 'images/weapons/SMG-12.avif' },
            ],
            gadgets: [
                { name: 'Deployable Shield', image: 'images/gadgets/shield.avif' },
                { name: 'Nitro Cell', image: 'images/gadgets/nitro.avif' },
                { name: 'Observation Blocker', image: 'images/gadgets/obs.png' }
            ],
            image: 'images/operators/warden.avif'
        },
        {
            name: 'GOYO',
            primary: [
                { name: 'Vector .45 ACP', image: 'images/weapons/Vector_45_ACP.avif' },
                { name: 'TCSG12', image: 'images/weapons/TCSG12.avif' }
            ],
            secondary: [
                { name: 'P229', image: 'images/weapons/P229.avif' },
            ],
            gadgets: [
                { name: 'PROXIMITY ALARM', image: 'images/gadgets/proxy.avif' },
                { name: 'Bulletproof camera', image: 'images/gadgets/bp.avif' },
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' }
            ],
            image: 'images/operators/goyo.avif'
        },
        {
            name: 'WAMAI',
            primary: [
                { name: 'AUG A2', image: 'images/weapons/AUG_A2.avif' },
                { name: 'MP5K', image: 'images/weapons/MP5K.webp' }
            ],
            secondary: [
                { name: 'P12', image: 'images/weapons/P12.avif' },
                { name: 'Keratos .357', image: 'images/weapons/Keratos_357.avif' },
            ],
            gadgets: [
                { name: 'PROXIMITY ALARM', image: 'images/gadgets/proxy.avif' },
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' },
            ],
            image: 'images/operators/wamai.png'
        },
        {
            name: 'ORYX',
            primary: [
                { name: 'SPAS-12', image: 'images/weapons/SPAS-12.avif' },
                { name: 'T-5 SMG', image: 'images/weapons/T-5_SMG.avif' }
            ],
            secondary: [
                { name: 'Bailiff 410', image: 'images/weapons/Bailiff_410.avif' },
                { name: 'USP40', image: 'images/weapons/USP40.avif' },
            ],
            gadgets: [
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' },
                { name: 'PROXIMITY ALARM', image: 'images/gadgets/proxy.avif' },
            ],
            image: 'images/operators/oryx.avif'
        },
        {
            name: 'MELUSI',
            primary: [
                { name: 'MP5', image: 'images/weapons/MP5.avif' },
                { name: 'Super 90', image: 'images/weapons/Super_90.avif' }
            ],
            secondary: [
                { name: 'ITA12S', image: 'images/weapons/ITA12S.avif' },
                { name: 'RG15', image: 'images/weapons/RG15.avif' },
            ],
            gadgets: [
                { name: 'Bulletproof camera', image: 'images/gadgets/bp.avif' },
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' },
            ],
            image: 'images/operators/melusi.png'
        },
        {
            name: 'ARUNI',
            primary: [
                { name: 'P10 RONI', image: 'images/weapons/P10.avif' },
                { name: 'Mk 14 EBR', image: 'images/weapons/Mk_14_EBR.avif' }
            ],
            secondary: [
                { name: 'PRB92', image: 'images/weapons/PRB92.avif' },
            ],
            gadgets: [
                { name: 'Bulletproof camera', image: 'images/gadgets/bp.avif' },
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' },
            ],
            image: 'images/operators/aruni.png'
        },
        {
            name: 'THUNDERBIRD',
            primary: [
                { name: 'SPAS-15', image: 'images/weapons/SPAS-15.avif' },
                { name: 'Spear .308', image: 'images/weapons/Spear_308.avif' }
            ],
            secondary: [
                { name: 'Bearing 9', image: 'images/weapons/Bearing_9.avif' },
                { name: 'Q-929', image: 'images/weapons/Q-929.avif' },
                { name: 'ITA12S', image: 'images/weapons/ITA12S.avif' },
            ],
            gadgets: [
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' },
                { name: 'Bulletproof camera', image: 'images/gadgets/bp.avif' },
                { name: 'Deployable Shield', image: 'images/gadgets/shield.avif' }
            ],
            image: 'images/operators/thunder.avif'
        },
        {
            name: 'THORN',
            primary: [
                { name: 'UZK50Gi', image: 'images/weapons/UZK50Gi.avif' },
                { name: 'M870', image: 'images/weapons/M870.avif' }
            ],
            secondary: [
                { name: '1911 TACOPS', image: 'images/weapons/1911_TACOPS.avif' },
                { name: 'C75 Auto', image: 'images/weapons/C75_Auto.avif' },
            ],
            gadgets: [
                { name: 'Deployable Shield', image: 'images/gadgets/shield.avif' },
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' },
            ],
            image: 'images/operators/thorn.avif'
        },
        {
            name: 'AZAMI',
            primary: [
                { name: '9X19VSN', image: 'images/weapons/9X19SVN.avif' },
                { name: 'ACS12', image: 'images/weapons/ACS12_PB.avif' }
            ],
            secondary: [
                { name: 'D-50', image: 'images/weapons/D-50.avif' },
            ],
            gadgets: [
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' },
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' },
            ],
            image: 'images/operators/azami.avif'
        },
        {
            name: 'SOLIS',
            primary: [
                { name: 'ITA12L', image: 'images/weapons/ITA12L.avif' },
                { name: 'P90', image: 'images/weapons/P90.avif' }
            ],
            secondary: [
                { name: 'SMG-11', image: 'images/weapons/SMG-11.avif' },
            ],
            gadgets: [
                { name: 'Bulletproof camera', image: 'images/gadgets/bp.avif' },
                { name: 'PROXIMITY ALARM', image: 'images/gadgets/proxy.avif' },
            ],
            image: 'images/operators/solis.png'
        },
        {
            name: 'FENRIR',
            primary: [
                { name: 'MP7', image: 'images/weapons/MP7.avif' },
                { name: 'SASG-12', image: 'images/weapons/SASG-12.avif' }
            ],
            secondary: [
                { name: '5.7 USG', image: 'images/weapons/57_USG.avif' },
                { name: 'Bailiff_410', image: 'images/weapons/Bailiff 410.avif' },
            ],
            gadgets: [
                { name: 'Bulletproof camera', image: 'images/gadgets/bp.avif' },
                { name: 'Observation Blocker', image: 'images/gadgets/obs.png' },
            ],
            image: 'images/operators/fenrir.avif'
        },
        {
            name: 'Tubarão',
            primary: [
                { name: 'MPX', image: 'images/weapons/MPX.avif' },
                { name: 'AR-15.50', image: 'images/weapons/AR-1550.avif' }
            ],
            secondary: [
                { name: 'P226 Mk 25', image: 'images/weapons/P226_Mk_25.avif' },
            ],
            gadgets: [
                { name: 'Nitro Cell', image: 'images/gadgets/nitro.avif' },
                { name: 'PROXIMITY ALARM', image: 'images/gadgets/proxy.avif' },
            ],
            image: 'images/operators/tubarao.avif'
        },
        {
            name: 'Skopós',
            primary: [
                { name: 'PCX-33', image: 'images/weapons/PCX-33.png' },
            ],
            secondary: [
                { name: 'P229', image: 'images/weapons/P229.avif' },
            ],
            gadgets: [
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' },
                { name: 'PROXIMITY ALARM', image: 'images/gadgets/proxy.avif' },
            ],
            image: 'images/operators/skopos.avif'
        },
        {
            name: 'SENTRY',
            primary: [
                { name: 'Commando 9', image: 'images/weapons/Commando_9.avif' },
                { name: 'M870', image: 'images/weapons/M870.avif' }
            ],
            secondary: [
                { name: 'C75 Auto', image: 'images/weapons/C75_Auto.avif' },
                { name: 'Super Shorty', image: 'images/weapons/SHORTY.png' },
            ],
            gadgets: [
                { name: 'Barbed Wire', image: 'images/gadgets/wire.webp' },
                { name: 'Bulletproof camera', image: 'images/gadgets/bp.avif' },
                { name: 'Deployable Shield', image: 'images/gadgets/shield.avif' },
                { name: 'Observation Blocker', image: 'images/gadgets/obs.png' },
                { name: 'Impact Grenade', image: 'images/gadgets/impact.avif' },
                { name: 'Nitro Cell', image: 'images/gadgets/nitro.avif' },
                { name: 'PROXIMITY ALARM', image: 'images/gadgets/proxy.avif' },
            ],
            image: 'images/operators/sentry.avif'
        },

    ]
};


document.addEventListener('DOMContentLoaded', () => {
    const randomizeBtn = document.getElementById('randomizeBtn');
    const attackersBtn = document.getElementById('attackersBtn');
    const defendersBtn = document.getElementById('defendersBtn');
    const resultDiv = document.getElementById("result");
    const operatorImage = document.getElementById("operatorImage");
    const primaryResult = document.getElementById("primaryResult");
    const primaryImage = document.getElementById("primaryImage");
    const secondaryResult = document.getElementById("secondaryResult");
    const secondaryImage = document.getElementById("secondaryImage");
    const gadgetsResult = document.getElementById("gadgetsResult");
    const gadgetsImages = document.getElementById("gadgetsImages");

function applyRandomizeAnimation() {
    // Add animation class to elements
    const elements = [operatorImage, primaryImage, secondaryImage, gadgetsImages, 
                      resultDiv, primaryResult, secondaryResult, gadgetsResult];
    
    elements.forEach(el => {
        el.classList.remove('randomize-animation');
        // Trigger reflow
        void el.offsetWidth;
        el.classList.add('randomize-animation');
    });
}

// Modify your button click handlers to include animation
randomizeBtn.addEventListener('click', () => {
    applyRandomizeAnimation();
    
    // Set active button state
    randomizeBtn.classList.add('active');
    attackersBtn.classList.remove('active');
    defendersBtn.classList.remove('active');
    
    const { operator, side } = getRandomOperator();
    updateDisplay(operator, side);
});

attackersBtn.addEventListener('click', () => {
    applyRandomizeAnimation();
    
    // Set active button state
    randomizeBtn.classList.remove('active');
    attackersBtn.classList.add('active');
    defendersBtn.classList.remove('active');
    
    const { operator, side } = getRandomOperator('attackers');
    updateDisplay(operator, side);
});

defendersBtn.addEventListener('click', () => {
    applyRandomizeAnimation();
    
    // Set active button state
    randomizeBtn.classList.remove('active');
    attackersBtn.classList.remove('active');
    defendersBtn.classList.add('active');
    
    const { operator, side } = getRandomOperator('defenders');
    updateDisplay(operator, side);
});
    function getRandomOperator(side = null) {
        if (!side) {
            side = Math.random() < 0.5 ? 'attackers' : 'defenders';
        }
        
        const operatorPool = operators[side];
        if (!operatorPool || !operatorPool.length) {
            console.error('No operators available for', side);
            return null;
        }
        
        const randomIndex = Math.floor(Math.random() * operatorPool.length);
        return { operator: operatorPool[randomIndex], side };
    }

    function getRandomWeapon(weapons) {
        return weapons[Math.floor(Math.random() * weapons.length)];
    }

    function getRandomGadget(gadgets) {
        return gadgets[Math.floor(Math.random() * gadgets.length)];
    }

    function updateDisplay(operator, side) {
        if (!operator) {
            console.error('No operator found');
            return;
        }

        // Update operator info - removed the side label
        resultDiv.textContent = `${operator.name}`.toUpperCase();
        operatorImage.src = operator.image;
        operatorImage.alt = operator.name;

        // Update primary weapon
        const primary = getRandomWeapon(operator.primary);
        primaryResult.textContent = primary.name.toUpperCase();
        primaryImage.src = primary.image;
        primaryImage.alt = primary.name;

        // Update secondary weapon
        const secondary = getRandomWeapon(operator.secondary);
        secondaryResult.textContent = secondary.name.toUpperCase();
        secondaryImage.src = secondary.image;
        secondaryImage.alt = secondary.name;

        // Update gadget
        const gadget = getRandomGadget(operator.gadgets);
        gadgetsResult.textContent = gadget.name.toUpperCase();
        gadgetsImages.innerHTML = `<img src="${gadget.image}" alt="${gadget.name}" class="gadget-image">`;
    }

    // Random button - picks from both attackers and defenders
    randomizeBtn.addEventListener('click', () => {
        const { operator, side } = getRandomOperator();
        updateDisplay(operator, side);
    });

    // Attackers only button
    attackersBtn.addEventListener('click', () => {
        const { operator, side } = getRandomOperator('attackers');
        updateDisplay(operator, side);
    });

    // Defenders only button
    defendersBtn.addEventListener('click', () => {
        const { operator, side } = getRandomOperator('defenders');
        updateDisplay(operator, side);
    });

    // Initial load
    const { operator, side } = getRandomOperator();
    updateDisplay(operator, side);
});