import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueCreateWithoutConditionValueMapInput } from "../inputs/EncounterConditionValueCreateWithoutConditionValueMapInput";
import { EncounterConditionValueUpdateWithoutConditionValueMapInput } from "../inputs/EncounterConditionValueUpdateWithoutConditionValueMapInput";
import { EncounterConditionValueWhereInput } from "../inputs/EncounterConditionValueWhereInput";

@TypeGraphQL.InputType("EncounterConditionValueUpsertWithoutConditionValueMapInput", {})
export class EncounterConditionValueUpsertWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueUpdateWithoutConditionValueMapInput, {
    nullable: false
  })
  update!: EncounterConditionValueUpdateWithoutConditionValueMapInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueCreateWithoutConditionValueMapInput, {
    nullable: false
  })
  create!: EncounterConditionValueCreateWithoutConditionValueMapInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValueWhereInput | undefined;
}
