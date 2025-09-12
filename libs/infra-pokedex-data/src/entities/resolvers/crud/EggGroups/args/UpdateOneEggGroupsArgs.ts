import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupsUpdateInput } from "../../../inputs/EggGroupsUpdateInput";
import { EggGroupsWhereUniqueInput } from "../../../inputs/EggGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEggGroupsArgs {
  @TypeGraphQL.Field(_type => EggGroupsUpdateInput, {
    nullable: false
  })
  data!: EggGroupsUpdateInput;

  @TypeGraphQL.Field(_type => EggGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: EggGroupsWhereUniqueInput;
}
