import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateManyVersionGroupInputEnvelope } from "../inputs/VersionCreateManyVersionGroupInputEnvelope";
import { VersionCreateOrConnectWithoutVersionGroupInput } from "../inputs/VersionCreateOrConnectWithoutVersionGroupInput";
import { VersionCreateWithoutVersionGroupInput } from "../inputs/VersionCreateWithoutVersionGroupInput";
import { VersionWhereUniqueInput } from "../inputs/VersionWhereUniqueInput";

@TypeGraphQL.InputType("VersionCreateNestedManyWithoutVersionGroupInput", {})
export class VersionCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [VersionCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: VersionCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: VersionCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: VersionCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionWhereUniqueInput[] | undefined;
}
