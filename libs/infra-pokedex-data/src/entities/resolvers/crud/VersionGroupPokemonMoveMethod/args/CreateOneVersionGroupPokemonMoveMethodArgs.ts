import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodCreateInput } from "../../../inputs/VersionGroupPokemonMoveMethodCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVersionGroupPokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodCreateInput, {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodCreateInput;
}
