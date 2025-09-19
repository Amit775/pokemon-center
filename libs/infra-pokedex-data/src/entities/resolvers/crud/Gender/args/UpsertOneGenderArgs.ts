import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenderCreateInput } from "../../../inputs/GenderCreateInput";
import { GenderUpdateInput } from "../../../inputs/GenderUpdateInput";
import { GenderWhereUniqueInput } from "../../../inputs/GenderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGenderArgs {
  @TypeGraphQL.Field(_type => GenderWhereUniqueInput, {
    nullable: false
  })
  where!: GenderWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenderCreateInput, {
    nullable: false
  })
  create!: GenderCreateInput;

  @TypeGraphQL.Field(_type => GenderUpdateInput, {
    nullable: false
  })
  update!: GenderUpdateInput;
}
