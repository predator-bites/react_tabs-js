import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected, activeTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={cn({
              'is-active': activeTabId === tab.id,
            })}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => onTabSelected(tab)}
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
