import StylesJSON from '!!@advclb/sassdoc-loader!../assets/utilities.scss';
import { ref } from 'vue';

export default {
  title: 'Styles/Utilities',
};

interface Context {
  type?: string;
  name?: string;
  code?: string;
  line?: Object;
}

interface StylesJSONInterface {
  [key: string]: any;
  description?: string;
  commentRange?: Object;
  context?: Context;
  example?: Record<string, any>;
  group?: Record<string, any>;
  access?: string;
  require?: Record<string, any>;
  file?: object;
}

const Template = (args: any) => ({
  setup() {
    const data: any = StylesJSON;
    const navData = ref(
      data.reduce((acc: StylesJSONInterface, obj: any) => {
        const key = obj?.group?.[0];
        if (key && !acc[key]) {
          acc[key] = {
            items: [],
            expand: false,
          };
        }
        // Add object to list for given key's value
        acc[key].items.push(obj);
        return acc;
      }, {}),
    );

    const toggle = (group: Record<string, any>) => () => {
      group.expand = !group.expand;
    };

    return () => (
      <div style="display:flex;flex: 1; height:100vh;">
        <div style="padding:16px;overflow:auto">
          <h1 style="margin-bottom:30px">Utilities</h1>
          {data.map((item: any) => {
            if (item.context?.type === 'mixin') {
              return (
                <div id={item.context.name}>
                  <h2 style="margin-bottom:12px;">
                    <a href={'#' + item.context.name}>{item.context.name}</a>
                  </h2>
                  {item.description ? (
                    <div style="margin-bottom: 16px">
                      <h5 style="margin-bottom:4px;">Description:</h5>
                      <p style="font-size: 14px;">{item.description}</p>
                    </div>
                  ) : (
                    ''
                  )}
                  {item.example && item.example[0].code ? (
                    <div style="margin-bottom: 16px">
                      <h5 style="margin-bottom:8px">Example:</h5>{' '}
                      <pre style="font-size: 14px; background-color: #333;padding:12px;color: white;border-radius: 8px">
                        {item.example[0].code.replace('ex:', '')}
                      </pre>
                    </div>
                  ) : (
                    ''
                  )}
                  <div style="margin-bottom:16px">
                    <h5 style="margin-bottom:4px;">Mixin Definition:</h5>
                    <pre style="font-size: 14px; background-color: #333;padding:12px;color: white;border-radius: 8px">
                      @mixin {item.context.name} {'{'}
                      {item?.context?.code}
                      {'}'}
                    </pre>
                  </div>
                  {item.require?.length ? (
                    <div>
                      <h5 style="margin-bottom:8px">Require:</h5>
                      <div>
                        {item.require.map((item: StylesJSONInterface) => (
                          <span class="g-tag">{item.name}</span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                  <hr style="margin: 20px 0;" />
                </div>
              );
            }
          })}
        </div>
        <aside style="position:sticky;top:0;right:0;padding: 16px;border-left:1px solid #ddd;overflow:auto;flex-basis: 20%;">
          <ul>
            {Object.keys(navData.value).map((group) => (
              <li>
                <h5 style="text-transform: capitalize" onClick={toggle(navData.value[group])}>
                  {!navData.value[group].expand ? '▶' : '▲'} {group}
                </h5>
                {navData.value[group].expand && (
                  <ul style="padding-left: 20px;padding-bottom: 16px;">
                    {navData.value[group].items.map((item: StylesJSONInterface) => (
                      <li>
                        <a href={'#' + item.context?.name}>{item.context?.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    );
  },
});

export const Default = Template.bind({});
