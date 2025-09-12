import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionsWhereUniqueInput } from "../../../inputs/EncounterConditionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneEncounterConditionsArgs {
  @TypeGraphQL.Field(_type => EncounterConditionsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionsWhereUniqueInput;
}
