# Comprar, Pedir Prestado, Morir — Libro, Audiolibro y App de Curso

Este repositorio contiene la versión digital del bestseller y el ecosistema educativo interactivo basado en el sistema financiero de **"Comprar, Pedir Prestado, Morir"** de **Albert Sierra**.

El proyecto está diseñado bajo la filosofía y estructura comercial de libros de finanzas de alta calidad (estilo *"Padre Rico, Padre Pobre"*) y optimizado tanto para la venta física como digital.

---

## 📂 Contenido del Proyecto

### 1. 📚 Libros Maquetados y Listos para Distribución
* **`LIBRO_FINAL_MAQUETADO.pdf`**: Formato físico definitivo con **márgenes espejo** (Gutter/Lomo para encuadernación) y numeración inteligente de páginas a partir del índice, ideal para imprenta o venta en Hotmart.
* **`LIBRO_FINAL_MAQUETADO.docx`**: Archivo de Microsoft Word en tamaño estándar **6" x 9"** configurado con el lomo de encuadernación oficial requerido para autopublicación directa en **Amazon KDP**.
* **`LIBRO_FINAL_MAQUETADO.html`**: Versión interactiva para lectura web, equipada con barra de herramientas, modo noche (noche, crema, claro) e índice dinámico.
* **`LIBRO_FINAL_EPUB.html`**: Código HTML semántico fluido con saltos de página automáticos por capítulo, listo para su conversión a formato **EPUB / Kindle (.mobi)** en Amazon KDP o Calibre.

### 2. 🎨 Portadas y Material Gráfico
* **`PORTADA_DIGITAL_KINDLE.png`**: Portada minimalista basada en texturas oscuras y tipografías en relieve dorado compuestas programáticamente (sin textos generados por IA).
* **`CUBIERTA_COMPLETA_IMPRENTA.pdf`**: Lienzo completo en PDF que unifica la contraportada (con sinopsis), el lomo (calculado matemáticamente en $0.6025"$ para 241 páginas en papel crema) y la portada con su respectiva sangría perimetral de $0.125"$, listo para subir como cubierta física a **Amazon KDP Tapa Blanda**.

### 3. 📱 App Móvil de Curso Interactivo (PWA) — `/app_curso`
Una aplicación web progresiva (**PWA**) instalable y auto-contenida que funciona como un curso interactivo para iPhone (Safari > "Añadir a la pantalla de inicio").
* **Dashboard de Progreso**: Módulo visual con gráfica circular de avance dinámico que lee el estado de lectura desde el almacenamiento local (`localStorage`).
* **Lector de Lecciones**: Lector premium con tipografías adaptadas y control de tamaño de letra y modo oscuro.
* **Botonera Dual**: Sistema de navegación inteligente que permite marcar capítulos como leídos e ir al siguiente tema con un solo clic en *"Continuar"*.
* **Reproductor de Audiolibro**: Integrado en el lector, cargando y reproduciendo la pista de audio correspondiente a la sección abierta.
* **Simulador Financiero Lombard**: Simulador interactivo que permite calcular la viabilidad de créditos Lombard (LTV, interés, crecimiento de activos, diferencial de ganancias) y probar escenarios con barras deslizantes de caída de mercado con avisos automáticos de *Margin Call*.

### 4. 🎧 Audiolibro Neural Premium — `/audiolibro`
El audiolibro completo del manuscrito estructurado en **11 pistas MP3** grabadas con síntesis de voz neuronal de alta naturalidad.

---

## 🛠️ Cómo Ejecutar y Probar la App Localmente

Para abrir y navegar por la App del Curso desde tu ordenador, puedes iniciar un servidor de prueba local con Python. Abre una terminal en este directorio y ejecuta:

```bash
python -m http.server 8000 --directory "app_curso"
```

Luego abre tu navegador y entra a: [http://localhost:8000](http://localhost:8000)

---

## 🚀 Cómo Subir este Proyecto a GitHub

Si deseas subir este proyecto a un nuevo repositorio de GitHub, abre la consola Git en esta carpeta y sigue estos pasos:

1. **Inicializar el repositorio local**:
   ```bash
   git init
   ```

2. **Añadir los archivos al área de preparación** (respetando las exclusiones de archivos gigantes configuradas en el `.gitignore`):
   ```bash
   git add .
   ```

3. **Crear tu primer commit**:
   ```bash
   git commit -m "Initial commit: libro final, audiolibro y PWA móvil del curso"
   ```

4. **Vincular tu repositorio remoto** (reemplaza la URL con la tuya de GitHub):
   ```bash
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   ```

5. **Subir los archivos a GitHub**:
   ```bash
   git push -u origin main
   ```
