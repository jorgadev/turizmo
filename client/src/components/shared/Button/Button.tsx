type Props = {
  title: string;
  onClick: () => void;
};

export default function Button({ title = "Button", onClick }: Props) {
  return <button onClick={onClick}>{title}</button>;
}
