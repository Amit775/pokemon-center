import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateOneRequiredWithoutMachinesNestedInput } from "../inputs/ItemsUpdateOneRequiredWithoutMachinesNestedInput";
import { VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput";

@TypeGraphQL.InputType("MachinesUpdateWithoutMoveInput", {})
export class MachinesUpdateWithoutMoveInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  machine_number?: number | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true
  })
  item?: ItemsUpdateOneRequiredWithoutMachinesNestedInput | undefined;
}
