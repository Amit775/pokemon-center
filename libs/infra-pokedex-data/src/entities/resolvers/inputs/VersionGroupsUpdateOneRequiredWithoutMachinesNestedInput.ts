import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateOrConnectWithoutMachinesInput } from "../inputs/VersionGroupsCreateOrConnectWithoutMachinesInput";
import { VersionGroupsCreateWithoutMachinesInput } from "../inputs/VersionGroupsCreateWithoutMachinesInput";
import { VersionGroupsUpdateToOneWithWhereWithoutMachinesInput } from "../inputs/VersionGroupsUpdateToOneWithWhereWithoutMachinesInput";
import { VersionGroupsUpsertWithoutMachinesInput } from "../inputs/VersionGroupsUpsertWithoutMachinesInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput", {})
export class VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutMachinesInput, {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateOrConnectWithoutMachinesInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpsertWithoutMachinesInput, {
    nullable: true
  })
  upsert?: VersionGroupsUpsertWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateToOneWithWhereWithoutMachinesInput, {
    nullable: true
  })
  update?: VersionGroupsUpdateToOneWithWhereWithoutMachinesInput | undefined;
}
