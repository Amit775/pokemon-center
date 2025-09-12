import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncountersWhereUniqueInput } from "../../../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneEncountersArgs {
  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;
}
