import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionsCreateWithoutValuesInput } from "../inputs/EncounterConditionsCreateWithoutValuesInput";
import { EncounterConditionsUpdateWithoutValuesInput } from "../inputs/EncounterConditionsUpdateWithoutValuesInput";
import { EncounterConditionsWhereInput } from "../inputs/EncounterConditionsWhereInput";

@TypeGraphQL.InputType("EncounterConditionsUpsertWithoutValuesInput", {})
export class EncounterConditionsUpsertWithoutValuesInput {
  @TypeGraphQL.Field(_type => EncounterConditionsUpdateWithoutValuesInput, {
    nullable: false
  })
  update!: EncounterConditionsUpdateWithoutValuesInput;

  @TypeGraphQL.Field(_type => EncounterConditionsCreateWithoutValuesInput, {
    nullable: false
  })
  create!: EncounterConditionsCreateWithoutValuesInput;

  @TypeGraphQL.Field(_type => EncounterConditionsWhereInput, {
    nullable: true
  })
  where?: EncounterConditionsWhereInput | undefined;
}
