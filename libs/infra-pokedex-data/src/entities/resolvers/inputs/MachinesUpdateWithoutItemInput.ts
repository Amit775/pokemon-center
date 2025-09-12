import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovesUpdateOneRequiredWithoutMachinesNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutMachinesNestedInput";
import { VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput";

@TypeGraphQL.InputType("MachinesUpdateWithoutItemInput", {})
export class MachinesUpdateWithoutItemInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  machine_number?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true
  })
  move?: MovesUpdateOneRequiredWithoutMachinesNestedInput | undefined;
}
