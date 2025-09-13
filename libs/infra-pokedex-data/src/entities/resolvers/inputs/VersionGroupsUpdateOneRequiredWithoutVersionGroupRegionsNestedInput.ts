import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput";
import { VersionGroupsCreateWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupsCreateWithoutVersionGroupRegionsInput";
import { VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput";
import { VersionGroupsUpsertWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupsUpsertWithoutVersionGroupRegionsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput", {})
export class VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutVersionGroupRegionsInput, {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutVersionGroupRegionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpsertWithoutVersionGroupRegionsInput, {
    nullable: true
  })
  upsert?: VersionGroupsUpsertWithoutVersionGroupRegionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput, {
    nullable: true
  })
  update?: VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput | undefined;
}
