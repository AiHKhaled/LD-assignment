import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SideBar, { Drawer } from "../Drawer/Drawer";

describe("SideBar component Should render", () => {
  test("", () => {
    render(<SideBar sideBarState={sideBarState} handleState={closeSideBar} />);

    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});

describe("Check if SideBar is", () => {
  test("open", () => {
    render(<SideBar sideBarState={sideBarState} handleState={closeSideBar} />);
    const sideContainer = document.getElementsByClassName("MuiPaper-root");
    const styles = window.getComputedStyle(sideContainer[0]);
    expect(styles.transform).toBe("none");
  });

  test("closed", () => {
    render(<SideBar sideBarState={sideBarState} handleState={closeSideBar} />);
    const sideContainer = document.getElementsByClassName("MuiPaper-root");
    // const button = screen.getByTestId('MenuIcon')
    const button = screen.getAllByRole("button");
    // console.log(button[0])
    userEvent.click(button[0]);
    const styles = window.getComputedStyle(sideContainer[0]);
    console.log(styles);
  });
});
