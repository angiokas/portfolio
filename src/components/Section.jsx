function Section({ sectionClassName, title = "Enter Title", children }) {
  return (
    <>
      <section className={sectionClassName}>
        <div className="section-title">{title}</div>
        <div className="section-content">{children}</div>
      </section>
    </>
  );
}

export default Section;
