import Card from "./components/Card";

export default function Page() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}
    >
      <Card
        text="Text text here is the description of a card."
        avatarSrc="/images/user1.png"
        labelStatus="Done"
      />
    </div>
  );
}
