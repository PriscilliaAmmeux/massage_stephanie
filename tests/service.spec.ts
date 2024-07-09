import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.massage-stephanie-heudre.fr/prestations");
  await page.getByRole("heading", { name: "Massage Assis ou AMMA" }).click();
  await page.getByRole("heading", { name: "Chi Nei Tsang" }).click();
  await page.getByRole("heading", { name: "Réfléxologie crânienne" }).click();
  await page
    .getByRole("heading", { name: "Je me déplace dans les villes" })
    .click();
  await page
    .getByRole("heading", { name: "Qualité de Vie au Travail (" })
    .click();
  await page.getByLabel("Envoyer un email").click();
  await page.getByText("Politiques de confidentialité").click();
  await page.getByLabel("Fermer").click();
  await page
    .locator("footer")
    .getByRole("img", { name: "logo SH pour Stéphanie Heudre" })
    .click();
});
