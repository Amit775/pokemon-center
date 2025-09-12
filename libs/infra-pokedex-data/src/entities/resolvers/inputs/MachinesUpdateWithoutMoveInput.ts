import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ItemsUpdateOneRequiredWithoutMachinesNestedInput } from "../inputs/ItemsUpdateOneRequiredWithoutMachinesNestedInput";
import { VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput";

@TypeGraphQL.InputType("MachinesUpdateWithoutMoveInput", {})
export class MachinesUpdateWithoutMoveInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  machine_number?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true
  })
  item?: ItemsUpdateOneRequiredWithoutMachinesNestedInput | undefined;
}
