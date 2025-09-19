import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateWithoutConditionValueMapInput } from "../inputs/EncounterCreateWithoutConditionValueMapInput";
import { EncounterUpdateWithoutConditionValueMapInput } from "../inputs/EncounterUpdateWithoutConditionValueMapInput";
import { EncounterWhereInput } from "../inputs/EncounterWhereInput";

@TypeGraphQL.InputType("EncounterUpsertWithoutConditionValueMapInput", {})
export class EncounterUpsertWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncounterUpdateWithoutConditionValueMapInput, {
    nullable: false
  })
  update!: EncounterUpdateWithoutConditionValueMapInput;

  @TypeGraphQL.Field(_type => EncounterCreateWithoutConditionValueMapInput, {
    nullable: false
  })
  create!: EncounterCreateWithoutConditionValueMapInput;

  @TypeGraphQL.Field(_type => EncounterWhereInput, {
    nullable: true
  })
  where?: EncounterWhereInput | undefined;
}
