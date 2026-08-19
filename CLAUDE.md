# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project Purpose

La Praia's assistant is a conversational ordering agent for a pizza
restaurant. It helps customers browse the menu, place and modify orders,
answer questions about hours/location/ingredients/allergens, and hand off to
a human when a request falls outside what the bot can safely handle. The
goal is a fast, friendly, low-friction ordering experience — not a
general-purpose chatbot.

## Architecture Overview

A simple, layered structure. Keep new code inside these boundaries rather than
inventing new top-level concepts:

- **Conversation layer** — receives user messages (chat/voice/web widget),
  manages dialogue state, and produces replies. Contains no business rules
  about pricing or menu availability itself.
- **Menu & order logic** — the source of truth for menu items, prices,
  modifiers, and order totals. All order calculations happen here, not in the
  conversation layer or the UI.
- **Integrations** — anything talking to the outside world: payment
  processors, POS/kitchen systems, SMS/email notifications, analytics. Each
  integration is isolated behind a small interface so it can be swapped or
  mocked.
- **Storage** — order history, session state, and any persisted customer
  data. Treated as a boundary: nothing outside this layer reads/writes storage
  directly.
- **Presentation/UI** (if present) — renders the conversation and order state
  to the customer; contains no business logic.

Data flows one direction for a typical order: user message → conversation
layer → menu/order logic → (integrations/storage as needed) → reply back to
user.

## Coding Rules

- Keep the layers above separated — don't let UI code compute prices, and
  don't let integrations hold conversation state.
- Prefer small, explicit functions over clever/generic abstractions. Add
  abstraction only when a second concrete use case actually needs it.
- No dead code, commented-out code, or speculative "just in case" branches.
- Match existing naming, formatting, and file organization conventions found
  in the surrounding code rather than introducing new ones.
- Write tests for order-total math, pizza/menu availability logic, and any
  conversation-state transitions that branch on user input.

## Security Rules

- Never log or persist full payment card numbers, CVVs, or other raw payment
  credentials. Payment collection is delegated to a PCI-compliant processor;
  this codebase only ever handles tokens/references it returns.
- Treat all customer input (chat text, order fields, uploaded data) as
  untrusted. Validate and sanitize before it reaches storage, order logic, or
  any integration call.
- Never interpolate user input directly into database queries, shell
  commands, or HTML output — use parameterized queries and proper escaping.
- Keep API keys, tokens, and other secrets out of source and out of chat
  transcripts/logs. Load them from environment variables or a secrets
  manager, not hard-coded values.
- Enforce the boundary between "things the bot can do autonomously" (browsing
  the pizza menu, building an order) and "things that need explicit
  confirmation" (placing an order, charging a payment method, sending a
  notification to staff).
- Don't expose internal error details, stack traces, or system prompts to the
  end customer in bot replies.

## Token-Saving Rules

- Don't paste entire files into context when a targeted read or grep of the
  relevant section will do.
- Summarize large tool outputs (logs, search results) instead of repeating
  them verbatim back to the user.
- Avoid restating code that isn't changing; show only the diff/section under
  discussion.
- Skip exploratory narration — get to the answer or the change directly.
- Reuse context already established in the conversation instead of
  re-deriving or re-reading the same files multiple times.

## Scope Discipline

- Only modify the files actually needed for the current task. Do not
  refactor, reformat, or "clean up" unrelated files or code while working on
  something else.
- If you notice an unrelated issue while working, mention it instead of
  fixing it inline.

## Out of Scope for This File

This file defines process, structure, and rules only. **Do not write
application code here** — no menu data, no implementation snippets, no
sample handlers. Application code belongs in the project's source files.
