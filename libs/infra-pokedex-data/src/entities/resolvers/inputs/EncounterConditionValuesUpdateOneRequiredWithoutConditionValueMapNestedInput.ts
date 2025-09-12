import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput } from "../inputs/EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput";
import { EncounterConditionValuesCreateWithoutConditionValueMapInput } from "../inputs/EncounterConditionValuesCreateWithoutConditionValueMapInput";
import { EncounterConditionValuesUpdateToOneWithWhereWithoutConditionValueMapInput } from "../inputs/EncounterConditionValuesUpdateToOneWithWhereWithoutConditionValueMapInput";
import { EncounterConditionValuesUpsertWithoutConditionValueMapInput } from "../inputs/EncounterConditionValuesUpsertWithoutConditionValueMapInput";
import { EncounterConditionValuesWhereUniqueInput } from "../inputs/EncounterConditionValuesWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput", {})
export class EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput {
  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateWithoutConditionValueMapInput, {
    nullable: true
  })
  create?: EncounterConditionValuesCreateWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput, {
    nullable: true
  })
  connectOrCreate?: EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesUpsertWithoutConditionValueMapInput, {
    nullable: true
  })
  upsert?: EncounterConditionValuesUpsertWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterConditionValuesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesUpdateToOneWithWhereWithoutConditionValueMapInput, {
    nullable: true
  })
  update?: EncounterConditionValuesUpdateToOneWithWhereWithoutConditionValueMapInput | undefined;
}
