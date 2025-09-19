import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokedexVersionGroup } from "../models/PokedexVersionGroup";
import { PokemonDexNumber } from "../models/PokemonDexNumber";
import { Region } from "../models/Region";
import { PokedexCount } from "../resolvers/outputs/PokedexCount";

@TypeGraphQL.ObjectType("Pokedex", {})
export class Pokedex {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  region_id?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_main_series!: number;

  region?: Region | null;

  dexNumbers?: PokemonDexNumber[];

  versionGroups?: PokedexVersionGroup[];

  @TypeGraphQL.Field(_type => PokedexCount, {
    nullable: true
  })
  _count?: PokedexCount | null;
}
