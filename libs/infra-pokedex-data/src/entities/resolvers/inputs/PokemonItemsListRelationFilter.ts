import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsWhereInput } from "../inputs/PokemonItemsWhereInput";

@TypeGraphQL.InputType("PokemonItemsListRelationFilter", {})
export class PokemonItemsListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonItemsWhereInput, {
    nullable: true
  })
  every?: PokemonItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsWhereInput, {
    nullable: true
  })
  some?: PokemonItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsWhereInput, {
    nullable: true
  })
  none?: PokemonItemsWhereInput | undefined;
}
