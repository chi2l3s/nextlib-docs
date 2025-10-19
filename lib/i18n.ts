export const translations = {
  en: {
    // Navigation
    gettingStarted: "Getting Started",
    guides: "Guides",
    apiReference: "API Reference",
    examples: "Examples",

    // Getting Started items
    introduction: "Introduction",
    installation: "Installation",
    quickStart: "Quick Start",

    // Guides items
    colorApi: "Color API",
    commandApi: "Command API",
    itemApi: "Item API",
    configManager: "Config Manager",
    guiApi: "GUI API",

    // API Reference items
    colorUtil: "ColorUtil",
    commandExecutor: "CommandExecutor",
    itemBuilder: "ItemBuilder",
    configManagerRef: "ConfigManager",

    // Examples items
    basicCommand: "Basic Command",
    customItem: "Custom Item",
    guiMenu: "GUI Menu",

    // Header
    github: "GitHub",

    // Hero
    heroTitle: "NextLib",
    heroSubtitle: "Lightweight utility library for Minecraft plugin development",
    heroDescription:
      "Simple Command Manager API and Color API with hex & legacy color code support",
    getStarted: "Get Started",
    viewDocs: "View Docs",

    // Features
    featuresTitle: "Powerful Features",
    colorApiTitle: "Color API",
    colorApiDesc: "Support for hex and legacy color codes with easy conversion",
    commandApiTitle: "Command Manager",
    commandApiDesc: "Simple and intuitive command registration and execution",
    itemApiTitle: "Item Builder",
    itemApiDesc: "Fluent API for creating and customizing Minecraft items",
    configTitle: "Config Manager",
    configDesc: "Easy configuration file management with YAML support",
    guiTitle: "GUI API",
    guiDesc: "Create interactive GUI menus with minimal code",

    // Footer
    footerText: "Built with passion for Minecraft developers",
    footerLinks: "Documentation",

    // Theme and Language
    theme: "Theme",
    language: "Language",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  ru: {
    // Navigation
    gettingStarted: "Начало работы",
    guides: "Руководства",
    apiReference: "Справочник API",
    examples: "Примеры",

    // Getting Started items
    introduction: "Введение",
    installation: "Установка",
    quickStart: "Быстрый старт",

    // Guides items
    colorApi: "Color API",
    commandApi: "Command API",
    itemApi: "Item API",
    configManager: "Config Manager",
    guiApi: "GUI API",

    // API Reference items
    colorUtil: "ColorUtil",
    commandExecutor: "CommandExecutor",
    itemBuilder: "ItemBuilder",
    configManagerRef: "ConfigManager",

    // Examples items
    basicCommand: "Базовая команда",
    customItem: "Кастомный предмет",
    guiMenu: "Меню GUI",

    // Header
    github: "GitHub",

    // Hero
    heroTitle: "NextLib",
    heroSubtitle: "Лёгкая утилитарная библиотека для разработки Minecraft‑плагинов",
    heroDescription:
      "Простая Command API и Color API с поддержкой hex и legacy цветов",
    getStarted: "Начать",
    viewDocs: "Документация",

    // Features
    featuresTitle: "Сильные стороны",
    colorApiTitle: "Color API",
    colorApiDesc: "Поддержка hex и legacy цветов и удобное форматирование",
    commandApiTitle: "Менеджер команд",
    commandApiDesc: "Простая интуитивная регистрация и обработка команд",
    itemApiTitle: "Item Builder",
    itemApiDesc: "Fluent‑API для создания и кастомизации предметов",
    configTitle: "Config Manager",
    configDesc: "Удобное управление конфигами с поддержкой YAML",
    guiTitle: "GUI API",
    guiDesc: "Создавайте интерактивные GUI меню с минимумом кода",

    // Footer
    footerText: "Сделано с любовью для разработчиков Minecraft",
    footerLinks: "Документация",

    // Theme and Language
    theme: "Тема",
    language: "Язык",
    light: "Светлая",
    dark: "Тёмная",
    system: "Системная",
  },
}

export type Language = "en" | "ru"
export type TranslationKey = keyof typeof translations.en

