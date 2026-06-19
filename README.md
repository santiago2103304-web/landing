# 🏛️ Landing Page Política - Proceso de Integración Continua

[![Integración Continua - Landing Page Política](https://github.com/santiago2103304-web/landing/actions/workflows/ci.yml/badge.svg)](https://github.com/santiago2103304-web/landing)

## 🛠️ Documentación Técnica del Workflow
Este repositorio cuenta con un pipeline de **Integración Continua (CI)** automatizado mediante **GitHub Actions**. El archivo de configuración se encuentra en `.github/workflows/ci.yml`.

### Acciones Automatizadas:
1. **Disparadores (Triggers):** Se ejecuta automáticamente en cada `push` o `pull_request` directo a la rama `main`.
2. **Entorno de ejecución:** Servidor virtualizado en la nube con `ubuntu-latest`.
3. **Validaciones integradas:**
   - Clonación segura del código fuente en el contenedor de GitHub.
   - Verificación estricta de la presencia de los componentes obligatorios del proyecto: `index.html`, `css/style.css`, `js/script.js` y `README.md`.

---

## 🧠 Reflexión Final (Respuestas al Taller)

1. **¿Qué beneficios aporta la Integración Continua?**
   Permite detectar errores de forma temprana antes de pasar a producción, garantiza que el código que se integra a la rama principal cumpla con los estándares mínimos del proyecto y automatiza tareas repetitivas de revisión ahorrando tiempo al equipo de desarrollo.

2. **¿Qué errores detecta GitHub Actions?**
   En este pipeline específico, detecta fallas estructurales críticas como la falta de archivos obligatorios, rutas mal escritas o problemas de mayúsculas y minúsculas debido a que corre sobre un entorno Linux. En flujos más avanzados, detecta errores de sintaxis (linters) y pruebas unitarias fallidas.

3. **¿Por qué automatizar validaciones?**
   Porque reduce el riesgo del error humano, agiliza los flujos de trabajo en equipo y asegura que ningún cambio nuevo rompa de forma inadvertida la base del proyecto que ya está funcionando.

4. **¿Cómo mejorarías el workflow?**
   Integraría herramientas de análisis estático como ESLint para asegurar la calidad del código JavaScript y Stylelint para el CSS, junto con una acción de minificación de archivos automática para optimizar el rendimiento de la carga de la página.