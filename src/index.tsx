import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'semantic-ui-react

export default class ApplicationComponent extends React.Component<{},{}> {
    render() {
        return <div>
            <Button></Button>
        </div>
    }
}

ReactDOM.render(ApplicationComponent, document.getElementById('app'))
