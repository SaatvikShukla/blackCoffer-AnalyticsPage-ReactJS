import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { MDBDataTable } from 'mdbreact';
import jsondata from "./jsondata.json";
// import DataTable from "./DataTable";
require("highcharts/modules/wordcloud")(Highcharts);
let DataTable = require('react-data-components').DataTable;
require('react-data-components/css/table-twbs.css')
function App() {
  let text = 'gas energy electricity gas energy coal oil energy oil  power energy greenhouse gas energy security energy oil energy energy energy energy energy solar power energy electricity solar energy  coal energy car nanotechnology energy energy energy energy subsidy gas power security building oil mining technology electricity energy  food population electrification energy  food energy gas electronics car energy power coal unemployment economy money energy energy power energy power energy energy policy battery energy gas capital economy power energy energy gas  export energy electricity renewable energy energy vehicle energy emission energy power energy  investment energy emission energy energy oil energy heating energy policy energy energy population energy biofuel energy oil  economic growth energy coal energy energy power water energy building coal energy gas gas energy vehicle battery energy artificial intelligence technology electricity energy car electricity gas renewable energy export population  electricity  energy infrastructure oil gas energy investment construction economy energy energy power energy energy wind power utility bus investment oil electricity construction energy power gas energy energy policy energy security infrastructure energy energy battery car shale gas production energy wind power energy car energy energy  consumption gas gasoline  energy energy city food energy population job security energy energy energy energy oil energy cyber energy energy extinction energy energy power gas power inflation battery renewable energy energy wind power renewable energy energy economy power energy cargo wind power energy bank fracking power quantum collaboration oil  emission energy energy nuclear power technology power emission renewable energy technology oil electricity oil production energy car collaboration energy energy revenue energy energy research oil energy economy gas oil energy oil solar power food power gas energy power gas oil gas ict oil technology energy cash energy oil solar energy energy oil  solar energy solar power transport export oil asset grid food energy energy energy water investment energy oil energy investment energy solar power oil economy technology oil oil energy  renewable energy renewable energy oil administration vehicle sustainability asset energy energy energy  energy  energy solar power business consumption power oil oil vehicle military defence battery  energy energy gas oil electricity solar power  energy technology technology power catalyst bank energy oil energy knowledge gas energy vehicle energy power battery oil energy energy energy oil resource energy food city energy energy energy battery energy gas energy vehicle wastewater coal coal vehicle revenue energy energy energy coal power investment security energy nuclear power oil economy energy health energy technology energy nuclear weapon energy oil energy electronics oil grid energy energy inflation energy energy energy production energy diesel gasoline  energy solar power gas energy grid diesel electricity sustainability oil energy manufacturing renewable energy lithium gas energy energy gas oil coal energy energy oil energy energy oil energy technology  power brand solar power power energy car wind power energy energy city electricity power energy energy solar energy climate policy technology oil energy agriculture energy coal vehicle energy electrification power policy gas vehicle renewable energy renewable energy energy oil heating energy renewable energy car energy network energy oil oil brain solar energy oil construction power fossil fuel oil energy energy power customer gas energy energy energy power energy renewable energy grid power solar power energy car security environment trade energy economy energy manufacturing oil brexit emission energy gasoline renewable energy economy power car energy energy energy energy energy energy city energy solar power data emission production energy gas gas oil  energy gas energy power export gas gas hydroelectricity electricity energy consumption gas oil energy nuclear weapon vehicle city vehicle gas energy energy energy supply energy innovation energy energy oil energy power power job gasoline interest rate ocean oil body energy energy energy coal inflation oil energy energy energy energy oil food solar power energy renewable energy power oil software   technology energy investment oil energy solar power energy resource energy investment energy coal technology water economy energy energy energy energy inflation uav energy energy wind power gas solar energy renewable energy nuclear power power-generation oil economy energy oil energy power politics shale gas energy gas electricity technology security communication energy electricity construction  energy power tax power energy solar power energy solar power vehicle export energy export export gas oil transport power gas energy energy energy energy  energy  energy export gas gas oil battery energy power coal economic growth energy coal vehicle energy energy energy car coal gas gas energy energy energy energy energy infrastructure energy energy energy energy oil renewable energy car economic growth biofuel  data power energy natural resources greenhouse gas export greenhouse gas vehicle oil energy oil production energy energy energy electricity power electricity transport renewable energy energy energy energy emission energy energy energy energy solar energy energy economy energy energy oil mining gas energy energy waste gas battery coal vehicle oil energy oil energy infrastructure gas gas oil gas greenhouse gas oil electricity renewable energy production energy energy gas energy renewable energy electricity quantum climate renewable energy gas energy energy coal  gas food energy industry city energy energy laser energy car health material energy artificial intelligence gas population oil gas oil computer energy power wind power oil energy sustainability energy energy 5G  government energy solar power  gas city greenhouse gas electricity energy lithium investment grid energy energy solar power  grid energy production energy energy migration energy renewable energy export energy electricity internet of things data energy energy electricity fracking oil nuclear weapon city solar power oil gas economy coal electricity energy oil renewable energy coal energy energy research  energy investment gas technology subsidy energy energy battery export power renewable energy energy subsidy energy robot energy gas nuclear weapon governance energy oil pilot energy bank energy energy energy energy fossil fuel energy oil energy fossil fuel gas gas energy oil grid energy  energy energy investment oil economy investment energy energy city oil energy power-generation  battery energy energy oil gas renewable energy energy renewable energy energy oil renewable energy energy power oil renewable energy oil business energy car power oil  policy energy  population energy energy battery energy energy battery energy bank gdp technology economy energy energy health oil energy 5G innovation energy energy aviation economy city energy transport gas 4D energy administration technology greenhouse gas export emission energy energy carbon dioxide emission energy internet of things greenhouse gas energy energy M2M oil electricity energy renewable energy revenue energy energy gas oil renewable energy population  gas oil power oil export energy energy oil gas technology oil oil peace oil solar power';
  let lines = text.split(/[,\. ]+/g),
    data = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);
  const options = {
    series: [{
      type: 'wordcloud',
      data: data,
      name: 'Frequency',
      minFontSize: 8,
      maxFontSize: 40
    }],
    title: {
        text: ''
    }
  }

  const card_data = [
    {
      header: "energy",
      content: "34 | gaining traction | probable",
      link: "https://www.fastcompany.com/90163759/this-space-heater-mines-cryptocurrency-to-keep-you-warm"
    },
    {
      header: "oil",
      content: "90 | Gaining Traction | Probable",
      link: "https://www.resilience.org/stories/2018-03-12/peak-oil-review-12-march-2018/"
    },
    {
      header: "gas",
      content: "61 | Gaining Traction | Probable",
      link: "https://naturalgasnow.org/shale-gas-news-march-10-2018/"
    },
    {
      header: "power",
      content: "46 | Gaining Traction | Probable",
      link: "https://www.defenceconnect.com.au/key-enablers/2018-australia-to-develop-new-defence-deployable-power-generation-asset"
    },
    {
      header: "Renewable Energy",
      content: "29 | Gaining Traction | Probable",
      link: "https://www.eon.com/en/about-us/media/press-release/2018/eon-and-rwe-two-european-energy-companies-focus-their-activities.html"
    },
    {
      header: "electricity",
      content: "24 | Gaining Traction | Probable",
      link: "http://norden.diva-portal.org/smash/get/diva2:1195548/FULLTEXT01.pdf"
    },
    {
      header: "coal",
      content: "19 | Gaining Traction | Probable",
      link: "https://abcnews.go.com/Technology/wireStory/report-coals-tipping-point-climate-goals-53921540"
    },
    {
      header: "solar power",
      content: "18 | Gaining Traction | Business as usual",
      link: "https://uk.reuters.com/article/uk-india-solar-alliance/france-to-commit-700-million-euros-to-international-solar-alliance-idUKKCN1GN0JW"
    },
    {
      header: "Technology",
      content: "18 | Gaining Traction | Probable",
      link: "https://phys.org/news/2018-03-sweet-material-hydrogen-storage.html"
    },
    {
      header: "Economy",
      content: "16 | Gaining Traction | Probable",
      link: "http://www.brinknews.com/southeast-asias-renewable-energy-potential/?utm_source=BRINK+Asia"
    }
  ]

  let ddata = jsondata;
  ddata.forEach(function(item) {
    let TItem = (<a href={item.url}>{item.title}</a>)
    item.title = TItem;//setting the value
    // delete item.num;//deleting the num from the object
  });

  var columns = [
    { title: 'Title', prop: 'title'  },
    { title: 'Topic', prop: 'topic' },
    { title: 'Year', prop: 'end_year' },
    { title: 'Intensity', prop: 'intensity' },
    { title: 'Sector', prop: 'sector' },
    { title: 'Region', prop: 'region' },
    { title: 'PESTLE', prop: 'pestle' },
    { title: 'SWOT', prop: 'swot' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img className={"logoimage"} src={"https://www.blackcoffer.com/assets/images/Logo/white1.png"}></img>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <body>
        <div className={"app-shell"}>
          <div className={"wordcloudWrapper"}>
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
            />
          </div>
          <div className={"flex-container"}>
            {card_data.map((item) => {
              return (
              <div className={"card"}>
                <div className={"card__header"}>
                  {(item.header)}
                </div>
                <div className={"card__content"}>
                  {item.content}
                </div>
              </div>);
            })}
          </div>
          <div className={"maindata"}>
            <DataTable
              keys="id"
              columns={columns}
              initialData={ddata}
              initialPageLength={5}
              pageLengthOptions={[ 5, 10, 20, 50 ]}
              initialSortBy={{ prop: 'topic', order: 'descending' }}
            />
          </div>
          {/* <DataTable data={jsondata} /> */}
        </div>
      </body>
    </div>
  );
}

export default App;
