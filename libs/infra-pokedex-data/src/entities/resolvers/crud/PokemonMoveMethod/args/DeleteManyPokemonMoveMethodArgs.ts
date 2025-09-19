import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodWhereInput } from "../../../inputs/PokemonMoveMethodWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodWhereInput | undefined;
}
