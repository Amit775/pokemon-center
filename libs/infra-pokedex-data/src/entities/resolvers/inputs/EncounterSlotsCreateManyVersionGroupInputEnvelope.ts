import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCreateManyVersionGroupInput } from "../inputs/EncounterSlotsCreateManyVersionGroupInput";

@TypeGraphQL.InputType("EncounterSlotsCreateManyVersionGroupInputEnvelope", {})
export class EncounterSlotsCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [EncounterSlotsCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: EncounterSlotsCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
