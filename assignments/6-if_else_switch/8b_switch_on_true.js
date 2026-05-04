console.log("8b: Switch on `true` — range matching with expressions");
let duration =7;

switch (true) {
    case duration <1:
    console.log("⚡ Very fast test");
    case duration <3:
        break;
    console.log("✅ Fast test");
    case duration <6:
    console.log("⚠️ Acceptable — consider optimising");
        break;
    default: 
    console.log("🐢 Slow test — needs attention");

}