import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateManyEncounterSlotInput } from "../inputs/EncounterCreateManyEncounterSlotInput";

@TypeGraphQL.InputType("EncounterCreateManyEncounterSlotInputEnvelope", {})
export class EncounterCreateManyEncounterSlotInputEnvelope {
  @TypeGraphQL.Field(_type => [EncounterCreateManyEncounterSlotInput], {
    nullable: false
  })
  data!: EncounterCreateManyEncounterSlotInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
