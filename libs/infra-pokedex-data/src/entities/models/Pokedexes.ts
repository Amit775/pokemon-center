import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokedexVersionGroups } from "../models/PokedexVersionGroups";
import { PokemonDexNumbers } from "../models/PokemonDexNumbers";
import { Regions } from "../models/Regions";
import { PokedexesCount } from "../resolvers/outputs/PokedexesCount";

@TypeGraphQL.ObjectType("Pokedexes", {})
export class Pokedexes {
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

  region?: Regions | null;

  dexNumbers?: PokemonDexNumbers[];

  versionGroups?: PokedexVersionGroups[];

  @TypeGraphQL.Field(_type => PokedexesCount, {
    nullable: true
  })
  _count?: PokedexesCount | null;
}
