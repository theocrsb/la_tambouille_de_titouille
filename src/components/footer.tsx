function FooterComponent() {
  return (
    <footer className="bg-light py-3 mt-5 shadow">
      <div className="container text-center">
        <small className="text-muted">
          &copy; {new Date().getFullYear()} la_tambouille_de_titouille. Tous
          droits réservés.
        </small>
      </div>
    </footer>
  );
}

export default FooterComponent;
