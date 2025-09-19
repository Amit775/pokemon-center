import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenderWhereUniqueInput } from "../../../inputs/GenderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneGenderArgs {
  @TypeGraphQL.Field(_type => GenderWhereUniqueInput, {
    nullable: false
  })
  where!: GenderWhereUniqueInput;
}
