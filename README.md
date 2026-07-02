# Pulso — Site Institucional e Comercial

Site institucional e comercial da **Pulso**, uma consultoria especializada em
soluções de proteção, seguros, rastreamento e benefícios. O foco comercial
principal desta versão é o produto **Seguro Condomínio**.

O site é uma SPA (Single Page Application) estática, sem backend, pronta para
publicação no **Cloudflare Pages**. O principal canal de conversão é o
**WhatsApp**: os formulários montam uma mensagem organizada e abrem o WhatsApp
com os dados preenchidos.

---

## Tecnologias

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build e dev server)
- [Tailwind CSS](https://tailwindcss.com/) (estilos + tema/identidade visual)
- [React Router](https://reactrouter.com/) (rotas)
- [Lucide React](https://lucide.dev/) (ícones)
- [react-helmet-async](https://github.com/staylor/react-helmet-async) (SEO / meta tags)

Sem backend, sem WordPress e sem Next.js.

---

## Requisitos

- Node.js **20 LTS** (ver arquivo [`.nvmrc`](./.nvmrc))
- npm 9+

---

## Como instalar

```bash
npm install
```

## Como executar (desenvolvimento)

```bash
npm run dev
```

O site ficará disponível em `http://localhost:5173`.

## Como gerar o build de produção

```bash
npm run build
```

Os arquivos finais são gerados na pasta **`dist/`**.

Para pré-visualizar o build:

```bash
npm run preview
```

## Validações

```bash
npm run lint        # ESLint
npm run typecheck   # Verificação de tipos TypeScript
```

---

## Publicação no Cloudflare Pages

Configuração no painel do Cloudflare Pages:

```text
Framework preset:        Vite
Build command:           npm run build
Build output directory:  dist
```

- A versão do Node é definida pelo arquivo `.nvmrc` (Node 20 LTS).
- O arquivo [`public/_redirects`](./public/_redirects) contém `/* /index.html 200`,
  responsável por fazer o roteamento SPA funcionar em produção. Isso garante que
  ao acessar diretamente uma URL interna (ex.: `/seguro-condominio`) ou atualizar
  a página, o app carregue corretamente em vez de retornar 404.
- Não há Functions, Workers nem `wrangler.toml` — não são necessários nesta versão.

---

## Onde editar os dados (placeholders)

Todos os dados de contato estão centralizados em **[`src/config/site.ts`](./src/config/site.ts)**.
Procure pelos comentários `// TODO:` e substitua:

| Dado | Campo em `site.ts` |
| --- | --- |
| WhatsApp | `whatsappNumber` (somente dígitos, ex.: `5531999999999`) |
| Telefone (exibição) | `phoneDisplay` |
| E-mail | `email` |
| Horário de atendimento | `businessHours` |
| Domínio oficial | `siteUrl` |
| Redes sociais | `social.instagram`, `social.facebook`, `social.linkedin` |
| Endereço (opcional) | `address` |
| Mensagens de WhatsApp | `whatsappMessages` |

> Ao alterar `siteUrl`, atualize **também** o domínio em
> [`public/robots.txt`](./public/robots.txt) e
> [`public/sitemap.xml`](./public/sitemap.xml).

### Logotipo

- O logotipo oficial **já está incluído** em `public/images/logo.webp` e é
  usado no cabeçalho, no menu mobile e no rodapé
  ([`src/components/layout/Logo.tsx`](./src/components/layout/Logo.tsx)).
- O favicon oficial está em `public/images/favicon.webp`.
- Para atualizar, basta substituir esses arquivos mantendo o mesmo nome.

### Onde substituir imagens

- As imagens atuais são **placeholders** em `public/images/` (arquivos `.svg`).
- Veja [`public/images/README.md`](./public/images/README.md) para a lista
  completa e as recomendações (formato, resolução, etc.).

### Como editar os textos

- Textos das seções: componentes em `src/components/sections/` e páginas em `src/pages/`.
- Conteúdos estruturados (coberturas, soluções, FAQ): arquivos em `src/data/`.

---

## Estrutura de rotas

| Rota | Página | Arquivo |
| --- | --- | --- |
| `/` | Início | `src/pages/Home.tsx` |
| `/seguro-condominio` | Landing de Seguro Condomínio | `src/pages/CondoInsurance.tsx` |
| `/solucoes` | Soluções | `src/pages/Solutions.tsx` |
| `/quem-somos` | Institucional | `src/pages/About.tsx` |
| `/contato` | Contato | `src/pages/Contact.tsx` |
| `/politica-de-privacidade` | Política de Privacidade | `src/pages/PrivacyPolicy.tsx` |
| `*` | Página 404 personalizada | `src/pages/NotFound.tsx` |

---

## Como funcionam os formulários

Não há backend nesta versão. Ao enviar um formulário (cotação ou contato):

1. Os campos são validados no frontend (com máscaras de telefone e CNPJ).
2. É obrigatório marcar o consentimento LGPD (link para a Política de Privacidade).
3. Uma mensagem organizada é montada e o **WhatsApp é aberto** com os dados preenchidos.

Nenhum dado é armazenado no `localStorage`, em banco de dados ou enviado
silenciosamente a serviços externos.

---

## SEO

- Meta tags por página via `react-helmet-async` (componente `src/components/common/SEO.tsx`):
  `title`, `description`, canonical, Open Graph e Twitter Card.
- Dados estruturados (JSON-LD): Organization, WebSite, Service (Seguro Condomínio),
  FAQPage (landing) e BreadcrumbList (páginas internas) — ver `src/lib/structuredData.ts`.
- `public/robots.txt` e `public/sitemap.xml` (lembre-se de trocar o domínio).

---

## Placeholders pendentes (substituir antes de publicar)

- [ ] Número de WhatsApp real (`site.ts` → `whatsappNumber`)
- [ ] Telefone real (`site.ts` → `phoneDisplay`)
- [ ] E-mail real (`site.ts` → `email`)
- [ ] Horário de atendimento (`site.ts` → `businessHours`)
- [ ] Domínio oficial (`site.ts` → `siteUrl`, `robots.txt`, `sitemap.xml`)
- [ ] Redes sociais (`site.ts` → `social`)
- [ ] Endereço, se aplicável (`site.ts` → `address`)
- [ ] Fotografias profissionais (substituir os `.svg` em `public/images/`)
- [ ] Imagem Open Graph em PNG/JPG 1200×630 (`public/images/og-default.svg`)
- [x] Logotipo oficial — já incluído (`public/images/logo.webp`)
- [x] Favicon oficial — já incluído (`public/images/favicon.webp`)

---

## Observações importantes

- Os conteúdos do site têm **caráter informativo**. Coberturas, limites,
  franquias, carências, exclusões e condições dependem da solução contratada e
  da respectiva apólice.
- Não há nomes ou logotipos de seguradoras no site (uso de expressões como
  "parceiros especializados").
- Nenhum dado empresarial (CNPJ, endereço, registros, certificações, números)
  foi inventado.
