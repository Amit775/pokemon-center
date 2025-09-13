import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionsCreateWithoutValuesInput } from "../inputs/EncounterConditionsCreateWithoutValuesInput";
import { EncounterConditionsWhereUniqueInput } from "../inputs/EncounterConditionsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionsCreateOrConnectWithoutValuesInput", {})
export class EncounterConditionsCreateOrConnectWithoutValuesInput {
  @TypeGraphQL.Field(_type => EncounterConditionsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionsCreateWithoutValuesInput, {
    nullable: false
  })
  create!: EncounterConditionsCreateWithoutValuesInput;
}
