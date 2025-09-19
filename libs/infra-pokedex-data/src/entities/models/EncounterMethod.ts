import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EncounterSlot } from "../models/EncounterSlot";
import { LocationAreaEncounterRate } from "../models/LocationAreaEncounterRate";
import { EncounterMethodCount } from "../resolvers/outputs/EncounterMethodCount";

@TypeGraphQL.ObjectType("EncounterMethod", {})
export class EncounterMethod {
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

  slots?: EncounterSlot[];

  encounterRates?: LocationAreaEncounterRate[];

  @TypeGraphQL.Field(_type => EncounterMethodCount, {
    nullable: true
  })
  _count?: EncounterMethodCount | null;
}
