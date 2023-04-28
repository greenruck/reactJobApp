import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";

it("matches snapshot with logo", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <CompanyCard
                handle="greenruck"
                name="bootcamp"
                description="Become a decent developer in 9 months."
                logo_url="https://i.pinimg.com/originals/bb/36/b4/bb36b4fbece699b2958f3d2e25078476.png"
            />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot without logo", function () {
    const { asFragment } =render(
        <MemoryRouter>
            <CompanyCard
            handle="basic"
            name="basic School"
            description="Become a lost developer in 9 years."
        />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});