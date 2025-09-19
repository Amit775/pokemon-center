import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateManyVersionInput } from "../inputs/EncounterCreateManyVersionInput";

@TypeGraphQL.InputType("EncounterCreateManyVersionInputEnvelope", {})
export class EncounterCreateManyVersionInputEnvelope {
  @TypeGraphQL.Field(_type => [EncounterCreateManyVersionInput], {
    nullable: false
  })
  data!: EncounterCreateManyVersionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
