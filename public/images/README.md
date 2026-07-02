# Imagens do site

As imagens atuais são **placeholders temporários** (arquivos SVG com a
identidade visual provisória da Pulso). Elas devem ser substituídas por
**fotografias profissionais** antes da publicação.

## Requisitos ao substituir

- Usar fotos de **alta resolução** (mínimo recomendado: 1600px de largura para heros).
- Preferir o formato **WebP** (ou JPG otimizado) para fotos.
- **Não** usar imagens com texto embutido.
- **Não** usar logotipos ou marcas de seguradoras.
- Manter proporções semelhantes às atuais para evitar _layout shift_.
- Ao trocar, mantenha o **mesmo nome de arquivo** (ou atualize a referência no componente correspondente).

## Arquivos a substituir

| Arquivo | Onde aparece | Sugestão de conteúdo |
| --- | --- | --- |
| `home/hero-condominio.svg` | Banner principal da Home | Condomínio moderno / fachada de prédio |
| `home/sobre-consultoria.svg` | Seção "Sobre a Pulso" (Home) | Atendimento consultivo / reunião |
| `seguro-condominio/hero.svg` | Banner da landing de Seguro Condomínio | Condomínio / áreas comuns |
| `institucional/equipe.svg` | Página Quem Somos | Equipe / atendimento |
| `og-default.svg` | Compartilhamento em redes (Open Graph) | **Substituir por PNG/JPG 1200×630** — a maioria dos crawlers (Facebook, WhatsApp, Twitter) não lê SVG |

## Assets oficiais já incluídos (não são placeholders)

- `logo.webp` — logotipo oficial da Pulso (usado no cabeçalho, menu e rodapé).
- `favicon.webp` — ícone oficial (usado como favicon do navegador).

> Observação: ao trocar `og-default.svg` por um `.png`/`.jpg`, atualize também o
> valor padrão em `src/components/common/SEO.tsx`.
