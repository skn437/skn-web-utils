# SKN Web Utils

<p align="center">
  <a href="https://www.w3schools.com/tags/ref_httpmessages.asp" target="_blank">
  <img width="150px" src="https://firebasestorage.googleapis.com/v0/b/skn-ultimate-project-la437.appspot.com/o/GitHub%20Library%2F18-TypeScript-SWU.svg?alt=media&token=b5551197-ead4-4644-bfa2-dcc9ab93b2d5" alt="Web Utils" />
  </a>
</p>

> TypeScript

[![NPM Version](https://img.shields.io/npm/v/%40best-skn%2Fweb-utils)](https://www.npmjs.com/package/@best-skn/web-utils) [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)

&nbsp;

## **_Introduction:_**

### A simple library consisting some web development utility objects

### I mainly created this library so that I can use it in many web developing projects without duplicating codes

&nbsp;

## **_Features:_**

- 💥 HTTP Method Containing Object Cursor Just Like Java Spring Boot
- ✨ HTTP Response Status Code Containing Object
- 📜 HTML `lang` attribute Value Containing Object
- 📚 Information Regarding The Object Properties On Mouse Hover

&nbsp;

## **_Details:_**

### **`httpMethod` Object**

- It contains the available HTTP Method names as string
- Java has similar Enum called `HttpMethod` in `org.springframework.http` package
- Get all the available HTTP Methods without looking at elsewhere
- Hover over the properties to get the information on the method
- You need not go search on google to find out which method does what
- For usage instruction, see `Usage` section

### **`httpResponse` Object**

- It contains the available HTTP Response Status Codes as number
- Get all the available HTTP Response Status Codes without looking at elsewhere
- Hover over the properties to get the information on the status codes
- You need not go search on google to find out which staus code means what
- For usage instruction, see `Usage` section

### **`htmlLanguage` Object**

- It contains the available values for languages of HTML `lang` attribute
- Get all the available HTML `lang` attribute values without looking at elsewhere
- You need not go search on google to find out the languages
- For usage instruction, see `Usage` section

&nbsp;

## **_Use Case:_**

- Any JS Project

&nbsp;

## **_Requirements:_**

### This library can be used in any JS project as it has some objects only

&nbsp;

## **_Usage:_**

### To install the package, type the following in console

> ```zsh
> npm add @best-skn/web-utils
> #or
> yarn add @best-skn/web-utils
> #or
> pnpm add @best-skn/web-utils
> #or
> bun add @best-skn/web-utils
> ```

### You can use the library as showing below (Just an example)

#### For `httpMethod` Object

> ```typescript
> import { httpMethod } from "@best-skn/web-utils";
>
> export const allowedMethods = [httpMethod.GET, httpMethod.POST, httpMethod.DELETE];
> ```

#### For `httpResponse` Object

> ```typescript
> import { httpResponse } from "@best-skn/web-utils";
>
> export const allowedCodes = [httpResponse._200, httpResponse._404, httpResponse._403];
> ```

#### For `htmlLanguage` Object

> ```typescript tsx
> import { htmlLanguage } from "@best-skn/web-utils";
>
> const Home = () => (
>   <html lang={htmlLanguage.ITALIAN}>
>     {!-- Rest of the codes --}
>   </html>
> );
>
> export default Home;
> ```

&nbsp;

## **_Dedicated To:_**

- 👩‍⚕️`Tanjila Hasan Trina`: The long lost love of my life. The course of nature separated us from our paths and put us in separate places far away from each other. But no matter how separated we are right now, each and every moment of mine is only dedicated to you. We may not see each other in this lifetime as it seems but I will find you again in the next life. I just want to say: `世界は残酷だ それでも君を愛すよ`
- 💯`My Parents`: The greatest treasures of my life ever.

&nbsp;

## **_License:_**

Copyright (C) 2024 SKN Shukhan

Licensed under the MIT License
