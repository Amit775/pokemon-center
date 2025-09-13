import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionsUpdateWithoutVersionGroupInput } from "../inputs/VersionGroupRegionsUpdateWithoutVersionGroupInput";
import { VersionGroupRegionsWhereUniqueInput } from "../inputs/VersionGroupRegionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionsUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class VersionGroupRegionsUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupRegionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionsUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: VersionGroupRegionsUpdateWithoutVersionGroupInput;
}
