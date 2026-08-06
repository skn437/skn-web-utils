# SKN Web Utils

<p align="center">
  <a href="https://www.w3schools.com/tags/ref_httpmessages.asp" target="_blank">
  <img width="150px" src="./public/web-magic.svg" alt="Web Utils" />
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
- 📜 HTML `lang` Attribute Value Containing Object
- 📑 HTTP Method Type Which Will Ensure Type Safety For Valid HTTP Methods
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

### **`HttpMethod` Type**

- It has all the valid values of HTTP methods
- For usage instruction, see `Usage` section

&nbsp;

## **_Use Case:_**

- Any JS, TS, Node Project

&nbsp;

## **_Requirements:_**

### This library can be used in any JS/TS project as it has some objects only

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

#### For `HttpMethod` Type

> ```typescript
> import type { HttpMethod } from "@best-skn/web-utils";
>
> const someFunction = (arg: HttpMethod) => {
>   // Some Logic Here
> };
>
> // You'll get type safe valid HTTP Method suggestions here
> someFunction("GET");
> ```

&nbsp;

## **_Dedicated To:_**

- 👩‍🎨`Uma`: My former student. She is the reason I found strength again to fight the difficulties in life. Thank you for motivating me when I almost lost myself in despair. You yourself struggled a lot, saw highs and lows in your life, but despite all that, you didn't lose hope and inner strength. Thank you for sharing your life story to me and giving me inspiration. I'll be forever grateful to you. You are my pride and joy.
- 💻`Piyal` & 👨‍⚖️`Shams`: My two high school buddies, who always remain there for me in my hard times. I'm fortunate and blessed enough to get friends like you two.
- 💯`My Parents`: The greatest treasures of my life ever.
- 👩`Trina`: The lady who resides deep inside my heart. I hope to find you again in next life. Next life, let's not get separated again. Next life, let's be together no matter what happens, ok?

&nbsp;

## **_License:_**

Copyright (C) 2024 SKN Shukhan

Licensed under the MIT License
