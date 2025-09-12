import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionsCreateManyVersionGroupInputEnvelope } from "../inputs/VersionGroupRegionsCreateManyVersionGroupInputEnvelope";
import { VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput } from "../inputs/VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput";
import { VersionGroupRegionsCreateWithoutVersionGroupInput } from "../inputs/VersionGroupRegionsCreateWithoutVersionGroupInput";
import { VersionGroupRegionsWhereUniqueInput } from "../inputs/VersionGroupRegionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput", {})
export class VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [VersionGroupRegionsCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: VersionGroupRegionsCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupRegionsCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupRegionsWhereUniqueInput[] | undefined;
}
