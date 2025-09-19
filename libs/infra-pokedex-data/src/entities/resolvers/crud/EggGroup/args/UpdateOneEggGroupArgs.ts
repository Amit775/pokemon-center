import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupUpdateInput } from "../../../inputs/EggGroupUpdateInput";
import { EggGroupWhereUniqueInput } from "../../../inputs/EggGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEggGroupArgs {
  @TypeGraphQL.Field(_type => EggGroupUpdateInput, {
    nullable: false
  })
  data!: EggGroupUpdateInput;

  @TypeGraphQL.Field(_type => EggGroupWhereUniqueInput, {
    nullable: false
  })
  where!: EggGroupWhereUniqueInput;
}
