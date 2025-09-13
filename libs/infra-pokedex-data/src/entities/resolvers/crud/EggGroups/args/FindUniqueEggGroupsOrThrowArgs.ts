import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupsWhereUniqueInput } from "../../../inputs/EggGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEggGroupsOrThrowArgs {
  @TypeGraphQL.Field(_type => EggGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: EggGroupsWhereUniqueInput;
}
