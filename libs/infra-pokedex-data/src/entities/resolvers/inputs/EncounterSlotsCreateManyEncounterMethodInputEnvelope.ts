import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCreateManyEncounterMethodInput } from "../inputs/EncounterSlotsCreateManyEncounterMethodInput";

@TypeGraphQL.InputType("EncounterSlotsCreateManyEncounterMethodInputEnvelope", {})
export class EncounterSlotsCreateManyEncounterMethodInputEnvelope {
  @TypeGraphQL.Field(_type => [EncounterSlotsCreateManyEncounterMethodInput], {
    nullable: false
  })
  data!: EncounterSlotsCreateManyEncounterMethodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
