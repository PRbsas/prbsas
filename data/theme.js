import { withTheme } from 'styled-components'

class MyComponent extends React.Component {
  render() {
    const { theme } = this.props

    console.log('Current theme: ', theme);
    // ...
  }
}

export default withTheme(MyComponent)
