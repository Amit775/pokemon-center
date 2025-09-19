import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateOrConnectWithoutConditionValueMapInput } from "../inputs/EncounterCreateOrConnectWithoutConditionValueMapInput";
import { EncounterCreateWithoutConditionValueMapInput } from "../inputs/EncounterCreateWithoutConditionValueMapInput";
import { EncounterUpdateToOneWithWhereWithoutConditionValueMapInput } from "../inputs/EncounterUpdateToOneWithWhereWithoutConditionValueMapInput";
import { EncounterUpsertWithoutConditionValueMapInput } from "../inputs/EncounterUpsertWithoutConditionValueMapInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterUpdateOneRequiredWithoutConditionValueMapNestedInput", {})
export class EncounterUpdateOneRequiredWithoutConditionValueMapNestedInput {
  @TypeGraphQL.Field(_type => EncounterCreateWithoutConditionValueMapInput, {
    nullable: true
  })
  create?: EncounterCreateWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterCreateOrConnectWithoutConditionValueMapInput, {
    nullable: true
  })
  connectOrCreate?: EncounterCreateOrConnectWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterUpsertWithoutConditionValueMapInput, {
    nullable: true
  })
  upsert?: EncounterUpsertWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EncounterUpdateToOneWithWhereWithoutConditionValueMapInput, {
    nullable: true
  })
  update?: EncounterUpdateToOneWithWhereWithoutConditionValueMapInput | undefined;
}
