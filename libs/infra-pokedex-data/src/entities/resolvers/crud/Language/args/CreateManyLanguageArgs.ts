import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguageCreateManyInput } from "../../../inputs/LanguageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLanguageArgs {
  @TypeGraphQL.Field(_type => [LanguageCreateManyInput], {
    nullable: false
  })
  data!: LanguageCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
