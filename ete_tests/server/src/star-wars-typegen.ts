/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as swapi from './types/backingTypes'

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {}

export interface NexusGenEnums {
  Episode: 5 | 6 | 4
  MoreEpisodes: 5 | 6 | 4 | 'OTHER'
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenRootTypes {
  Droid: swapi.Droid
  Human: swapi.Human
  Query: {}
  Character: swapi.Character
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  Episode: NexusGenEnums['Episode']
  MoreEpisodes: NexusGenEnums['MoreEpisodes']
  String: NexusGenScalars['String']
  Int: NexusGenScalars['Int']
  Float: NexusGenScalars['Float']
  Boolean: NexusGenScalars['Boolean']
  ID: NexusGenScalars['ID']
}

export interface NexusGenFieldTypes {
  Droid: {
    // field return type
    appearsIn: Array<NexusGenEnums['Episode'] | null> | null // [Episode]
    friends: Array<NexusGenRootTypes['Character'] | null> | null // [Character]
    id: string | null // String
    name: string | null // String
    primaryFunction: string | null // String
  }
  Human: {
    // field return type
    appearsIn: Array<NexusGenEnums['Episode'] | null> | null // [Episode]
    friends: Array<NexusGenRootTypes['Character'] | null> | null // [Character]
    homePlanet: string | null // String
    id: string | null // String
    name: string | null // String
  }
  Query: {
    // field return type
    droid: NexusGenRootTypes['Droid'] | null // Droid
    hero: NexusGenRootTypes['Character'] | null // Character
    human: NexusGenRootTypes['Human'] | null // Human
    humans: Array<NexusGenRootTypes['Human'] | null> | null // [Human]
  }
  Character: {
    // field return type
    appearsIn: Array<NexusGenEnums['Episode'] | null> | null // [Episode]
    friends: Array<NexusGenRootTypes['Character'] | null> | null // [Character]
    id: string | null // String
    name: string | null // String
  }
}

export interface NexusGenArgTypes {
  Droid: {
    appearsIn: {
      // args
      id: string // ID!
    }
  }
  Human: {
    appearsIn: {
      // args
      id: string // ID!
    }
  }
  Query: {
    droid: {
      // args
      id: string // String!
    }
    hero: {
      // args
      episode?: NexusGenEnums['Episode'] | null // Episode
    }
    human: {
      // args
      id: string // String!
    }
  }
  Character: {
    appearsIn: {
      // args
      id: string // ID!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  Character: 'Droid' | 'Human'
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = 'Droid' | 'Human' | 'Query'

export type NexusGenInputNames = never

export type NexusGenEnumNames = 'Episode' | 'MoreEpisodes'

export type NexusGenInterfaceNames = 'Character'

export type NexusGenScalarNames = 'Boolean' | 'Float' | 'ID' | 'Int' | 'String'

export type NexusGenUnionNames = never

export interface NexusGenTypes {
  context: swapi.ContextType
  inputTypes: NexusGenInputs
  rootTypes: NexusGenRootTypes
  argTypes: NexusGenArgTypes
  fieldTypes: NexusGenFieldTypes
  allTypes: NexusGenAllTypes
  inheritedFields: NexusGenInheritedFields
  objectNames: NexusGenObjectNames
  inputNames: NexusGenInputNames
  enumNames: NexusGenEnumNames
  interfaceNames: NexusGenInterfaceNames
  scalarNames: NexusGenScalarNames
  unionNames: NexusGenUnionNames
  allInputTypes:
    | NexusGenTypes['inputNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['scalarNames']
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames']
  allNamedTypes:
    | NexusGenTypes['allInputTypes']
    | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames']
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {
    /**
     * The nullability guard can be helpful, but is also a potentially expensive operation for lists.
     * We need to iterate the entire list to check for null items to guard against. Set this to true
     * to skip the null guard on a specific field if you know there's no potential for unsafe types.
     */
    skipNullGuard?: boolean
  }
  interface NexusGenPluginSchemaConfig {}
}
