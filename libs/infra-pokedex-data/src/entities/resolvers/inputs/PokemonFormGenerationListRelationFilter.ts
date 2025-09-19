import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationWhereInput } from "../inputs/PokemonFormGenerationWhereInput";

@TypeGraphQL.InputType("PokemonFormGenerationListRelationFilter", {})
export class PokemonFormGenerationListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereInput, {
    nullable: true
  })
  every?: PokemonFormGenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereInput, {
    nullable: true
  })
  some?: PokemonFormGenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereInput, {
    nullable: true
  })
  none?: PokemonFormGenerationWhereInput | undefined;
}
