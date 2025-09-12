import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodsWhereInput } from "../../../inputs/PokemonMoveMethodsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodsWhereInput | undefined;
}
