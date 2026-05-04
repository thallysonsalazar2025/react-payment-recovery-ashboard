import { test, expect } from '@playwright/test';

test('dashboard flow renders core elements', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page.getByText('ML Payment Recovery Dashboard')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Novo Pagamento' })).toBeVisible();
  await expect(page.getByText('Status dos Pagamentos')).toBeVisible();
});
