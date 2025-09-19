import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueCreateOrConnectWithoutConditionValueMapInput } from "../inputs/EncounterConditionValueCreateOrConnectWithoutConditionValueMapInput";
import { EncounterConditionValueCreateWithoutConditionValueMapInput } from "../inputs/EncounterConditionValueCreateWithoutConditionValueMapInput";
import { EncounterConditionValueUpdateToOneWithWhereWithoutConditionValueMapInput } from "../inputs/EncounterConditionValueUpdateToOneWithWhereWithoutConditionValueMapInput";
import { EncounterConditionValueUpsertWithoutConditionValueMapInput } from "../inputs/EncounterConditionValueUpsertWithoutConditionValueMapInput";
import { EncounterConditionValueWhereUniqueInput } from "../inputs/EncounterConditionValueWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueUpdateOneRequiredWithoutConditionValueMapNestedInput", {})
export class EncounterConditionValueUpdateOneRequiredWithoutConditionValueMapNestedInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueCreateWithoutConditionValueMapInput, {
    nullable: true
  })
  create?: EncounterConditionValueCreateWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueCreateOrConnectWithoutConditionValueMapInput, {
    nullable: true
  })
  connectOrCreate?: EncounterConditionValueCreateOrConnectWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueUpsertWithoutConditionValueMapInput, {
    nullable: true
  })
  upsert?: EncounterConditionValueUpsertWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterConditionValueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueUpdateToOneWithWhereWithoutConditionValueMapInput, {
    nullable: true
  })
  update?: EncounterConditionValueUpdateToOneWithWhereWithoutConditionValueMapInput | undefined;
}
