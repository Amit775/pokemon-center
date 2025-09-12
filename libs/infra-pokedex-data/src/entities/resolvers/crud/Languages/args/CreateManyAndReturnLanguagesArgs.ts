import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguagesCreateManyInput } from "../../../inputs/LanguagesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnLanguagesArgs {
  @TypeGraphQL.Field(_type => [LanguagesCreateManyInput], {
    nullable: false
  })
  data!: LanguagesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
