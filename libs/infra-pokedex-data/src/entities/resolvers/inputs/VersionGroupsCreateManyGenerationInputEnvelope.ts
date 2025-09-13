import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateManyGenerationInput } from "../inputs/VersionGroupsCreateManyGenerationInput";

@TypeGraphQL.InputType("VersionGroupsCreateManyGenerationInputEnvelope", {})
export class VersionGroupsCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [VersionGroupsCreateManyGenerationInput], {
    nullable: false
  })
  data!: VersionGroupsCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
