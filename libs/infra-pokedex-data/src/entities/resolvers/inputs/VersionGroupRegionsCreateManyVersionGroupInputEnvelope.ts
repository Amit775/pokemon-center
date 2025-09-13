import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionsCreateManyVersionGroupInput } from "../inputs/VersionGroupRegionsCreateManyVersionGroupInput";

@TypeGraphQL.InputType("VersionGroupRegionsCreateManyVersionGroupInputEnvelope", {})
export class VersionGroupRegionsCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [VersionGroupRegionsCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: VersionGroupRegionsCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
