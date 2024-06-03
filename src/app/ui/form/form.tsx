export default function Form() {
  return (
    <form>
      <input type="text" placeholder="Votre nom" />
      <input type="email" placeholder="Votre email" />
      <textarea placeholder="Votre message"></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
}
