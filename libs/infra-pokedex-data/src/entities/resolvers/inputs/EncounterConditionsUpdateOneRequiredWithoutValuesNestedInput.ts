import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionsCreateOrConnectWithoutValuesInput } from "../inputs/EncounterConditionsCreateOrConnectWithoutValuesInput";
import { EncounterConditionsCreateWithoutValuesInput } from "../inputs/EncounterConditionsCreateWithoutValuesInput";
import { EncounterConditionsUpdateToOneWithWhereWithoutValuesInput } from "../inputs/EncounterConditionsUpdateToOneWithWhereWithoutValuesInput";
import { EncounterConditionsUpsertWithoutValuesInput } from "../inputs/EncounterConditionsUpsertWithoutValuesInput";
import { EncounterConditionsWhereUniqueInput } from "../inputs/EncounterConditionsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput", {})
export class EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput {
  @TypeGraphQL.Field(_type => EncounterConditionsCreateWithoutValuesInput, {
    nullable: true
  })
  create?: EncounterConditionsCreateWithoutValuesInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsCreateOrConnectWithoutValuesInput, {
    nullable: true
  })
  connectOrCreate?: EncounterConditionsCreateOrConnectWithoutValuesInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsUpsertWithoutValuesInput, {
    nullable: true
  })
  upsert?: EncounterConditionsUpsertWithoutValuesInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterConditionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsUpdateToOneWithWhereWithoutValuesInput, {
    nullable: true
  })
  update?: EncounterConditionsUpdateToOneWithWhereWithoutValuesInput | undefined;
}
