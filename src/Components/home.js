import React from 'react'
import fischer from '../Images/fischerasciiscreenshot.png'
import axios from 'axios'
import qs from 'qs'

export default function Home() {

    // const players = [
    //     'Gambit2Mate','Casabianka','Dennis1989','MW1966','BeethovensVirus','peshka2','mister-vova','Lance5500','kc6','Lewton','Konnov_Oleg','evidencebased','nmiq','Unkreativ3','ditbenik','NxtLevel','Whippididooda','PchelkinVK','Brotello','utf','Rochade_Augsburg','smallfischer17','HardDefender','Molana1','tjradd','AlmightyGollum','Saqochess','AK_NZ','Hematom87','Ragehunter','GROSKE','chesspawnrookking','Lord-Universe31','mzmaz','HoochieChoochieMan','QueenOfTheHi11','ThisIsChess-004','PeterPanter','AnwenDigo','YourBilli','e4e4chess','Tavo69','Emeraldluma','Druzhinin_07Vladimir','BudSpenser','voronki','TPDCHAPMAN','scemer123','Varchavianka','repeat_42b','Schemato','underground1','V_vs','Razorneck','Blue_Flash','Cheretand','kotikribolow','yousoo','artistendo','whazel','AKI77Siam','khaledbenalyemen','AntiberserkM','Crushing_Kings','val1957','dvk84','Marmeladka02','gringo2010','Rookie1243','Paff-Morris','splendidkid','JoBac75','Romus12345','MixflitchTixnitchen','ShahMatKanal','Cizar','Okoros','Tutunuz','Hanuman_108','GGbers','VerbaVolant','Shrekmated','Migusch','Shamsutdin','Chesskingoriginal','Manpreeth007','d71f','hanyabdo','headx86','dampooo','grg121','DanBeardzarian','Four_Owls','tirumpu','pavaobjazevic','LittleFairyPrincess','Lululemon12','KingZlatan','Martin-Luthers-King','arielofek'
    // ];
    const players = [
        'utf','Rochade_Augsburg','smallfischer17','HardDefender','Molana1','tjradd','AlmightyGollum','Saqochess','AK_NZ','Hematom87','Ragehunter','GROSKE','chesspawnrookking','Lord-Universe31','mzmaz','HoochieChoochieMan','QueenOfTheHi11','ThisIsChess-004','PeterPanter','AnwenDigo','YourBilli','e4e4chess','Tavo69','Emeraldluma','Druzhinin_07Vladimir','BudSpenser','voronki','TPDCHAPMAN','scemer123','Varchavianka','repeat_42b','Schemato','underground1','V_vs','Razorneck','Blue_Flash','Cheretand','kotikribolow','yousoo','artistendo','whazel','AKI77Siam','khaledbenalyemen','AntiberserkM','Crushing_Kings','val1957','dvk84','Marmeladka02','gringo2010','Rookie1243','Paff-Morris','splendidkid','JoBac75','Romus12345','MixflitchTixnitchen','ShahMatKanal','Cizar','Okoros','Tutunuz','Hanuman_108','GGbers','VerbaVolant','Shrekmated','Migusch','Shamsutdin','Chesskingoriginal','Manpreeth007','d71f','hanyabdo','headx86','dampooo','grg121','DanBeardzarian','Four_Owls','tirumpu','pavaobjazevic','LittleFairyPrincess','Lululemon12','KingZlatan','Martin-Luthers-King','arielofek'
    ];

    var i = 0;

    return (
        <div className='ascii-art'>
            <h2 className='desc'>
                a chess website for training and following games
            </h2>
            {/* <h3 className='fischer-quote'>
                iF YoU ReAlLy aNaLyZe cHeSs oBjEcTiVeLy...iT'S BeEn a lOuSy gAmE BaCk eVeN To tHe tImE Of mOrPhY!
            </h3>
            <h3 className='fischer-quote2'>
                aLL pReArRaNgEmEnT, aLL tHeOrY
            </h3> */}
            <img src={fischer}
                className="fit-image"
                height='100%'
                width='100%' />
        </div>
    )
}