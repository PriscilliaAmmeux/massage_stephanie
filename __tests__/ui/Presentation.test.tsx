import { render, screen } from "@testing-library/react";
import Presentation from "../../src/app/ui/presentation/presentation";
import { describe, it } from "node:test";

describe("Presentation Component", () => {
  it("renders without crashing", () => {
    render(<Presentation />);
    expect(screen.getByText("Présentation")).toBeInTheDocument();
  });

  it("renders profile image", () => {
    render(<Presentation />);
    const img = screen.getByAltText("photo profil");
    expect(img).toBeInTheDocument();
  });

  it("renders text content", () => {
    render(<Presentation />);
    const textElement = screen.getByText(
      /Infirmière de formation et attachée de recherche clinique/i
    );
    expect(textElement).toBeInTheDocument();
  });
});
function expect(arg0: any) {
  throw new Error("Function not implemented.");
}
