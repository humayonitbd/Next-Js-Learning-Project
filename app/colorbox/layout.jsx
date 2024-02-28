
export default function ColorboxLayout({children, left, right}) {
  return (
    <section>
      {children}
      {left}
      {right}
    </section>
  );
}
