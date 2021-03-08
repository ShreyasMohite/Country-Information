const formatCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };
  

const load=(coun)=>{

    let imgs=document.querySelector('img');
    let country_name=document.getElementById("name");
    let country_region=document.getElementById("region");
    let country_capital=document.getElementById("capital");
    let country_subregion=document.getElementById("subregion");
    let country_alpha3Code=document.getElementById("alphacode");
    let country_topLevelDomain=document.getElementById("topleveldomain");
    let country_demonym=document.getElementById("demonym");
    let country_population=document.getElementById("population");
    let country_area=document.getElementById("area");
    let country_nativename=document.getElementById("nativename");
    let country_callingcode=document.getElementById("callcode");
    let country_currency_name=document.getElementById("currency_name");
    let country_currency_code=document.getElementById("currency_code");
    let country_currency_symbol=document.getElementById("currency_symbol");
    let country_timezone=document.getElementById("timezone");
    let country_numericCode=document.getElementById("numericCode");
    let country_language=document.getElementById("language");
    let country_borders=document.getElementById("borders");
    
    fetch('https://shreyasmohite.github.io/Countries-Api/country.json').then((data)=>{
        return data.json()
    }).then((act)=>{
       
        
        for(var i=0;i<=act.length;i++){
            if(act[i]['name']==coun){
                let name=act[i]['name'];
                let region=act[i]['region'];
                let national_flag=act[i]['flag'];
                let capital=act[i]['capital'];
                let subregion=act[i]['subregion'];
                let alpha3Code=act[i]['alpha3Code'];
                let topleveldomain=act[i]['topLevelDomain']
                let demonym=act[i]['demonym'];
                let population=act[i]['population'];
                let area=act[i]['area'];
                let nativename=act[i]['nativeName'];
                let callcode=act[i]['callingCodes'][0];
                let exactpop=formatCash(population);
                let currency_name=act[i]['currencies'][0]['name'];
                let currency_code=act[i]['currencies'][0]['code'];
                let currency_symbol=act[i]['currencies'][0]['symbol'];
                let timezone=act[i]['timezones'][0];
                let numericCode=act[i]['numericCode'];
                let language=act[i]['languages'][0]['name'];
                let borders=act[i]['borders'];

                
                country_borders.innerText="";
                for(let i=0;i<borders.length;i++){
                    country_borders.innerText+=` ${borders[i]}, `;
                }







                imgs.setAttribute("src", national_flag); 
                country_name.innerText=name;
                country_region.innerText=region;
                country_capital.innerText=capital;
                country_subregion.innerText=subregion;
                country_alpha3Code.innerText=alpha3Code;
                country_topLevelDomain.innerText=topleveldomain;
                country_demonym.innerText=demonym;
                country_population.innerText=exactpop;
                country_area.innerText=area;
                country_nativename.innerText=nativename;
                country_callingcode.innerText=callcode;
                country_currency_name.innerText=currency_name;
                country_currency_code.innerText=currency_code;
                country_currency_symbol.innerText=currency_symbol;
                country_timezone.innerText=timezone;
                country_numericCode.innerText=numericCode;
                country_language.innerText=language;
                console.log(act[i])


            }
        }
        
        
    })
}

const getCountry=()=>{
    const coun=document.getElementById('selects').value;
    load(coun)
}