import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterWhereUniqueInput } from "../../../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEncounterOrThrowArgs {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;
}
