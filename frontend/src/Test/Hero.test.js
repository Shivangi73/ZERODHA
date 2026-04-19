import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";
import signup from "../Landing_page/signup/Signup";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero image");;
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });
   test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button",{name:'/signup/now/i'});;
    expect(signupButto).toBeInTheDocument();
    expect(signupButto).toHaveClass("btn-primary");
  });
  
});