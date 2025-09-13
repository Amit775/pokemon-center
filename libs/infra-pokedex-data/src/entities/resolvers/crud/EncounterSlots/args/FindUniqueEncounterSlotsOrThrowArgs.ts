import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotsWhereUniqueInput } from "../../../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEncounterSlotsOrThrowArgs {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotsWhereUniqueInput;
}
