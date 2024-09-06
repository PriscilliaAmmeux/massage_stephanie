import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.massage-stephanie-heudre.fr/");
  await page.getByRole("link", { name: "Accueil" }).click();
  await page.getByLabel("Envoyer un email").click();
  const page6Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "www.priscillia-ammeux-" }).click();
  const page6 = await page6Promise;
  await page.getByRole("link", { name: "Prestations" }).click();
  await page.getByRole("link", { name: "Contact" }).click();
  const page7Promise = page.waitForEvent("popup");
  await page.getByLabel("Link to Facebook profile").click();
  const page7 = await page7Promise;
  const page8Promise = page.waitForEvent("popup");
  await page.getByLabel("Link to LinkedIn profile").click();
  const page8 = await page8Promise;
});
