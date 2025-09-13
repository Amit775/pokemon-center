import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionUpdateManyWithoutGenderNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutGenderNestedInput";

@TypeGraphQL.InputType("GendersUpdateInput", {})
export class GendersUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutGenderNestedInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionUpdateManyWithoutGenderNestedInput | undefined;
}
