import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EncounterSlots } from "../models/EncounterSlots";
import { LocationAreaEncounterRates } from "../models/LocationAreaEncounterRates";
import { EncounterMethodsCount } from "../resolvers/outputs/EncounterMethodsCount";

@TypeGraphQL.ObjectType("EncounterMethods", {})
export class EncounterMethods {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  slots?: EncounterSlots[];

  encounterRates?: LocationAreaEncounterRates[];

  @TypeGraphQL.Field(_type => EncounterMethodsCount, {
    nullable: true
  })
  _count?: EncounterMethodsCount | null;
}
