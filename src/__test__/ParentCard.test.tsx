import { render, screen } from "@testing-library/react";
import MediaCard from "../cards/ParentCard";
import { CustomLink } from "../common/CustomLink";

const TestCard = () => {
  return (
    <MediaCard
      title="Configure your shop"
      CardBody={<p>This is body</p>}
      CardFooter={<CustomLink content="footer link" hasIcon />}
    />
  );
};

const ExpectNodes = (nodes: HTMLElement[]) => {
  nodes.forEach((elm) => {
    expect(elm).toBeInTheDocument();
    expect(elm).toBeVisible();
  });
};

describe("BaseCard Component Tests", () => {
  it("Renders without Crashing", () => {
    render(<TestCard />);
  });

  it("Renders all elements", () => {
    render(<TestCard />);
    const title = screen.getByText(/Configure your shop/i);
    const Cardbody = screen.getByText(/This is body/i);
    const CardFooter = screen.getByText(/footer link/i);
    ExpectNodes([title, Cardbody, CardFooter]);
  });
});
