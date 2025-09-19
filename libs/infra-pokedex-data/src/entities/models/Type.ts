import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Berry } from "../models/Berry";
import { BerryFlavor } from "../models/BerryFlavor";
import { Generation } from "../models/Generation";
import { Move } from "../models/Move";
import { MoveDamageClass } from "../models/MoveDamageClass";
import { Nature } from "../models/Nature";
import { PokemonEvolution } from "../models/PokemonEvolution";
import { PokemonFormType } from "../models/PokemonFormType";
import { PokemonType } from "../models/PokemonType";
import { TypeEfficacy } from "../models/TypeEfficacy";
import { TypeGameIndex } from "../models/TypeGameIndex";
import { TypeCount } from "../resolvers/outputs/TypeCount";

@TypeGraphQL.ObjectType("Type", {})
export class Type {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  damage_class_id?: number | null;

  generation?: Generation;

  damageClass?: MoveDamageClass | null;

  moves?: Move[];

  pokemonTypes?: PokemonType[];

  formTypes?: PokemonFormType[];

  gameIndices?: TypeGameIndex[];

  efficacy?: TypeEfficacy[];

  efficacyTarget?: TypeEfficacy[];

  berryFlavors?: BerryFlavor[];

  natures?: Nature[];

  naturesIncreased?: Nature[];

  knownMoveTypes?: PokemonEvolution[];

  partyTypes?: PokemonEvolution[];

  naturalGiftTypes?: Berry[];

  @TypeGraphQL.Field(_type => TypeCount, {
    nullable: true
  })
  _count?: TypeCount | null;
}
