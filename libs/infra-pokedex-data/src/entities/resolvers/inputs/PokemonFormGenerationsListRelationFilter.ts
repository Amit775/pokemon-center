import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsWhereInput } from "../inputs/PokemonFormGenerationsWhereInput";

@TypeGraphQL.InputType("PokemonFormGenerationsListRelationFilter", {})
export class PokemonFormGenerationsListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereInput, {
    nullable: true
  })
  every?: PokemonFormGenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereInput, {
    nullable: true
  })
  some?: PokemonFormGenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereInput, {
    nullable: true
  })
  none?: PokemonFormGenerationsWhereInput | undefined;
}
