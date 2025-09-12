import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateManyEncounterSlotInput } from "../inputs/EncountersCreateManyEncounterSlotInput";

@TypeGraphQL.InputType("EncountersCreateManyEncounterSlotInputEnvelope", {})
export class EncountersCreateManyEncounterSlotInputEnvelope {
  @TypeGraphQL.Field(_type => [EncountersCreateManyEncounterSlotInput], {
    nullable: false
  })
  data!: EncountersCreateManyEncounterSlotInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
