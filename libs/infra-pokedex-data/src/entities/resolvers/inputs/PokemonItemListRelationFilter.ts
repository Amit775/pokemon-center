import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemWhereInput } from "../inputs/PokemonItemWhereInput";

@TypeGraphQL.InputType("PokemonItemListRelationFilter", {})
export class PokemonItemListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonItemWhereInput, {
    nullable: true
  })
  every?: PokemonItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemWhereInput, {
    nullable: true
  })
  some?: PokemonItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemWhereInput, {
    nullable: true
  })
  none?: PokemonItemWhereInput | undefined;
}
