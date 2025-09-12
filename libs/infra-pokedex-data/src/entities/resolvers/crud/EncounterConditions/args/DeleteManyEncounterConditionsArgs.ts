import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionsWhereInput } from "../../../inputs/EncounterConditionsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEncounterConditionsArgs {
  @TypeGraphQL.Field(_type => EncounterConditionsWhereInput, {
    nullable: true
  })
  where?: EncounterConditionsWhereInput | undefined;
}
