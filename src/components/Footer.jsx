<<<<<<< HEAD
import { MDBFooter } from 'mdb-react-ui-kit';
=======
import { MDBFooter } from "mdb-react-ui-kit";
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          gaada
        </a>
      </div>
    </MDBFooter>
  );
}
