import React from 'react'

export default function StandingsRow(props) {

    var ori = props.winChance;
    for (var i = 0; i < props.original.length; i++) {
        if (props.original[i].name == props.name) {
            ori = props.original[i].winChance;
        }
    }

    const x = Math.max(3, props.maxGap);
    const g_d = props.winChance > ori ? Math.floor((16 / x) * Math.min(x, props.winChance - ori)) : 0;
    const r_d = props.winChance < ori ? Math.floor((16 / x) * Math.min(x, ori - props.winChance)) : 0;

    const hex = [
        '0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'
    ]

    const g = hex[16-g_d]
    const r = hex[16-r_d]

    let col = {
        // color: 
        // color: props.doColor ? (g_d > 0 ? '#' + g + 'f' + g : r_d > 0 ? '#' + 'f' + r + r : '#fff') : '#fff',
        color: props.doColor ? (g_d > 0 ? '#' + g + 'f' + '4' : r_d > 0 ? '#' + 'f' + r + '4' : '#ff4') : '#fff',
    }

    return (
        <tr >
            <td style={{...col}}><b>{props.name}</b></td>
            <td style={{...col}}><b>{props.score}</b></td>
            <td style={{...col}}><b>{props.winChance.toFixed(2)}%</b></td>
        </tr>
    );
}