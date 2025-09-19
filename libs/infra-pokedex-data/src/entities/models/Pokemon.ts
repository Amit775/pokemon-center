import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Encounter } from "../models/Encounter";
import { PokemonAbility } from "../models/PokemonAbility";
import { PokemonForm } from "../models/PokemonForm";
import { PokemonGameIndex } from "../models/PokemonGameIndex";
import { PokemonItem } from "../models/PokemonItem";
import { PokemonMove } from "../models/PokemonMove";
import { PokemonSpecies } from "../models/PokemonSpecies";
import { PokemonStat } from "../models/PokemonStat";
import { PokemonType } from "../models/PokemonType";
import { PokemonCount } from "../resolvers/outputs/PokemonCount";

@TypeGraphQL.ObjectType("Pokemon", {})
export class Pokemon {
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
  species_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  height!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  weight!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  base_experience!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_default!: number;

  species?: PokemonSpecies;

  forms?: PokemonForm[];

  abilities?: PokemonAbility[];

  moves?: PokemonMove[];

  stats?: PokemonStat[];

  types?: PokemonType[];

  items?: PokemonItem[];

  gameIndices?: PokemonGameIndex[];

  encounters?: Encounter[];

  @TypeGraphQL.Field(_type => PokemonCount, {
    nullable: true
  })
  _count?: PokemonCount | null;
}
