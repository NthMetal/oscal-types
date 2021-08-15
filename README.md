# Installation
> `npm install --save oscal-types`

Include the type definitions in your `tsconfig.json`
```
{
    ...
    "typeRoots": [
      "node_modules/@types",
      "node_modules/oscal-types",
      "custom_typings"
    ],
    ...
}
```

# Summary
This package contains generated type definitions for the oscal data format.
More information about oscal can be found here: https://pages.nist.gov/OSCAL/

These type definitions were generated from the provided oscal JSON schema found here: https://github.com/usnistgov/OSCAL/blob/main/json/schema/oscal_complete_schema.json

*NOTE: Since these definitions are auto generated, class names may not stricly follow camelCase.*


# Usage

Please see 
* https://github.com/NthMetal/oscal-types/blob/main/oscal-types-tests.ts 

for usage examples.


# Details
 * Last updated: Thu, 15 Aug 2021

# Credits
These definitions were written by [NthMetal](https://github.com/NthMetal).
