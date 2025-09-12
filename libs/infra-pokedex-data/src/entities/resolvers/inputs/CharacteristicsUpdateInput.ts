import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StatsUpdateOneRequiredWithoutCharacteristicsNestedInput } from "../inputs/StatsUpdateOneRequiredWithoutCharacteristicsNestedInput";

@TypeGraphQL.InputType("CharacteristicsUpdateInput", {})
export class CharacteristicsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  gene_mod_5?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateOneRequiredWithoutCharacteristicsNestedInput, {
    nullable: true
  })
  stat?: StatsUpdateOneRequiredWithoutCharacteristicsNestedInput | undefined;
}
