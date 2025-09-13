import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateManyVersionInput } from "../inputs/EncountersCreateManyVersionInput";

@TypeGraphQL.InputType("EncountersCreateManyVersionInputEnvelope", {})
export class EncountersCreateManyVersionInputEnvelope {
  @TypeGraphQL.Field(_type => [EncountersCreateManyVersionInput], {
    nullable: false
  })
  data!: EncountersCreateManyVersionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
