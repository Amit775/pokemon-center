import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateOrConnectWithoutConditionValueMapInput } from "../inputs/EncountersCreateOrConnectWithoutConditionValueMapInput";
import { EncountersCreateWithoutConditionValueMapInput } from "../inputs/EncountersCreateWithoutConditionValueMapInput";
import { EncountersUpdateToOneWithWhereWithoutConditionValueMapInput } from "../inputs/EncountersUpdateToOneWithWhereWithoutConditionValueMapInput";
import { EncountersUpsertWithoutConditionValueMapInput } from "../inputs/EncountersUpsertWithoutConditionValueMapInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput", {})
export class EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput {
  @TypeGraphQL.Field(_type => EncountersCreateWithoutConditionValueMapInput, {
    nullable: true
  })
  create?: EncountersCreateWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncountersCreateOrConnectWithoutConditionValueMapInput, {
    nullable: true
  })
  connectOrCreate?: EncountersCreateOrConnectWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncountersUpsertWithoutConditionValueMapInput, {
    nullable: true
  })
  upsert?: EncountersUpsertWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: true
  })
  connect?: EncountersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EncountersUpdateToOneWithWhereWithoutConditionValueMapInput, {
    nullable: true
  })
  update?: EncountersUpdateToOneWithWhereWithoutConditionValueMapInput | undefined;
}
