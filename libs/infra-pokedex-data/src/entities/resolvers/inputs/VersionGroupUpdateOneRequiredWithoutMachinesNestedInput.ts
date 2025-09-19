import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateOrConnectWithoutMachinesInput } from "../inputs/VersionGroupCreateOrConnectWithoutMachinesInput";
import { VersionGroupCreateWithoutMachinesInput } from "../inputs/VersionGroupCreateWithoutMachinesInput";
import { VersionGroupUpdateToOneWithWhereWithoutMachinesInput } from "../inputs/VersionGroupUpdateToOneWithWhereWithoutMachinesInput";
import { VersionGroupUpsertWithoutMachinesInput } from "../inputs/VersionGroupUpsertWithoutMachinesInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupUpdateOneRequiredWithoutMachinesNestedInput", {})
export class VersionGroupUpdateOneRequiredWithoutMachinesNestedInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutMachinesInput, {
    nullable: true
  })
  create?: VersionGroupCreateWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateOrConnectWithoutMachinesInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupCreateOrConnectWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpsertWithoutMachinesInput, {
    nullable: true
  })
  upsert?: VersionGroupUpsertWithoutMachinesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateToOneWithWhereWithoutMachinesInput, {
    nullable: true
  })
  update?: VersionGroupUpdateToOneWithWhereWithoutMachinesInput | undefined;
}
