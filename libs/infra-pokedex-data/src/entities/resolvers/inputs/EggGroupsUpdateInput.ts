import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokemonEggGroupsUpdateManyWithoutEggGroupNestedInput } from "../inputs/PokemonEggGroupsUpdateManyWithoutEggGroupNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("EggGroupsUpdateInput", {})
export class EggGroupsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsUpdateManyWithoutEggGroupNestedInput, {
    nullable: true
  })
  species?: PokemonEggGroupsUpdateManyWithoutEggGroupNestedInput | undefined;
}
