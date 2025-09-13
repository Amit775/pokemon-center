import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Generations } from "../models/Generations";
import { PokemonAbilities } from "../models/PokemonAbilities";
import { AbilitiesCount } from "../resolvers/outputs/AbilitiesCount";

@TypeGraphQL.ObjectType("Abilities", {})
export class Abilities {
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
    nullable: false
  })
  is_main_series!: number;

  generation?: Generations;

  pokemonAbilities?: PokemonAbilities[];

  @TypeGraphQL.Field(_type => AbilitiesCount, {
    nullable: true
  })
  _count?: AbilitiesCount | null;
}
