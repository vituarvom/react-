import "./App.css";
import { SectionWrapper } from "./components/common/section-wrapper";
import UseCountDown from "./components/hooks/UseCountdown";
import UseLocalStorage from "./components/hooks/UseLocalStorage";
import { UseNetwork } from "./components/hooks/UseNetwork";
import UsePrevious from "./components/hooks/UsePrevious";

function App() {
  const rsu = [
    {
      title: "Hooks",
      children: [
        {
          title: "UseCountdown",
          node: <UseCountDown />,
        },
        {
          title: "UsePrevious",
          node: <UsePrevious />,
        },
        {
          title: "UseLocalStorage",
          node: <UseLocalStorage />,
        },
        {
          title: "UseNetwork",
          node: <UseNetwork />,
        },
        
      ],
    },
    {
      title: "Utils",
      children: [
        {
          title: "sleep",
          node: <UseCountDown />,
        },
      ],
    },
  ];

  return (
    <>
      <div
        style={{
          padding: '2rem',
          border: "1px dashed yellow",
          borderRadius: "1.3rem",
        }}
      >
        <h1>Content</h1>

        <ul>
          {rsu.map((_rsu, _index) => (
            <div key={Date.now() + _index}>
              <li>{_rsu.title}</li>
              <ol>
                {_rsu.children.map((__rsu, __index) => (
                  <li key={Date.now() + __index + _index} title={__rsu.title}>
                    {__rsu.title}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </ul>
      </div>

      {rsu.map((_rsu) => {
        return (
          <div style={{ paddingLeft: "2%", borderBottomWidth: '2px', borderBottomColor: 'red'}} key={Date.now()}>
            <a href={_rsu.title} id={_rsu.title}>
              #{_rsu.title}
            </a>
            {_rsu.children.map((__rsu) => (
              <SectionWrapper
                key={Date.now()}
                to={`${_rsu.title}-${__rsu.title}`}
                title={__rsu.title}
              >
                {__rsu.node}
              </SectionWrapper>
            ))}
          </div>
        );
      })}
    </>
  );
}

export default App;
