import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguagesWhereUniqueInput } from "../../../inputs/LanguagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneLanguagesArgs {
  @TypeGraphQL.Field(_type => LanguagesWhereUniqueInput, {
    nullable: false
  })
  where!: LanguagesWhereUniqueInput;
}
