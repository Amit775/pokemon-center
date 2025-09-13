import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateOrConnectWithoutVersionsInput } from "../inputs/VersionGroupsCreateOrConnectWithoutVersionsInput";
import { VersionGroupsCreateWithoutVersionsInput } from "../inputs/VersionGroupsCreateWithoutVersionsInput";
import { VersionGroupsUpdateToOneWithWhereWithoutVersionsInput } from "../inputs/VersionGroupsUpdateToOneWithWhereWithoutVersionsInput";
import { VersionGroupsUpsertWithoutVersionsInput } from "../inputs/VersionGroupsUpsertWithoutVersionsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput", {})
export class VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutVersionsInput, {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutVersionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateOrConnectWithoutVersionsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutVersionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpsertWithoutVersionsInput, {
    nullable: true
  })
  upsert?: VersionGroupsUpsertWithoutVersionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateToOneWithWhereWithoutVersionsInput, {
    nullable: true
  })
  update?: VersionGroupsUpdateToOneWithWhereWithoutVersionsInput | undefined;
}
