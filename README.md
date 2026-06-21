
# DOM Physics Engine

Turn any webpage into a real-time physics simulation using Matter.js.

DOM elements are treated as physical bodies with mass, collision, and force.

---

## ✨ Features

- DOM elements become physics objects
- Real-time collision simulation
- Mouse drag interaction
- Click-based force explosion
- No build step required (CDN supported)

---

## 📦 Installation

```bash
npm install dom-physics-engine
````

---

## 🚀 Usage

```js
import { initPhysics } from "dom-physics-engine";

initPhysics(document.body);
```

That’s it.

Your DOM will now obey physics instead of layout rules.

---

## 🌐 CDN Usage

```html
<script src="https://cdn.jsdelivr.net/npm/dom-physics-engine@1.0.0/dist/dom-physics.umd.js"></script>

<script>
  DomPhysics.initPhysics(document.body);
</script>
```

---

## ⚙️ How it works

* Parses DOM elements
* Converts each element into a rigid body
* Uses Matter.js physics engine
* Syncs DOM position with physics simulation loop

---

## ⚠️ Warning

This library intentionally breaks normal layout behavior.

It is not intended for production UI systems or accessibility-critical applications.

Use at your own risk.

---

## 🧠 Philosophy

UI does not have to be stable.

Sometimes, it is more honest when it falls apart under physics.

