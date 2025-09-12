import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodsCreateInput } from "../../../inputs/VersionGroupPokemonMoveMethodsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVersionGroupPokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCreateInput, {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodsCreateInput;
}
