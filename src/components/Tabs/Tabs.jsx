import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={cn({
              'is-active': activeTab.id === tab.id,
            })}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={event => {
                event.preventDefault();

                if (![...event.target.classList].includes('is-active')) {
                  onTabSelected(tab.id);
                }
              }}
            >
              {tab.id}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent" key={activeTab.id}>
      {activeTab.content}
    </div>
  </div>
);
