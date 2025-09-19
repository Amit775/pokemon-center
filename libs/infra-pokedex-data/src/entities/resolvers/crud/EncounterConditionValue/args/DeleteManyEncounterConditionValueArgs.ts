import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueWhereInput } from "../../../inputs/EncounterConditionValueWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEncounterConditionValueArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValueWhereInput | undefined;
}
