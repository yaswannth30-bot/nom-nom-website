const WA_NUMBER = "918015155872";
const MAPS_URL = "https://maps.app.goo.gl/j1MENTcejRHiRnYa8?g_st=aw";
const IMG_DIR = "assets/Menu/";
const BLAST_MIN = 300; // celebration starts at this total

/* v = labels for the two-price items: [first price, second price] */
const CATS = {
    fries: { label: "French Fries", e: "🍟", folder: "French Fries" },
    loaded: { label: "Fries & Chicken", e: "🔥", folder: "Loaded Fries" },
    burgers: { label: "Burgers", e: "🍔", folder: "Burgers" },
    momos: { label: "Momos", e: "🥟", folder: "Momos" },
    sandwich: { label: "Sandwich", e: "🥪", folder: "Sandwichs", v: ["Plain", "Cheese"] },
    wraps: { label: "Wraps", e: "🌯", folder: "Wraps", v: ["Plain", "Cheese"] },
    chicken: { label: "Fried Chicken", e: "🍗", folder: "Fried Chickens" },
    pizza: { label: "Pizza", e: "🍕", folder: "Pizzas", v: ["Regular", "Medium"] },
    panini: { label: "Panini", e: "🥪", folder: "Panini", v: ["Regular", "Medium"] },
    shakes: { label: "Thickshakes", e: "🥤", folder: "Thickshakes" },
    mojito: { label: "Mojitos", e: "🍹", folder: "Mojitos" }
};

/* Row: [name, price, extra, image file (no .png)]
   extra = text note ("6 pcs") OR a number = 2nd price (Cheese / Medium) for categories with v.
   File names must match your real files exactly. */
const DATA = {
    fries: [
        ["Classic French Fries", 85, "", "Classic french fries"],
        ["Peri Peri French Fries", 95, "", "Peri peri fries"],
        ["Mexican French Fries", 95, "", "Maxican French Fries "],
        ["Loaded Fries", 109, "", "French Fries/Loaded Fries"],
        ["Cheesy Peri Peri French Fries", 119, "", "Chessy Peri Peri French Fries "]
    ],
    loaded: [
        ["Lays Chicken", 109, "", "Lays chicken"],
        ["Paneer Loaded Fries", 129, "", "Panneer Loaded Fries"],
        ["Cheesy Paneer Loaded Fries", 159, "", "Cheesy Panneer Loaded Fries"],
        ["Fries & Chicken", 119, "", "Fries & Chicken"],
        ["Cheesy Fries & Chicken", 169, "", "Cheesy Fries & Chicken"],
        ["Nashville Chicken", 139, "", "Nashville Chicken"],
        ["Cheesy Nashville", 179, "", "Cheesy Nashville"]
    ],
    burgers: [
        ["Veg Burger", 89, "", "Veg Burger"],
        ["Veg Cheese Burger", 119, "", "Veg Chess Burger"],
        ["Fried Chicken Burger", 159, "", "Fried Chicken Burger"],
        ["Cheesy Chicken Burger", 189, "", "Cheesy Chicken Burger"],
        ["Burger Maniya", 189, "", "Burger Maniya"],
        ["No Bun Burger", 199, "", "No Bun Burger"]
    ],
    momos: [
        ["Veg Momos", 79, "6 pcs", "Veg Momos"],
        ["Peri Peri Veg Momos", 89, "6 pcs", "Peri peri momos"],
        ["Chicken Momos", 99, "6 pcs", "Chicken Momos"],
        ["Peri Peri Chicken Momos", 109, "6 pcs", "Peri peri momos"],
        ["Cheesy Momos", 139, "6 pcs", "Cheesy Momos"]
    ],
    sandwich: [
        ["Veg Sandwich", 75, 89, "Veg Sandwich"],
        ["Veg Chilli Sandwich", 85, "", "Veg Chilli Sandwich"],
        ["Corn Sandwich", 99, 109, "Corn Sandwich"],
        ["Paneer Sandwich", 90, 109, "Panner Sandwich"],
        ["Soya Sandwich", 99, 115, "Soya Sandwich"],
        ["Full Mixed Veg Sandwich", 129, "", "Full mixed veg Sandwich"],
        ["Veg Club Sandwich", 149, "", "Veg Club Sandwich"],
        ["Chicken Sandwich", 99, "", "Chicken Sandwich"],
        ["Chicken Chilli Sandwich", 105, "", "Chicken Chilli Sandwich"],
        ["Chicken Schezwan Sandwich", 109, "", "Chicken Schezwan"],
        ["Chicken Cheese Sandwich", 129, "", "Chicken Cheese Sandwich"],
        ["Nashville Chicken Sandwich", 139, "", "Nashville Chicken Sandwich"]
    ],
    wraps: [
        ["Veg Wrap", 79, 85, "Veg wraps"],
        ["Corn Wrap", 89, 90, "Corn wraps"],
        ["Paneer Wrap", 99, 115, "Panner wraps"],
        ["Chilli Veg Wrap", 85, 99, "Chilli Veg Wraps"],
        ["Fried Chicken Wrap", 109, 139, "Fried Chicken Wraps "],
        ["Chilli Fried Chicken Wrap", 115, 139, "Chilli Chicken Wraps"],
        ["Nashville Chicken Wrap", 129, 149, "Nashville Chicken Wraps"],
        ["Fried Chicken Burrito", 179, "", "Burito Wraps"],
        ["Double Toast Chicken Butter Wrap", 129, "", "Double Toast Chicken Butter Wrap"]
    ],
    chicken: [
        ["Chicken Strips", 159, "6 pcs", "Chicken Strips"],
        ["Chicken Popcorn", 130, "120 gm", "Chicken Popcorn"],
        ["Chicken Wings", 159, "5 pcs", "Chicken Wings"]
    ],
    pizza: [
        ["Margherita Pizza", 119, 140, "Margritta"],
        ["Veg Tikka Pizza", 135, 149, "Veg Tikka Pizza"],
        ["Corn Pizza", 149, 169, "Corn Pizza"],
        ["Paneer Pizza", 149, 179, "Panner Pizza"],
        ["Chicken Pizza", 169, 189, "Chicken Pizza"],
        ["Tandoori Pizza", 185, 219, "Tandoori Pizza"],
        ["Double Cheese Pizza", 179, 199, "Double Chees Pizza"],
        ["Mexican Pizza", 189, 222, "Maxcian Pizza"]
    ],
    panini: [
        ["Corn Panini", 129, 159, "Corn Panini"],
        ["Paneer Panini", 149, 179, "Paneer Panini"],
        ["Chicken Panini", 159, 189, "Chicken Panini"]
    ],
    shakes: [
        ["Vanilla Milk Shake", 89, "", "Vanilla Milk Shake"],
        ["White Rose Thickshake", 89, "", "White Rose"],
        ["Mango Thickshake", 89, "", "Mango"],
        ["Strawberry Thickshake", 89, "", "Strawberry Thickshake"],
        ["Chocolate Thickshake", 89, "", "Chocolate"],
        ["Classic Oreo Thickshake", 89, "", "Classic Oreo"],
        ["Green Apple Thickshake", 89, "", "Green Apple"],
        ["Blue Berry Thickshake", 89, "", "Blue Berry"]
    ],
    mojito: [
        ["Classic Virgin Mojito", 79, "", "Classic Virgin Mojito"],
        ["Chilli Mojito", 79, "", "Chilli Mojito"],
        ["Strawberry Mojito", 79, "", "Strawberry Mojito"],
        ["Mango Mojito", 79, "", "Mango Mojito"],
        ["Green Apple Mojito", 79, "", "Green Apple Mojito"],
        ["Black Currant Mojito", 79, "", "Black Current Mojito"],
        ["White Rose Mojito", 79, "", "White Rose Mojito"],
        ["Blue Berry Mojito", 79, "", "Blue Berry Mojito"]
    ]
};

/* COMBOS — parts = exact menu item names (photo + prices come from the menu)
   label = text shown on the card, icons = emoji per row, badge = ribbon text.
   price: null = auto total. Put a number, e.g. price: 249, for a special combo price. */
const COMBOS = [
    {
        name: "Momos Combo", badge: "Best Seller", featured: false, price: null,
        parts: ["Peri Peri Chicken Momos", "Classic French Fries", "Classic Virgin Mojito"],
        label: ["Peri Peri Chicken Momos", "Classic French Fries", "Classic Virgin Mojito"],
        icons: ["🥟", "🍟", "🍹"]
    },
    {
        name: "Crispy Burger Combo", badge: "Fan Favourite", featured: true, price: null,
        parts: ["Fried Chicken Burger", "Classic French Fries", "Classic Virgin Mojito"],
        label: ["Fried Chicken Burger", "Classic French Fries", "Classic Virgin Mojito"],
        icons: ["🍔", "🍟", "🍹"]
    },
    {
        name: "Wrap Combo", badge: "Must Try", featured: false, price: null,
        parts: ["Paneer Wrap", "Classic French Fries", "Classic Virgin Mojito"],
        label: ["Paneer Wrap (Plain)", "Classic French Fries", "Classic Virgin Mojito"],
        icons: ["🌯", "🍟", "🍹"]
    }
];

/* build flat menu list */
const menu = [];
Object.entries(DATA).forEach(([cat, rows]) => rows.forEach(([name, price, extra, file]) => {
    const alt = CATS[cat].v && typeof extra === "number" ? extra : null;
    const path = file.includes("/") ? file : CATS[cat].folder + "/" + file;
    menu.push({ cat, name, price, alt, note: alt ? "" : extra, icon: CATS[cat].e, img: encodeURI(IMG_DIR + path + ".png") });
}));

const $ = id => document.getElementById(id);
const grid = $("menuGrid"), filterRow = $("filters");
let cart = [], paymentMethod = "CASH";

/* ---------- scroll reveal (one observer for everything) ---------- */
const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
}), { threshold: 0.12 });
const watch = el => io.observe(el);
document.querySelectorAll(".reveal").forEach(watch);

/* scroll progress bar */
const bar = document.createElement("div"); bar.className = "scroll-bar"; document.body.prepend(bar);
addEventListener("scroll", () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + "%";
}, { passive: true });

/* ticker loop */
const tk = $("ticker"); tk.innerHTML += tk.innerHTML;

/* ---------- homepage: shop location button ---------- */
const heroBtn = document.querySelector(".hero-copy .btn-red");
if (heroBtn) {
    const wrap = document.createElement("div"); wrap.className = "hero-btns";
    heroBtn.replaceWith(wrap); wrap.appendChild(heroBtn);
    wrap.insertAdjacentHTML("beforeend", `<a class="btn btn-ghost loc-btn" href="${MAPS_URL}" target="_blank" rel="noopener">📍 Find our shop</a>`);
}

/* ---------- combos section (injected before the menu) ---------- */
const findItem = n => menu.find(m => m.name === n);
COMBOS.forEach(c => {
    c.items = c.parts.map(findItem);
    c.sum = c.items.reduce((s, m) => s + (m ? m.price : 0), 0);
    c.final = c.price ?? c.sum;
});
/* combo card styles (kept here so they always load) */
document.head.insertAdjacentHTML("beforeend", `<style>
#combos{padding:100px 5vw 20px}
#combos .combo-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:28px;max-width:1100px;margin:0 auto}
#combos .combo-card{background:var(--card);border:1px solid var(--line);border-radius:24px;padding:0;gap:0;display:flex;flex-direction:column;overflow:hidden;transition:transform .4s,border-color .4s,box-shadow .4s,opacity .8s}
#combos .combo-card.featured{border-color:var(--y);box-shadow:0 0 0 1px var(--yg)}
#combos .combo-card.in:hover{transform:translateY(-7px);border-color:var(--y);box-shadow:0 28px 60px rgba(0,0,0,.5)}
#combos .combo-photo{position:relative;width:100%;aspect-ratio:4/3;overflow:hidden;display:grid;grid-template-columns:none;gap:0;place-items:center;background:linear-gradient(135deg,rgba(255,215,0,.14),rgba(255,45,45,.12))}
#combos .combo-photo img{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;display:block;transition:transform .8s}
#combos .combo-card:hover .combo-photo img{transform:scale(1.07)}
#combos .combo-photo-fallback{font-size:64px;line-height:1;z-index:1}
#combos .combo-photo::after{content:"";position:absolute;left:0;right:0;bottom:0;height:60%;background:linear-gradient(to top,var(--card),transparent);pointer-events:none;z-index:1}
#combos .combo-badge{position:absolute;top:14px;left:0;z-index:2;background:var(--y);color:var(--navy);font-size:11px;font-weight:900;letter-spacing:1.5px;text-transform:uppercase;padding:6px 20px 6px 14px;clip-path:polygon(0 0,100% 0,92% 100%,0 100%)}
#combos .combo-card.featured .combo-badge{background:var(--r);color:#fff}
#combos .combo-body{flex:1;display:flex;flex-direction:column;gap:0;padding:22px 24px 24px}
#combos .combo-name{font-size:24px;line-height:1.2;margin:0 0 16px}
#combos .combo-items{list-style:none;margin:0 0 16px;padding:0;border-top:1px solid var(--line)}
#combos .combo-items li{display:flex;justify-content:space-between;align-items:center;padding:10px 0;font-size:14px;color:var(--mut);border-bottom:1px solid var(--line)}
#combos .combo-items li span:last-child{font-weight:800;color:#fff;white-space:nowrap;margin-left:12px}
#combos .combo-total-row{display:flex;justify-content:space-between;align-items:center;padding:12px 0 18px;font-size:13px;color:var(--mut);letter-spacing:1px;text-transform:uppercase;font-weight:700}
#combos .combo-total-row strong{font-family:Syne,sans-serif;font-size:26px;color:var(--y);letter-spacing:0}
#combos .combo-total-row s{font-family:"Plus Jakarta Sans",sans-serif;font-size:14px;color:var(--mut);margin-left:4px}
#combos .combo-order-btn{width:100%;margin-top:auto;padding:15px;background:transparent;border:2px solid var(--y);color:var(--y);font-size:13px;font-weight:900;letter-spacing:1.5px;text-transform:uppercase;border-radius:99px;cursor:pointer;transition:.25s}
#combos .combo-order-btn:hover{background:var(--y);color:var(--navy);transform:translateY(-2px);box-shadow:0 10px 28px var(--yg)}
#combos .combo-order-btn.featured{background:var(--y);color:var(--navy)}
#combos .combo-order-btn.added{background:#10b981;border-color:#10b981;color:#fff}
@media(max-width:700px){#combos{padding:64px 5vw 10px}#combos .combo-name{font-size:21px}}
</style>`);

$("menu").insertAdjacentHTML("beforebegin", `
<section class="combo-section" id="combos">
  <div class="center reveal">
    <p class="eyebrow">VALUE DEALS 🤝</p>
    <h2>Our best <span class="grad">combos.</span></h2>
    <p class="section-intro mx">Perfectly paired for maximum flavour at honest prices.</p>
  </div>
  <div class="combo-grid" id="comboGrid"></div>
</section>`);

$("comboGrid").innerHTML = COMBOS.map((c, i) => {
    const p = c.items[0];
    return `
  <article class="combo-card reveal${c.featured ? " featured" : ""}" style="--d:${i * 0.12}s">
    <div class="combo-photo">
      <span class="combo-photo-fallback">${c.icons[0]}</span>
      ${p ? `<img src="${p.img}" alt="${c.name}" loading="lazy" onerror="this.remove()">` : ""}
      <span class="combo-badge">${c.badge}</span>
    </div>
    <div class="combo-body">
      <h3 class="combo-name">${c.name}</h3>
      <ul class="combo-items">
        ${c.items.map((m, k) => `<li><span>${c.icons[k]} ${c.label[k]}</span><span>₹${m ? m.price : 0}</span></li>`).join("")}
      </ul>
      <div class="combo-total-row"><span>Combo Total</span><strong>₹${c.final}${c.final < c.sum ? ` <s>₹${c.sum}</s>` : ""}</strong></div>
      <button class="combo-order-btn${c.featured ? " featured" : ""}" data-combo="${i}">Add Combo to Basket</button>
    </div>
  </article>`;
}).join("");
document.querySelectorAll("#comboGrid .reveal").forEach(watch);

$("comboGrid").addEventListener("click", e => {
    const b = e.target.closest("[data-combo]"); if (!b) return;
    const c = COMBOS[+b.dataset.combo];
    addLine("Combo: " + c.name, c.final);
    b.classList.add("added"); b.textContent = "Added ✓";
    setTimeout(() => { b.classList.remove("added"); b.textContent = "Add Combo to Basket"; }, 1100);
});
/* ---------- filters ---------- */
filterRow.innerHTML = `<button class="filter active" data-filter="all">🔥 All</button>` +
    Object.entries(CATS).map(([k, c]) => `<button class="filter" data-filter="${k}">${c.e} ${c.label}</button>`).join("");
filterRow.addEventListener("click", e => {
    const b = e.target.closest(".filter"); if (!b) return;
    filterRow.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    renderItems(b.dataset.filter);
});

/* ---------- menu cards ---------- */
function renderItems(f = "all") {
    const items = menu.map((m, i) => ({ ...m, i })).filter(m => f === "all" || m.cat === f);
    grid.innerHTML = items.map(m => {
        const v = CATS[m.cat].v;
        return `
    <article class="menu-item" data-i="${m.i}">
      <div class="item-photo">
        <span class="photo-fallback">${m.icon}</span>
        <img src="${m.img}" alt="${m.name}" loading="lazy" onerror="this.remove()">
        <span class="item-price-tag">₹${m.price}${m.alt ? "+" : ""}</span>
      </div>
      <div class="item-body">
        <span class="item-cat">${CATS[m.cat].label}</span>
        <h3 class="item-name">${m.name}</h3>
        ${m.note ? `<p class="item-desc">${m.note}</p>` : ""}
        <div class="item-actions">
          ${m.alt ? `<div class="size-pick">
              <button class="size on" data-s="0">${v[0]} ₹${m.price}</button>
              <button class="size" data-s="1">${v[1]} ₹${m.alt}</button></div>` : ""}
          <button class="add-btn" data-add="${m.i}">+ Add to order</button>
        </div>
      </div>
    </article>`;
    }).join("");
    grid.querySelectorAll(".menu-item").forEach(watch);
}

grid.addEventListener("click", e => {
    const s = e.target.closest(".size");
    if (s) {
        s.parentElement.querySelectorAll(".size").forEach(x => x.classList.remove("on"));
        s.classList.add("on");
        return;
    }
    const a = e.target.closest("[data-add]");
    if (a) addToCart(+a.dataset.add, a);
});

/* ---------- cart ---------- */
const total = () => cart.reduce((s, i) => s + i.price * i.qty, 0);

function addLine(name, price) {
    const ex = cart.find(p => p.name === name);
    ex ? ex.qty++ : cart.push({ name, price, qty: 1 });
    renderCart();
    showToast(`🔥 ${name} added!`);
    const fc = $("floatCart");
    fc.classList.remove("bump"); void fc.offsetWidth; fc.classList.add("bump");
}

function addToCart(i, btn) {
    const m = menu[i]; let name = m.name, price = m.price;
    if (m.alt) {
        const on = grid.querySelector(`[data-i="${i}"] .size.on`);
        const k = on ? +on.dataset.s : 0;
        name += ` (${CATS[m.cat].v[k]})`;
        if (k === 1) price = m.alt;
    }
    addLine(name, price);
    btn.classList.add("added"); btn.textContent = "Added ✓";
    setTimeout(() => { btn.classList.remove("added"); btn.textContent = "+ Add to order"; }, 1100);
}

function renderCart() {
    $("cartItems").innerHTML = cart.length
        ? cart.map(i => `<div class="cart-line"><span>${i.name} × ${i.qty}</span><span>₹${i.price * i.qty}</span></div>`).join("")
        : `<p class="empty">Your basket is empty.<br>Add something bussin ✨</p>`;
    $("cartTotal").textContent = "₹" + total();
    const n = cart.reduce((s, i) => s + i.qty, 0);
    $("floatCart").classList.toggle("visible", n > 0);
    $("floatCartLabel").textContent = `${n} item${n > 1 ? "s" : ""}`;
    $("floatCartTotal").textContent = "₹" + total();
}

$("clearCart").addEventListener("click", () => { cart = []; renderCart(); showToast("Cart cleared 🗑️"); });
$("floatCart").addEventListener("click", () => $("order").scrollIntoView({ behavior: "smooth" }));

function showToast(msg) {
    const t = $("toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(showToast.t);
    showToast.t = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---------- celebration: confetti + balloons ---------- */
function blast() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cv = document.createElement("canvas");
    cv.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:10001";
    cv.width = innerWidth; cv.height = innerHeight; document.body.appendChild(cv);
    const ctx = cv.getContext("2d"), cols = ["#FFD700", "#FF2D2D", "#ffffff", "#3b82f6", "#10b981"];
    const ps = [];
    for (let k = 0; k < 260; k++) {
        const left = k % 2 === 0, ang = (left ? -60 : -120) * Math.PI / 180 + (Math.random() - .5) * .9, sp = 12 + Math.random() * 12;
        ps.push({
            x: left ? 0 : cv.width, y: cv.height, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
            w: 6 + Math.random() * 7, h: 10 + Math.random() * 8, r: Math.random() * 6, vr: (Math.random() - .5) * .4,
            c: cols[k % cols.length]
        });
    }
    const t0 = performance.now();
    (function tick(t) {
        ctx.clearRect(0, 0, cv.width, cv.height);
        ps.forEach(p => {
            p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
            ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
        });
        t - t0 < 5000 ? requestAnimationFrame(tick) : cv.remove();
    })(t0);
    for (let k = 0; k < 16; k++) {
        const b = document.createElement("span"); b.className = "balloon"; b.textContent = "🎈";
        b.style.cssText = `left:${Math.random() * 94}vw;font-size:${34 + Math.random() * 30}px;animation-delay:${Math.random() * 1.2}s;animation-duration:${4 + Math.random() * 2.5}s`;
        document.body.appendChild(b); setTimeout(() => b.remove(), 8000);
    }
}

/* ---------- thank-you popup ---------- */
document.body.insertAdjacentHTML("beforeend", `
<div class="pay-overlay" id="thanksOverlay"><div class="pay-modal thanks">
  <div class="thanks-emoji" id="thanksEmoji">🎉</div>
  <h3 class="pay-title">Thank you for your order!</h3>
  <p class="thanks-msg" id="thanksMsg"></p>
  <div class="order-code"><small>YOUR ORDER ID</small><strong id="orderCode">#0000</strong></div>
  <button class="btn btn-red full" id="thanksClose">Done 💛</button>
</div></div>`);
$("thanksClose").addEventListener("click", () => $("thanksOverlay").classList.remove("open"));
$("thanksOverlay").addEventListener("click", e => { if (e.target.id === "thanksOverlay") $("thanksOverlay").classList.remove("open"); });

/* ---------- payment ---------- */
const overlay = $("payOverlay");
$("orderBtn").addEventListener("click", () => {
    if (!cart.length) return showToast("Add items to your basket first bestie! 🛒");
    $("payTotalAmt").textContent = "₹" + total();
    $("payOrderList").innerHTML = cart.map(i => `<div class="cart-line"><span>${i.name} x ${i.qty}</span><span>₹${i.price * i.qty}</span></div>`).join("");
    $("methodCash").classList.remove("active"); $("methodGPay").classList.remove("active");
    $("gpaySection").style.display = "none"; $("confirmPaidBtn").style.display = "none";
    overlay.classList.add("open");
});
$("payClose").addEventListener("click", () => overlay.classList.remove("open"));
overlay.addEventListener("click", e => { if (e.target === overlay) overlay.classList.remove("open"); });

function pickMethod(m) {
    paymentMethod = m;
    $("methodCash").classList.toggle("active", m === "CASH");
    $("methodGPay").classList.toggle("active", m === "GPAY");
    $("gpaySection").style.display = m === "GPAY" ? "block" : "none";
    $("confirmPaidBtn").style.display = "flex";
}
$("methodCash").addEventListener("click", () => pickMethod("CASH"));
$("methodGPay").addEventListener("click", () => pickMethod("GPAY"));

$("confirmPaidBtn").addEventListener("click", () => {
    const code = Math.floor(1000 + Math.random() * 9000);   // 4-digit order ID
    const sum = total();
    const lines = cart.map(i => `• *${i.name}* x${i.qty} = ₹${i.price * i.qty}`).join("\n");
    const text = `🍽️ *NEW ORDER — NOM NOM* 🔥\n🧾 *Order ID: #${code}*\n\n${lines}\n\n*Total: ₹${sum}*\nPayment: ${paymentMethod}\n\n_No cap, this order is bussin!_ ✨`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");

    cart = []; renderCart(); overlay.classList.remove("open");

    const big = sum >= BLAST_MIN;
    $("orderCode").textContent = "#" + code;
    $("thanksEmoji").textContent = big ? "🥳" : "🎉";
    $("thanksMsg").textContent = (big ? "Big order energy! 🎈 " : "") +
        `Your total is ₹${sum}. Tap Send in WhatsApp to confirm — show this Order ID at the cart.`;
    $("thanksOverlay").classList.add("open");
    if (big) blast();
});

/* ---------- mobile nav ---------- */
const mo = $("mobileNavOverlay");
const openNav = () => { mo.classList.add("open"); document.body.style.overflow = "hidden"; };
const closeNav = () => { mo.classList.remove("open"); document.body.style.overflow = ""; };
$("menuToggle").addEventListener("click", openNav);
$("mobileNavClose").addEventListener("click", closeNav);
mo.addEventListener("click", e => { if (e.target === mo) closeNav(); });
document.querySelectorAll(".mobile-nav-link").forEach(l => l.addEventListener("click", closeNav));

/* ---------- star rating ---------- */
const stars = document.querySelectorAll(".star-btn"); let picked = 0;
const lit = v => stars.forEach((b, i) => b.classList.toggle("active", i < v));
stars.forEach(b => {
    b.addEventListener("mouseenter", () => lit(+b.dataset.val));
    b.addEventListener("mouseleave", () => lit(picked));
    b.addEventListener("click", () => { picked = +b.dataset.val; $("fbRating").value = picked + " stars"; lit(picked); });
});
$("feedbackForm").addEventListener("submit", () => showToast("Vibe check sent! 🚀 We gotchu bestie!"));

/* ---------- init ---------- */
$("year").textContent = new Date().getFullYear();
renderItems();
renderCart();