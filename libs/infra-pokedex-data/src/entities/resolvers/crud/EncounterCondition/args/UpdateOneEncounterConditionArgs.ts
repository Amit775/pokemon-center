import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionUpdateInput } from "../../../inputs/EncounterConditionUpdateInput";
import { EncounterConditionWhereUniqueInput } from "../../../inputs/EncounterConditionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEncounterConditionArgs {
  @TypeGraphQL.Field(_type => EncounterConditionUpdateInput, {
    nullable: false
  })
  data!: EncounterConditionUpdateInput;

  @TypeGraphQL.Field(_type => EncounterConditionWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionWhereUniqueInput;
}
