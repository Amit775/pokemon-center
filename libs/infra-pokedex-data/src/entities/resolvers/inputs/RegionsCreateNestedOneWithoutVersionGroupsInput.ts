import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateOrConnectWithoutVersionGroupsInput } from "../inputs/RegionsCreateOrConnectWithoutVersionGroupsInput";
import { RegionsCreateWithoutVersionGroupsInput } from "../inputs/RegionsCreateWithoutVersionGroupsInput";
import { RegionsWhereUniqueInput } from "../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.InputType("RegionsCreateNestedOneWithoutVersionGroupsInput", {})
export class RegionsCreateNestedOneWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => RegionsCreateWithoutVersionGroupsInput, {
    nullable: true
  })
  create?: RegionsCreateWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsCreateOrConnectWithoutVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: RegionsCreateOrConnectWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionsWhereUniqueInput | undefined;
}
