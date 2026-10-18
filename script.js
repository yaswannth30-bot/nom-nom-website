const WA_NUMBER = "918015155872";
const IMG_DIR = "assets/Menu/";

const CATS = {
    fries: { label: "French Fries", e: "🍟", folder: "French Fries" },
    loaded: { label: "Loaded Fries", e: "🔥", folder: "Loaded Fries" },
    burgers: { label: "Burgers", e: "🍔", folder: "Burgers" },
    momos: { label: "Momos", e: "🥟", folder: "Momos" },
    sandwich: { label: "Sandwich", e: "🥪", folder: "Sandwichs" },
    wraps: { label: "Wraps", e: "🌯", folder: "Wraps" },
    chicken: { label: "Fried Chicken", e: "🍗", folder: "Fried Chickens" },
    pizza: { label: "Pizza", e: "🍕", folder: "Pizzas" },
    pasta: { label: "Pasta", e: "🍝", folder: "Pastas" },
    shakes: { label: "Thickshakes", e: "🥤", folder: "Thickshakes" },
    mojito: { label: "Mojitos", e: "🍹", folder: "Mojitos" }
};

/* Row format: [display name, price, extra, image file name (no .png)]
   extra = note text, e.g. "6 pcs"  — for PIZZA it is the MEDIUM price.
   price null = not set yet. A file containing "/" is read from assets/Menu/ directly.
   File names must match your real files EXACTLY (including trailing spaces). */
const DATA = {
    fries: [
        ["Classic French Fries", 79, "", "Classic french fries"],
        ["Peri Peri French Fries", 89, "", "Peri peri fries"],
        ["Mexican French Fries", 89, "", "Maxican French Fries "],
        ["Cheesy Peri Peri French Fries", 109, "", "Chessy Peri Peri French Fries "]
    ],
    loaded: [
        ["Loaded Fries", 99, "", "French Fries/Loaded Fries"],
        ["Chicken Loaded Fries", 119, "", "Chicken Loaded Fries"],
        ["Lays Chicken", 99, "", "Lays chicken"]
    ],
    burgers: [   // Burgers folder wasn't visible in your screenshots — fix file names here if needed
        ["Veg Burger", 89, "", "Veg Burger"],
        ["Double Patty Veg Burger", 99, "", "Double Patty Veg Burger"],
        ["Veg Cheese Burger", 99, "", "Veg Chess Burger"],
        ["Fried Chicken Burger", 139, "", "Fried Chicken Burger"],
        ["Cheesy Chicken Burger", 149, "", "Cheesy Chicken Burger"],
        ["Double Cheese Chicken Burger", 165, "", "Double Cheese Chicken Burger"],
        ["Burger Maniya", 169, "", "Burger Maniya"],
        ["No Bun Burger", 189, "", "No Bun Burger"]
    ],
    momos: [
        ["Veg Momos", 69, "6 pcs", "Veg Momos"],
        ["Chicken Momos", 85, "6 pcs", "Chicken Momos"],
        ["Peri Peri Momos", 89, "6 pcs", "Peri peri momos"]
    ],
    sandwich: [
        ["Veg Sandwich", 65, "", "Veg Sandwich"],
        ["Chicken Sandwich", 79, "", "Chicken Sandwich"],
        ["Paneer Sandwich", 85, "", "Panner Sandwich"],
        ["Chicken Schezwan Sandwich", 85, "", "Chicken Schezwan"],
        ["Chicken Cheese Sandwich", 95, "", "Chicken Cheese Sandwich"],
        ["Corn Sandwich", 99, "", "Corn Sandwich"],
        ["Veg Club Sandwich", 99, "", "Veg Club Sandwich"],
        ["Chicken Club Sandwich", 122, "", "Chicken Club Sandwich"]
    ],
    wraps: [
        ["Veg Wrap", 70, "", "Veg wraps"],
        ["S/W Veg Wrap", 75, "", "SW veg wraps"],
        ["Corn Wrap", 75, "", "Corn wraps"],
        ["Paneer Wrap", 85, "", "Panner wraps"],
        ["Chicken Wrap", 89, "", "Chicken wraps"],
        ["Chicken Cheese Wrap", 99, "", "Chicken Cheese Wraps"],
        ["Burrito Wrap", 119, "", "Burito Wraps"]
    ],
    chicken: [
        ["Chicken Popcorn", 119, "130 g", "Chicken Popcorn"],
        ["Chicken Strips", 159, "6 pcs", "Chicken Strips"],
        ["Chicken Wings", 159, "5 pcs", "Chicken Wings"]
    ],
    pizza: [     // [name, regular price, MEDIUM price, file]
        ["Margherita Pizza", 120, 140, "Margritta"],
        ["Veg Tikka Pizza", 125, 150, "Veg Tikka Pizza"],
        ["Corn Pizza", 135, 159, "Corn Pizza"],
        ["Paneer Pizza", 145, 175, "Panner Pizza"],
        ["Double Cheese Pizza", 159, 189, "Double Chees Pizza"],
        ["Chicken Pizza", 159, 199, "Chicken Pizza"],
        ["Tandoori Pizza", 175, 210, "Tandoori Pizza"],
        ["Hot & Spicy Pizza", 175, 210, "Hot & Spicy Pizza"],
        ["Mexican Pizza", 175, 210, "Maxcian Pizza"]
    ],
    pasta: [
        ["Classic Veg Pasta", null, "", "Classic Veg Pasta"],
        ["Mac & Cheese Pasta", null, "", "Mac & Cheese Pasta"],
        ["Chilli Cheesy Pasta", null, "", "Chilli Cheesy Pasta"],
        ["Corn Pasta", null, "", "Corn Pasta"],
        ["Paneer Pasta", null, "", "Panner Pasta"],
        ["Fried Chicken Mac & Cheese", null, "", "Fried Chicken Mac & Cheese"],
        ["Chicken Momos Pasta", null, "", "Chicken Momos Pasta"]
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
        ["Blue Berry Mojito", 79, "", "Blue Berry Mojito"],
        ["Blue Mint Mojito", 79, "", "Blue Mint Mojito"]
    ]
};

/* build flat menu list */
const menu = [];
Object.entries(DATA).forEach(([cat, rows]) => rows.forEach(([name, price, extra, file]) => {
    const pizza = cat === "pizza";
    const path = file.includes("/") ? file : CATS[cat].folder + "/" + file;
    menu.push({
        cat, name, price,
        note: pizza ? "" : extra,
        med: pizza ? extra : null,
        icon: CATS[cat].e,
        img: encodeURI(IMG_DIR + path + ".png")
    });
}));

const $ = id => document.getElementById(id);
const grid = $("menuGrid"), filterRow = $("filters");
let cart = [], paymentMethod = "CASH";

/* ticker: duplicate for seamless loop */
const tk = $("ticker"); tk.innerHTML += tk.innerHTML;

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
    grid.innerHTML = items.map((m, n) => `
    <article class="menu-item" data-i="${m.i}" style="--d:${Math.min(n * 0.05, 0.6)}s">
      <div class="item-photo">
        <span class="photo-fallback">${m.icon}</span>
        <img src="${m.img}" alt="${m.name}" loading="lazy" onerror="this.remove()">
        <span class="item-price-tag">${m.price == null ? "Ask" : "₹" + m.price}</span>
      </div>
      <div class="item-body">
        <span class="item-cat">${CATS[m.cat].label}</span>
        <h3 class="item-name">${m.name}</h3>
        ${m.note ? `<p class="item-desc">${m.note}</p>` : ""}
        <div class="item-actions">
          ${m.med ? `<div class="size-pick">
              <button class="size on" data-s="R">Regular ₹${m.price}</button>
              <button class="size" data-s="M">Medium ₹${m.med}</button></div>` : ""}
          ${m.price == null
            ? `<button class="add-btn" disabled>Price coming soon</button>`
            : `<button class="add-btn" data-add="${m.i}">+ Add to order</button>`}
        </div>
      </div>
    </article>`).join("");
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

function addToCart(i, btn) {
    const m = menu[i]; let name = m.name, price = m.price;
    if (m.med) {
        const on = grid.querySelector(`[data-i="${i}"] .size.on`);
        if (on && on.dataset.s === "M") { name += " (M)"; price = m.med; } else name += " (R)";
    }
    const ex = cart.find(p => p.name === name);
    ex ? ex.qty++ : cart.push({ name, price, qty: 1 });
    renderCart();
    showToast(`🔥 ${name} added!`);

    if (btn) {                       // "Added ✓" feedback
        btn.classList.add("added"); btn.textContent = "Added ✓";
        setTimeout(() => { btn.classList.remove("added"); btn.textContent = "+ Add to order"; }, 1100);
    }
    const fc = $("floatCart");       // cart bump
    fc.classList.remove("bump"); void fc.offsetWidth; fc.classList.add("bump");
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
    const lines = cart.map(i => `• *${i.name}* x${i.qty} = ₹${i.price * i.qty}`).join("\n");
    const text = `🍽️ *NEW ORDER — NOM NOM* 🔥\n\n${lines}\n\n*Total: ₹${total()}*\nPayment: ${paymentMethod}\n\n_No cap, this order is bussin!_ ✨`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    cart = []; renderCart(); overlay.classList.remove("open"); showToast("Order placed via WhatsApp! 🎉");
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

/* ---------- scroll reveal (slide / fade in) ---------- */
const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---------- init ---------- */
$("year").textContent = new Date().getFullYear();
renderItems();
renderCart();