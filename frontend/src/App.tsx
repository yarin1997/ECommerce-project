
import { Outlet } from 'react-router-dom'
import './index.css'
// import { sampleProducts } from './data'
import { Container, Nav, Navbar  } from 'react-bootstrap'

function App() {
  

  return (
    <div className="d-flex flex-column vh-100">
      <header>
        TS Amazona
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Amazona</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signIn" className="nav-link">
              sign in
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
         <Outlet/>
        </Container>
      </main>
      <footer className='text-center'>
        <div>All right reserved</div>
      </footer>
    </div>
  )
}

export default App
