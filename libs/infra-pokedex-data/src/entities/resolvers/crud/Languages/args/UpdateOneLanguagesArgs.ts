import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguagesUpdateInput } from "../../../inputs/LanguagesUpdateInput";
import { LanguagesWhereUniqueInput } from "../../../inputs/LanguagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLanguagesArgs {
  @TypeGraphQL.Field(_type => LanguagesUpdateInput, {
    nullable: false
  })
  data!: LanguagesUpdateInput;

  @TypeGraphQL.Field(_type => LanguagesWhereUniqueInput, {
    nullable: false
  })
  where!: LanguagesWhereUniqueInput;
}
