import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Berries } from "../models/Berries";
import { BerryFlavors } from "../models/BerryFlavors";
import { Generations } from "../models/Generations";
import { MoveDamageClasses } from "../models/MoveDamageClasses";
import { Moves } from "../models/Moves";
import { Natures } from "../models/Natures";
import { PokemonEvolution } from "../models/PokemonEvolution";
import { PokemonFormTypes } from "../models/PokemonFormTypes";
import { PokemonTypes } from "../models/PokemonTypes";
import { TypeEfficacy } from "../models/TypeEfficacy";
import { TypeGameIndices } from "../models/TypeGameIndices";
import { TypesCount } from "../resolvers/outputs/TypesCount";

@TypeGraphQL.ObjectType("Types", {})
export class Types {
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

  generation?: Generations;

  damageClass?: MoveDamageClasses | null;

  moves?: Moves[];

  pokemonTypes?: PokemonTypes[];

  formTypes?: PokemonFormTypes[];

  gameIndices?: TypeGameIndices[];

  efficacy?: TypeEfficacy[];

  efficacyTarget?: TypeEfficacy[];

  berryFlavors?: BerryFlavors[];

  natures?: Natures[];

  naturesIncreased?: Natures[];

  knownMoveTypes?: PokemonEvolution[];

  partyTypes?: PokemonEvolution[];

  naturalGiftTypes?: Berries[];

  @TypeGraphQL.Field(_type => TypesCount, {
    nullable: true
  })
  _count?: TypesCount | null;
}
