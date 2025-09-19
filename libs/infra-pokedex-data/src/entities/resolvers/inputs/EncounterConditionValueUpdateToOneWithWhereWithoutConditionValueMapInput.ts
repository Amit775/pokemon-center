import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueUpdateWithoutConditionValueMapInput } from "../inputs/EncounterConditionValueUpdateWithoutConditionValueMapInput";
import { EncounterConditionValueWhereInput } from "../inputs/EncounterConditionValueWhereInput";

@TypeGraphQL.InputType("EncounterConditionValueUpdateToOneWithWhereWithoutConditionValueMapInput", {})
export class EncounterConditionValueUpdateToOneWithWhereWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValueWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueUpdateWithoutConditionValueMapInput, {
    nullable: false
  })
  data!: EncounterConditionValueUpdateWithoutConditionValueMapInput;
}
