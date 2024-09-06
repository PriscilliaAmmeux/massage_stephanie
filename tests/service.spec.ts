import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.massage-stephanie-heudre.fr/prestations");
  await page.getByRole("link", { name: "Contact" }).click();
  await page.getByRole("link", { name: "Chi Nei Tsang" }).click();
  await page.getByRole("link", { name: "Prestations" }).click();
  await page.getByRole("link", { name: "Réfléxologie crânienne" }).click();
  await page.getByRole("link", { name: "Prestations" }).click();
  await page.getByRole("link", { name: "Qualité de Vie au Travail" }).click();
  await page.getByRole("link", { name: "Massage Assis ou AMMA" }).click();
  await page.getByRole("link", { name: "Réfléxologie crânienne" }).click();
  await page.getByRole("link", { name: "Qualité de Vie au Travail" }).click();
  await page.getByLabel("Envoyer un email").click();
  await page.getByRole("link", { name: "Prestations" }).click();
  await page.getByRole("link", { name: "Mentions légales" }).click();
  await page.getByRole("link", { name: "Prestations" }).click();
  const page3Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "www.priscillia-ammeux-" }).click();
  const page3 = await page3Promise;
  const page4Promise = page.waitForEvent("popup");
  await page.getByLabel("Link to Facebook profile").click();
  const page4 = await page4Promise;
  const page5Promise = page.waitForEvent("popup");
  await page.getByLabel("Link to LinkedIn profile").click();
  const page5 = await page5Promise;
});
