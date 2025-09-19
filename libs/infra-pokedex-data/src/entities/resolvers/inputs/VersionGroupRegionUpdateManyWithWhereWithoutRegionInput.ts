import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionScalarWhereInput } from "../inputs/VersionGroupRegionScalarWhereInput";
import { VersionGroupRegionUpdateManyMutationInput } from "../inputs/VersionGroupRegionUpdateManyMutationInput";

@TypeGraphQL.InputType("VersionGroupRegionUpdateManyWithWhereWithoutRegionInput", {})
export class VersionGroupRegionUpdateManyWithWhereWithoutRegionInput {
  @TypeGraphQL.Field(_type => VersionGroupRegionScalarWhereInput, {
    nullable: false
  })
  where!: VersionGroupRegionScalarWhereInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionGroupRegionUpdateManyMutationInput;
}
