import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguagesCreateInput } from "../../../inputs/LanguagesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLanguagesArgs {
  @TypeGraphQL.Field(_type => LanguagesCreateInput, {
    nullable: false
  })
  data!: LanguagesCreateInput;
}
