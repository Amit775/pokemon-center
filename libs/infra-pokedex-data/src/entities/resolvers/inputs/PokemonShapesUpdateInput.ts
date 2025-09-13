import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateManyWithoutShapeNestedInput } from "../inputs/PokemonSpeciesUpdateManyWithoutShapeNestedInput";

@TypeGraphQL.InputType("PokemonShapesUpdateInput", {})
export class PokemonShapesUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateManyWithoutShapeNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateManyWithoutShapeNestedInput | undefined;
}
