import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupsCreateInput } from "../../../inputs/EggGroupsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEggGroupsArgs {
  @TypeGraphQL.Field(_type => EggGroupsCreateInput, {
    nullable: false
  })
  data!: EggGroupsCreateInput;
}
