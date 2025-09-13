import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsCountEncounterRatesArgs } from "./args/EncounterMethodsCountEncounterRatesArgs";
import { EncounterMethodsCountSlotsArgs } from "./args/EncounterMethodsCountSlotsArgs";

@TypeGraphQL.ObjectType("EncounterMethodsCount", {})
export class EncounterMethodsCount {
  slots!: number;
  encounterRates!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "slots",
    nullable: false
  })
  getSlots(@TypeGraphQL.Root() root: EncounterMethodsCount, @TypeGraphQL.Args() args: EncounterMethodsCountSlotsArgs): number {
    return root.slots;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "encounterRates",
    nullable: false
  })
  getEncounterRates(@TypeGraphQL.Root() root: EncounterMethodsCount, @TypeGraphQL.Args() args: EncounterMethodsCountEncounterRatesArgs): number {
    return root.encounterRates;
  }
}
