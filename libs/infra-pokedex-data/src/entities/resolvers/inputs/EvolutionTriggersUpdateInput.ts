import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("EvolutionTriggersUpdateInput", {})
export class EvolutionTriggersUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput | undefined;
}
