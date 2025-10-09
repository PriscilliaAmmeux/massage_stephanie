import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.massage-stephanie-heudre.fr/prestations");
  await page
    .locator("#prestations")
    .getByRole("heading", { name: "Prestations" })
    .click();
  await page
    .getByRole("heading", { name: "Je me déplace dans les villes" })
    .click();
  await page
    .getByRole("heading", { name: "Qualité de Vie au Travail (" })
    .click();
  await page.getByText("Pourquoi choisir ce service ?").click();
  await page.getByText("Contactez-moi dès aujourd'hui").click();
  await page.getByLabel("Envoyer un email").click();
  await page.getByRole("link", { name: "Prestations" }).click();

  await page
    .locator("footer")
    .getByRole("img", { name: "logo SH pour Stéphanie Heudre" })
    .click();
  await page.getByRole("link", { name: "Mentions légales" }).click();

});
