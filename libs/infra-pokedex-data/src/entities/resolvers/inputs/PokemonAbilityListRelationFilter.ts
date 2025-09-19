import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityWhereInput } from "../inputs/PokemonAbilityWhereInput";

@TypeGraphQL.InputType("PokemonAbilityListRelationFilter", {})
export class PokemonAbilityListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonAbilityWhereInput, {
    nullable: true
  })
  every?: PokemonAbilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityWhereInput, {
    nullable: true
  })
  some?: PokemonAbilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityWhereInput, {
    nullable: true
  })
  none?: PokemonAbilityWhereInput | undefined;
}
