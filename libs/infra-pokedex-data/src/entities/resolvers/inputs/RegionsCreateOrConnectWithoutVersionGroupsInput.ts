import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateWithoutVersionGroupsInput } from "../inputs/RegionsCreateWithoutVersionGroupsInput";
import { RegionsWhereUniqueInput } from "../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.InputType("RegionsCreateOrConnectWithoutVersionGroupsInput", {})
export class RegionsCreateOrConnectWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: false
  })
  where!: RegionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionsCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: RegionsCreateWithoutVersionGroupsInput;
}
