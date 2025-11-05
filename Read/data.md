if your json has speical char 

{
  "card": {
    "@type": "SomeType"
  }
}


we need to use square brack somedata.filter(some => some.card?.["@type"])

When you access properties in JavaScript (or TypeScript), dot notation (object.property) is the most common. But this only works for valid identifier names—that is:

They must start with a letter, $, or _

They can only contain alphanumeric characters, $, or _

They cannot include special characters like @, -, or spaces

When to use bracket notation

Use it when:

Property names contain special characters (@, -, etc.)

Property names are dynamic (e.g., stored in a variable)

