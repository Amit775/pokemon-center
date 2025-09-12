import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokemonSpeciesUpdateManyWithoutHabitatNestedInput } from "../inputs/PokemonSpeciesUpdateManyWithoutHabitatNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PokemonHabitatsUpdateInput", {})
export class PokemonHabitatsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateManyWithoutHabitatNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateManyWithoutHabitatNestedInput | undefined;
}
