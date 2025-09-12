import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Encounters } from "../models/Encounters";
import { PokemonAbilities } from "../models/PokemonAbilities";
import { PokemonForms } from "../models/PokemonForms";
import { PokemonGameIndices } from "../models/PokemonGameIndices";
import { PokemonItems } from "../models/PokemonItems";
import { PokemonMoves } from "../models/PokemonMoves";
import { PokemonSpecies } from "../models/PokemonSpecies";
import { PokemonStats } from "../models/PokemonStats";
import { PokemonTypes } from "../models/PokemonTypes";
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

  forms?: PokemonForms[];

  abilities?: PokemonAbilities[];

  moves?: PokemonMoves[];

  stats?: PokemonStats[];

  types?: PokemonTypes[];

  items?: PokemonItems[];

  gameIndices?: PokemonGameIndices[];

  encounters?: Encounters[];

  @TypeGraphQL.Field(_type => PokemonCount, {
    nullable: true
  })
  _count?: PokemonCount | null;
}
