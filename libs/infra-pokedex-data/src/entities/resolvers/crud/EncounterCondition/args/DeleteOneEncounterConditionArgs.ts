import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionWhereUniqueInput } from "../../../inputs/EncounterConditionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneEncounterConditionArgs {
  @TypeGraphQL.Field(_type => EncounterConditionWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionWhereUniqueInput;
}
