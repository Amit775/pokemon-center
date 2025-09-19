import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutGenerationInput } from "../inputs/VersionGroupCreateWithoutGenerationInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupCreateOrConnectWithoutGenerationInput", {})
export class VersionGroupCreateOrConnectWithoutGenerationInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutGenerationInput;
}
