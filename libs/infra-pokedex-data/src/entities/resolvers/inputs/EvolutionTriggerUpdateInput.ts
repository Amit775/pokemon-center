import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput";

@TypeGraphQL.InputType("EvolutionTriggerUpdateInput", {})
export class EvolutionTriggerUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput | undefined;
}
