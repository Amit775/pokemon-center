import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateOrConnectWithoutVersionsInput } from "../inputs/VersionGroupCreateOrConnectWithoutVersionsInput";
import { VersionGroupCreateWithoutVersionsInput } from "../inputs/VersionGroupCreateWithoutVersionsInput";
import { VersionGroupUpdateToOneWithWhereWithoutVersionsInput } from "../inputs/VersionGroupUpdateToOneWithWhereWithoutVersionsInput";
import { VersionGroupUpsertWithoutVersionsInput } from "../inputs/VersionGroupUpsertWithoutVersionsInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupUpdateOneRequiredWithoutVersionsNestedInput", {})
export class VersionGroupUpdateOneRequiredWithoutVersionsNestedInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutVersionsInput, {
    nullable: true
  })
  create?: VersionGroupCreateWithoutVersionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateOrConnectWithoutVersionsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupCreateOrConnectWithoutVersionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpsertWithoutVersionsInput, {
    nullable: true
  })
  upsert?: VersionGroupUpsertWithoutVersionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateToOneWithWhereWithoutVersionsInput, {
    nullable: true
  })
  update?: VersionGroupUpdateToOneWithWhereWithoutVersionsInput | undefined;
}
