import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateManyWithoutColorNestedInput } from "../inputs/PokemonSpeciesUpdateManyWithoutColorNestedInput";

@TypeGraphQL.InputType("PokemonColorsUpdateInput", {})
export class PokemonColorsUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateManyWithoutColorNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateManyWithoutColorNestedInput | undefined;
}
