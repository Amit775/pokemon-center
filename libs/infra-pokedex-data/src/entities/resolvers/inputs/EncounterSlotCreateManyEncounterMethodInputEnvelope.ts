import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateManyEncounterMethodInput } from "../inputs/EncounterSlotCreateManyEncounterMethodInput";

@TypeGraphQL.InputType("EncounterSlotCreateManyEncounterMethodInputEnvelope", {})
export class EncounterSlotCreateManyEncounterMethodInputEnvelope {
  @TypeGraphQL.Field(_type => [EncounterSlotCreateManyEncounterMethodInput], {
    nullable: false
  })
  data!: EncounterSlotCreateManyEncounterMethodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
