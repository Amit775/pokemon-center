import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionCreateManyVersionGroupInputEnvelope } from "../inputs/VersionGroupRegionCreateManyVersionGroupInputEnvelope";
import { VersionGroupRegionCreateOrConnectWithoutVersionGroupInput } from "../inputs/VersionGroupRegionCreateOrConnectWithoutVersionGroupInput";
import { VersionGroupRegionCreateWithoutVersionGroupInput } from "../inputs/VersionGroupRegionCreateWithoutVersionGroupInput";
import { VersionGroupRegionWhereUniqueInput } from "../inputs/VersionGroupRegionWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionCreateNestedManyWithoutVersionGroupInput", {})
export class VersionGroupRegionCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [VersionGroupRegionCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: VersionGroupRegionCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupRegionCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupRegionCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupRegionWhereUniqueInput[] | undefined;
}
