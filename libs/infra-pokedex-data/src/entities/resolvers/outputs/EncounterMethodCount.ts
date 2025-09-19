import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodCountEncounterRatesArgs } from "./args/EncounterMethodCountEncounterRatesArgs";
import { EncounterMethodCountSlotsArgs } from "./args/EncounterMethodCountSlotsArgs";

@TypeGraphQL.ObjectType("EncounterMethodCount", {})
export class EncounterMethodCount {
  slots!: number;
  encounterRates!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "slots",
    nullable: false
  })
  getSlots(@TypeGraphQL.Root() root: EncounterMethodCount, @TypeGraphQL.Args() args: EncounterMethodCountSlotsArgs): number {
    return root.slots;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "encounterRates",
    nullable: false
  })
  getEncounterRates(@TypeGraphQL.Root() root: EncounterMethodCount, @TypeGraphQL.Args() args: EncounterMethodCountEncounterRatesArgs): number {
    return root.encounterRates;
  }
}
