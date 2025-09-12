import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguagesUpdateManyMutationInput } from "../../../inputs/LanguagesUpdateManyMutationInput";
import { LanguagesWhereInput } from "../../../inputs/LanguagesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLanguagesArgs {
  @TypeGraphQL.Field(_type => LanguagesUpdateManyMutationInput, {
    nullable: false
  })
  data!: LanguagesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LanguagesWhereInput, {
    nullable: true
  })
  where?: LanguagesWhereInput | undefined;
}
