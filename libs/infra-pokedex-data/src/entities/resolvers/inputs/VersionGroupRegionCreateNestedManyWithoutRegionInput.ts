import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionCreateManyRegionInputEnvelope } from "../inputs/VersionGroupRegionCreateManyRegionInputEnvelope";
import { VersionGroupRegionCreateOrConnectWithoutRegionInput } from "../inputs/VersionGroupRegionCreateOrConnectWithoutRegionInput";
import { VersionGroupRegionCreateWithoutRegionInput } from "../inputs/VersionGroupRegionCreateWithoutRegionInput";
import { VersionGroupRegionWhereUniqueInput } from "../inputs/VersionGroupRegionWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionCreateNestedManyWithoutRegionInput", {})
export class VersionGroupRegionCreateNestedManyWithoutRegionInput {
  @TypeGraphQL.Field(_type => [VersionGroupRegionCreateWithoutRegionInput], {
    nullable: true
  })
  create?: VersionGroupRegionCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupRegionCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupRegionCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupRegionWhereUniqueInput[] | undefined;
}
