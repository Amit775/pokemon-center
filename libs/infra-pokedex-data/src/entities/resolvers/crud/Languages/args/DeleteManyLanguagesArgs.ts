import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguagesWhereInput } from "../../../inputs/LanguagesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLanguagesArgs {
  @TypeGraphQL.Field(_type => LanguagesWhereInput, {
    nullable: true
  })
  where?: LanguagesWhereInput | undefined;
}
