import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateOrConnectWithoutConditionValueMapInput } from "../inputs/EncountersCreateOrConnectWithoutConditionValueMapInput";
import { EncountersCreateWithoutConditionValueMapInput } from "../inputs/EncountersCreateWithoutConditionValueMapInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersCreateNestedOneWithoutConditionValueMapInput", {})
export class EncountersCreateNestedOneWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncountersCreateWithoutConditionValueMapInput, {
    nullable: true
  })
  create?: EncountersCreateWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncountersCreateOrConnectWithoutConditionValueMapInput, {
    nullable: true
  })
  connectOrCreate?: EncountersCreateOrConnectWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: true
  })
  connect?: EncountersWhereUniqueInput | undefined;
}
