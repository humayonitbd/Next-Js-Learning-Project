
export default function ColorboxLayout({children, left, right}) {
    const sliders = true;
  return (
    <section>
      {children}
      {left}
      {right}
      {/* {sliders ? left : right} */}
    </section>
  );
}
