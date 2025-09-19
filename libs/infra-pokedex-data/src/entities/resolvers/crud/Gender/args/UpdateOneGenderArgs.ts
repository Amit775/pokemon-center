import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenderUpdateInput } from "../../../inputs/GenderUpdateInput";
import { GenderWhereUniqueInput } from "../../../inputs/GenderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGenderArgs {
  @TypeGraphQL.Field(_type => GenderUpdateInput, {
    nullable: false
  })
  data!: GenderUpdateInput;

  @TypeGraphQL.Field(_type => GenderWhereUniqueInput, {
    nullable: false
  })
  where!: GenderWhereUniqueInput;
}
