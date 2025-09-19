import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueMapWhereInput } from "../../inputs/EncounterConditionValueMapWhereInput";

@TypeGraphQL.ArgsType()
export class EncounterConditionValueCountConditionValueMapArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValueMapWhereInput | undefined;
}
