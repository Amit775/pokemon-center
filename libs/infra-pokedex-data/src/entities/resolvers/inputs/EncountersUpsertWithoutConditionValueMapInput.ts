import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateWithoutConditionValueMapInput } from "../inputs/EncountersCreateWithoutConditionValueMapInput";
import { EncountersUpdateWithoutConditionValueMapInput } from "../inputs/EncountersUpdateWithoutConditionValueMapInput";
import { EncountersWhereInput } from "../inputs/EncountersWhereInput";

@TypeGraphQL.InputType("EncountersUpsertWithoutConditionValueMapInput", {})
export class EncountersUpsertWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncountersUpdateWithoutConditionValueMapInput, {
    nullable: false
  })
  update!: EncountersUpdateWithoutConditionValueMapInput;

  @TypeGraphQL.Field(_type => EncountersCreateWithoutConditionValueMapInput, {
    nullable: false
  })
  create!: EncountersCreateWithoutConditionValueMapInput;

  @TypeGraphQL.Field(_type => EncountersWhereInput, {
    nullable: true
  })
  where?: EncountersWhereInput | undefined;
}
