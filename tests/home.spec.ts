import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.massage-stephanie-heudre.fr/");
  await page.getByRole("link", { name: "Accueil" }).click();
  await page.getByRole("heading", { name: "Qui suis je ?" }).click();
  await page.getByText("Infirmière de formation (dipl").click();
  await page.getByText("bien-être", { exact: true }).click();
  await page.getByText("réflexologie crânienne").click();
  await page.getByRole("main").getByText("Chi Nei Tsang").click();
  await page.getByText("massage assis", { exact: true }).click();
  await page.getByText("QVT").click();
  await page
    .getByRole("heading", { name: "Comment prendre rendez vous ?" })
    .click();
  await page.getByLabel("Envoyer un email").click();
  await page.getByText("Mentions légales:").click();
    await page.getByLabel("Fermer").click();
  await page
    .locator("footer")
    .getByRole("img", { name: "logo SH pour Stéphanie Heudre" })
    .click();
  await page.getByRole("heading", { name: "Stéphanie HEUDRE" }).click();
  await page
    .getByRole("heading", { name: "Praticienne bien-être certifi" })
    .click();
  await page.getByText("J'offre des services de").click();
  await page.getByRole("link", { name: "Prestations" }).click();
  await page.getByRole("link", { name: "Contact" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Link to Facebook profile" }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Link to LinkedIn profile" }).click();
  const page2 = await page2Promise;
});
