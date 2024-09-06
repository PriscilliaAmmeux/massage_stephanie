import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.massage-stephanie-heudre.fr/");
});
