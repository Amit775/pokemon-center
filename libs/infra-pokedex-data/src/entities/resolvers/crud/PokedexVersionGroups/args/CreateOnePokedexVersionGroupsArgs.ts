import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupsCreateInput } from "../../../inputs/PokedexVersionGroupsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokedexVersionGroupsArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsCreateInput, {
    nullable: false
  })
  data!: PokedexVersionGroupsCreateInput;
}
