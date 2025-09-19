import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateManyVersionGroupInput } from "../inputs/VersionCreateManyVersionGroupInput";

@TypeGraphQL.InputType("VersionCreateManyVersionGroupInputEnvelope", {})
export class VersionCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [VersionCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: VersionCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
