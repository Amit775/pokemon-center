import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Generation } from "../models/Generation";
import { PokemonAbility } from "../models/PokemonAbility";
import { AbilityCount } from "../resolvers/outputs/AbilityCount";

@TypeGraphQL.ObjectType("Ability", {})
export class Ability {
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

  generation?: Generation;

  pokemonAbilities?: PokemonAbility[];

  @TypeGraphQL.Field(_type => AbilityCount, {
    nullable: true
  })
  _count?: AbilityCount | null;
}
