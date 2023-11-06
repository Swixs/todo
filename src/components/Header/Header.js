import classHeader from './Header.module.css'
import {Row, Col} from 'react-bootstrap'

function Header() {
    return (
        <Row>
            <Col>
                <div className={classHeader.root}> TodoList </div>
            </Col>
        </Row>

    )
}

export default Header