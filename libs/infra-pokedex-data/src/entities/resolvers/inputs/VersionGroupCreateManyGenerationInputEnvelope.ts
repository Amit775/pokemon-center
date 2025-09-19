import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateManyGenerationInput } from "../inputs/VersionGroupCreateManyGenerationInput";

@TypeGraphQL.InputType("VersionGroupCreateManyGenerationInputEnvelope", {})
export class VersionGroupCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [VersionGroupCreateManyGenerationInput], {
    nullable: false
  })
  data!: VersionGroupCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
