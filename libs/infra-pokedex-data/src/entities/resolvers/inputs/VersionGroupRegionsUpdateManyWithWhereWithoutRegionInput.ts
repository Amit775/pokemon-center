import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionsScalarWhereInput } from "../inputs/VersionGroupRegionsScalarWhereInput";
import { VersionGroupRegionsUpdateManyMutationInput } from "../inputs/VersionGroupRegionsUpdateManyMutationInput";

@TypeGraphQL.InputType("VersionGroupRegionsUpdateManyWithWhereWithoutRegionInput", {})
export class VersionGroupRegionsUpdateManyWithWhereWithoutRegionInput {
  @TypeGraphQL.Field(_type => VersionGroupRegionsScalarWhereInput, {
    nullable: false
  })
  where!: VersionGroupRegionsScalarWhereInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionGroupRegionsUpdateManyMutationInput;
}
