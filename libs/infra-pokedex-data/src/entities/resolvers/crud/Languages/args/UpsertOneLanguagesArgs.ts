import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguagesCreateInput } from "../../../inputs/LanguagesCreateInput";
import { LanguagesUpdateInput } from "../../../inputs/LanguagesUpdateInput";
import { LanguagesWhereUniqueInput } from "../../../inputs/LanguagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLanguagesArgs {
  @TypeGraphQL.Field(_type => LanguagesWhereUniqueInput, {
    nullable: false
  })
  where!: LanguagesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguagesCreateInput, {
    nullable: false
  })
  create!: LanguagesCreateInput;

  @TypeGraphQL.Field(_type => LanguagesUpdateInput, {
    nullable: false
  })
  update!: LanguagesUpdateInput;
}
