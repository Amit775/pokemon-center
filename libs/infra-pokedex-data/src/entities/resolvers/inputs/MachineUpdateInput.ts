import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateOneRequiredWithoutMachinesNestedInput } from "../inputs/ItemUpdateOneRequiredWithoutMachinesNestedInput";
import { MoveUpdateOneRequiredWithoutMachinesNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutMachinesNestedInput";
import { VersionGroupUpdateOneRequiredWithoutMachinesNestedInput } from "../inputs/VersionGroupUpdateOneRequiredWithoutMachinesNestedInput";

@TypeGraphQL.InputType("MachineUpdateInput", {})
export class MachineUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  machine_number?: number | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupUpdateOneRequiredWithoutMachinesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true
  })
  item?: ItemUpdateOneRequiredWithoutMachinesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true
  })
  move?: MoveUpdateOneRequiredWithoutMachinesNestedInput | undefined;
}
