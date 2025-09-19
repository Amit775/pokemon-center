import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterUpdateWithoutConditionValueMapInput } from "../inputs/EncounterUpdateWithoutConditionValueMapInput";
import { EncounterWhereInput } from "../inputs/EncounterWhereInput";

@TypeGraphQL.InputType("EncounterUpdateToOneWithWhereWithoutConditionValueMapInput", {})
export class EncounterUpdateToOneWithWhereWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncounterWhereInput, {
    nullable: true
  })
  where?: EncounterWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterUpdateWithoutConditionValueMapInput, {
    nullable: false
  })
  data!: EncounterUpdateWithoutConditionValueMapInput;
}
