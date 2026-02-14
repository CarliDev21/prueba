// Parte A: Primitivos vs Objetos
const perfilBase = { nombre: "Carlos", rol: "Desarrollador", skills: ["HTML", "CSS"] };
const perfilTemporal = perfilBase;

perfilTemporal.rol = "Frontend Engineer";
perfilTemporal.skills.push("JavaScript");

console.log(perfilBase.rol); // ¿Qué imprime esto y por qué?
console.log(perfilBase.skills); // ¿Qué imprime esto y por qué?

// Parte B: Scope
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(`Cargando módulo ${i}`); 
  }, 100);
}
// ¿Qué imprime el bucle en la consola? ¿Cómo lo modificarías usando la sintaxis de ES6 (let/const) para que imprima 1, 2 y 3 correctamente?