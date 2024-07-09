import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.massage-stephanie-heudre.fr/contact");
  await page.getByRole("link", { name: "Accueil" }).click();
  await page.getByRole("link", { name: "Prestations" }).click();
  await page.getByRole("link", { name: "Contact" }).click();
  await page.getByRole("heading", { name: "Stéphanie HEUDRE" }).click();
  await page
    .getByRole("heading", { name: "Praticienne bien-être certifi" })
    .click();
  await page.getByText("J'offre des services de").click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByLabel("Link to Facebook profile").click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent("popup");
  await page.getByLabel("Link to LinkedIn profile").click();
  const page2 = await page2Promise;
  await page.getByRole("heading", { name: "Formulaire de contact" }).click();
  await page.getByRole("heading", { name: "Informations de contact" }).click();
  await page.getByText("Quesnoy-Sur-Deûle").click();
  await page.getByText("+ 33 6 76 39 74").click();
  await page.getByRole("link", { name: "heudre.stephanie@gmail.com" }).click();
  await page.getByText("Politiques de confidentialité").click();
  await page.getByLabel("Fermer").click();
});
