import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.massage-stephanie-heudre.fr/");
  await page.getByRole("link", { name: "Accueil" }).click();
await page.getByLabel("Envoyer un email").click();
await page.getByRole("link", { name: "Accueil" }).click();
await page.getByLabel("Envoyer un email").click();
await page.getByRole("link", { name: "Accueil" }).click();
await page.getByRole("link", { name: "Mentions légales" }).click();
await page.getByRole("link", { name: "Accueil" }).click();
const page2Promise = page.waitForEvent("popup");
await page.getByRole("link", { name: "www.priscillia-ammeux-" }).click();
const page2 = await page2Promise;
await page.getByRole("link", { name: "Prestations" }).click();
await page.getByRole("link", { name: "Contact" }).click();
await page.getByRole("link", { name: "Chi Nei Tsang" }).click();
await page.getByRole("link", { name: "Prestations" }).click();
await page.getByRole("link", { name: "Réfléxologie crânienne" }).click();
await page.getByRole("link", { name: "Prestations" }).click();
await page.getByRole("link", { name: "Qualité de Vie au Travail" }).click();
});
