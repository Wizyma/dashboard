import { expect, test } from "@playwright/test";

test("Dashboard", async ({ page }) => {
  await page.goto("https://dashboard-client-ten.vercel.app");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Exercice Manaos Template/);

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/documents/);
});
