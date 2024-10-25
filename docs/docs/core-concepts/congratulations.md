---
sidebar_position: 1
---

# Main

This document provides an overview of the core concepts that underpin the React Utils Library. Understanding these concepts will help you make the most of the library and leverage its full potential in your React applications.

## Table of Contents

- [Introduction to React Utils](#introduction-to-react-utils)
- [Utilities vs. Hooks](#utilities-vs-hooks)

## Introduction to React Utils

The React Utils Library is designed to streamline your development process by providing a collection of reusable utility functions and custom hooks. This library focuses on enhancing code readability, maintainability, and overall productivity while working with React and TypeScript.

## Utilities vs. Hooks

### Utilities

Utilities are simple, reusable functions that perform a specific task. They help simplify code and reduce duplication. Examples include string manipulation functions, array methods, and more.

**Example Utility Function: `kebabCase`**

```javascript
import { kebabCase } from 'react-utils';

const str = kebabCase('React Utils Library'); // 'react-utils-library'
```
