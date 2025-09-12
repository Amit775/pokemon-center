import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupsWhereUniqueInput } from "../../../inputs/PokedexVersionGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePokedexVersionGroupsArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupsWhereUniqueInput;
}
