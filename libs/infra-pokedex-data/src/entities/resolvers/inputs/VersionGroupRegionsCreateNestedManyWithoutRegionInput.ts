import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionsCreateManyRegionInputEnvelope } from "../inputs/VersionGroupRegionsCreateManyRegionInputEnvelope";
import { VersionGroupRegionsCreateOrConnectWithoutRegionInput } from "../inputs/VersionGroupRegionsCreateOrConnectWithoutRegionInput";
import { VersionGroupRegionsCreateWithoutRegionInput } from "../inputs/VersionGroupRegionsCreateWithoutRegionInput";
import { VersionGroupRegionsWhereUniqueInput } from "../inputs/VersionGroupRegionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionsCreateNestedManyWithoutRegionInput", {})
export class VersionGroupRegionsCreateNestedManyWithoutRegionInput {
  @TypeGraphQL.Field(_type => [VersionGroupRegionsCreateWithoutRegionInput], {
    nullable: true
  })
  create?: VersionGroupRegionsCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupRegionsCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupRegionsCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupRegionsWhereUniqueInput[] | undefined;
}
