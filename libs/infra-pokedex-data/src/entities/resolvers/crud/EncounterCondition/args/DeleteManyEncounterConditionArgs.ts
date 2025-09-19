import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionWhereInput } from "../../../inputs/EncounterConditionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEncounterConditionArgs {
  @TypeGraphQL.Field(_type => EncounterConditionWhereInput, {
    nullable: true
  })
  where?: EncounterConditionWhereInput | undefined;
}
