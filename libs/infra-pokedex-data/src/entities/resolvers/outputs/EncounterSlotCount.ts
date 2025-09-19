import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCountEncountersArgs } from "./args/EncounterSlotCountEncountersArgs";

@TypeGraphQL.ObjectType("EncounterSlotCount", {})
export class EncounterSlotCount {
  encounters!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "encounters",
    nullable: false
  })
  getEncounters(@TypeGraphQL.Root() root: EncounterSlotCount, @TypeGraphQL.Args() args: EncounterSlotCountEncountersArgs): number {
    return root.encounters;
  }
}
