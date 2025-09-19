import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupUpdateWithoutEncounterSlotsInput } from "../inputs/VersionGroupUpdateWithoutEncounterSlotsInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpdateToOneWithWhereWithoutEncounterSlotsInput", {})
export class VersionGroupUpdateToOneWithWhereWithoutEncounterSlotsInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutEncounterSlotsInput, {
    nullable: false
  })
  data!: VersionGroupUpdateWithoutEncounterSlotsInput;
}
