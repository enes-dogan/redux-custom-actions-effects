import { CardProps } from '../../types.ts';

export default function Card({ children, className }: CardProps) {
  return (
    <section className={`card ${className ? className : ''}`}>
      {children}
    </section>
  );
}
