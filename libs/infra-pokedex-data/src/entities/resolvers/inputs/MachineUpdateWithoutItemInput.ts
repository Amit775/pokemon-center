import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateOneRequiredWithoutMachinesNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutMachinesNestedInput";
import { VersionGroupUpdateOneRequiredWithoutMachinesNestedInput } from "../inputs/VersionGroupUpdateOneRequiredWithoutMachinesNestedInput";

@TypeGraphQL.InputType("MachineUpdateWithoutItemInput", {})
export class MachineUpdateWithoutItemInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  machine_number?: number | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupUpdateOneRequiredWithoutMachinesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true
  })
  move?: MoveUpdateOneRequiredWithoutMachinesNestedInput | undefined;
}
