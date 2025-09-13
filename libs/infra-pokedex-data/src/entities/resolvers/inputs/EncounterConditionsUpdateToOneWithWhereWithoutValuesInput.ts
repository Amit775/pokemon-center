import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionsUpdateWithoutValuesInput } from "../inputs/EncounterConditionsUpdateWithoutValuesInput";
import { EncounterConditionsWhereInput } from "../inputs/EncounterConditionsWhereInput";

@TypeGraphQL.InputType("EncounterConditionsUpdateToOneWithWhereWithoutValuesInput", {})
export class EncounterConditionsUpdateToOneWithWhereWithoutValuesInput {
  @TypeGraphQL.Field(_type => EncounterConditionsWhereInput, {
    nullable: true
  })
  where?: EncounterConditionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsUpdateWithoutValuesInput, {
    nullable: false
  })
  data!: EncounterConditionsUpdateWithoutValuesInput;
}
