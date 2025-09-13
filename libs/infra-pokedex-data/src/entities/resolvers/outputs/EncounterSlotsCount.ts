import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCountEncountersArgs } from "./args/EncounterSlotsCountEncountersArgs";

@TypeGraphQL.ObjectType("EncounterSlotsCount", {})
export class EncounterSlotsCount {
  encounters!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "encounters",
    nullable: false
  })
  getEncounters(@TypeGraphQL.Root() root: EncounterSlotsCount, @TypeGraphQL.Args() args: EncounterSlotsCountEncountersArgs): number {
    return root.encounters;
  }
}
