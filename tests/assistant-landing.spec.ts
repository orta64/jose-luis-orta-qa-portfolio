import { expect, test } from "@playwright/test";

const landingUrl = "https://www.carmendigital.net/asistente";

test.describe("Carmen Digital assistant language selection", () => {
  test("shows the Spanish and English choices with the intended routes", async ({ page }) => {
    await page.goto(landingUrl);

    await expect(
      page.getByRole("heading", { name: /Tu IA, lista para ayudarte/i }),
    ).toBeVisible();

    await expect(
      page.getByRole("link", { name: /Conversar en español con Valeria/i }),
    ).toHaveAttribute("href", "/es/valeria");

    await expect(
      page.getByRole("link", { name: /Talk in English with Claire/i }),
    ).toHaveAttribute("href", "/en/claire");
  });

  test("exposes both choices without submitting a lead", async ({ page }) => {
    await page.goto(landingUrl);

    await expect(page.getByText(/IA en español · Valeria/i)).toBeVisible();
    await expect(page.getByText(/English AI · Claire/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /Conversar en español con Valeria/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Talk in English with Claire/i })).toBeVisible();
  });
});

