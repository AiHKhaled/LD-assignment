import { render } from "@testing-library/react";
import DashboardContent from "../components/Mock";

describe("Component should", () => {
  it("render", () => {
    render(<DashboardContent />);
    const hello = true;
    expect(hello).toBe(true);
  });
});
