import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateManyVersionGroupInputEnvelope } from "../inputs/VersionsCreateManyVersionGroupInputEnvelope";
import { VersionsCreateOrConnectWithoutVersionGroupInput } from "../inputs/VersionsCreateOrConnectWithoutVersionGroupInput";
import { VersionsCreateWithoutVersionGroupInput } from "../inputs/VersionsCreateWithoutVersionGroupInput";
import { VersionsWhereUniqueInput } from "../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionsCreateNestedManyWithoutVersionGroupInput", {})
export class VersionsCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [VersionsCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: VersionsCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionsCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: VersionsCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionsCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: VersionsCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionsWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionsWhereUniqueInput[] | undefined;
}
