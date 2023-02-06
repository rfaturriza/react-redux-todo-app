import Nav from 'react-bootstrap/Nav';

function NavbarHeader() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/">TODO APP</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavbarHeader;