import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ItemsUpdateOneRequiredWithoutMachinesNestedInput } from "../inputs/ItemsUpdateOneRequiredWithoutMachinesNestedInput";
import { MovesUpdateOneRequiredWithoutMachinesNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutMachinesNestedInput";

@TypeGraphQL.InputType("MachinesUpdateWithoutVersionGroupInput", {})
export class MachinesUpdateWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  machine_number?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true
  })
  item?: ItemsUpdateOneRequiredWithoutMachinesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true
  })
  move?: MovesUpdateOneRequiredWithoutMachinesNestedInput | undefined;
}
