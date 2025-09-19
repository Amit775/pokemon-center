import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateManyVersionGroupInput } from "../inputs/EncounterSlotCreateManyVersionGroupInput";

@TypeGraphQL.InputType("EncounterSlotCreateManyVersionGroupInputEnvelope", {})
export class EncounterSlotCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [EncounterSlotCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: EncounterSlotCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
