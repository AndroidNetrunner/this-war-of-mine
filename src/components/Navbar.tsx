import React from "react";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navbar({ setPage }: { setPage: Function }) {
  return (
    <BootstrapNavbar bg="secondary" variant="dark">
      <Nav className="me-auto">
        <Nav
          onClick={() => {
            setPage("storage");
          }}
        >
          저장고
        </Nav>
        <Nav
          onClick={() => {
            setPage("findings");
          }}
        >
          발견물 더미
        </Nav>
        <Nav
          onClick={() => {
            setPage("trading");
          }}
        >
          거래
        </Nav>
      </Nav>
    </BootstrapNavbar>
  );
}
