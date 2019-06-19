import React,{Component} from 'react';
import color from './config';


const ThemeContext = React.createContext('light');
  
  function ThemedButton(props) {
    return (
      <ThemeContext.Consumer>
            {theme => <button className={theme} {...props} />}
      </ThemeContext.Consumer>
    );
  }

const ThemeContextz = React.createContext('light');
  
  // Эта функция принимает компонент...
  export function withTheme(Component) {
    // ... возвращает другой компонент...
    return function ThemedComponent(props) {
      // ... и отрисовывает обернутый компонент с темой из контекста!
      // Обратите внимание, что мы с таким же успехом можем передавать
      // любое дополнительное свойство
      return (
        <ThemeContext.Consumer>
          {theme => <Component {...props} theme={theme} />}
        </ThemeContext.Consumer>
      );
    };
  }

  function Button({theme, ...rest}) {
    return <button className={theme} {...rest} />;
  }
  
  const ThemedButton = withTheme(Button);
 
  


