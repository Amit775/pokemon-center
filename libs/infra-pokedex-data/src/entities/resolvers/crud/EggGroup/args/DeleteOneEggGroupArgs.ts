import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupWhereUniqueInput } from "../../../inputs/EggGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneEggGroupArgs {
  @TypeGraphQL.Field(_type => EggGroupWhereUniqueInput, {
    nullable: false
  })
  where!: EggGroupWhereUniqueInput;
}
