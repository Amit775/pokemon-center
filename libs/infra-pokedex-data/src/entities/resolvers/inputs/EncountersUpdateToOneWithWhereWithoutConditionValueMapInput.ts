import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersUpdateWithoutConditionValueMapInput } from "../inputs/EncountersUpdateWithoutConditionValueMapInput";
import { EncountersWhereInput } from "../inputs/EncountersWhereInput";

@TypeGraphQL.InputType("EncountersUpdateToOneWithWhereWithoutConditionValueMapInput", {})
export class EncountersUpdateToOneWithWhereWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncountersWhereInput, {
    nullable: true
  })
  where?: EncountersWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncountersUpdateWithoutConditionValueMapInput, {
    nullable: false
  })
  data!: EncountersUpdateWithoutConditionValueMapInput;
}
