import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethod } from "../../models/EncounterMethod";
import { VersionGroup } from "../../models/VersionGroup";

@TypeGraphQL.ObjectType("CreateManyAndReturnEncounterSlot", {})
export class CreateManyAndReturnEncounterSlot {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_method_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  slot!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rarity!: number;

  @TypeGraphQL.Field(_type => VersionGroup, {
    nullable: false
  })
  versionGroup!: VersionGroup;

  @TypeGraphQL.Field(_type => EncounterMethod, {
    nullable: false
  })
  encounterMethod!: EncounterMethod;
}
