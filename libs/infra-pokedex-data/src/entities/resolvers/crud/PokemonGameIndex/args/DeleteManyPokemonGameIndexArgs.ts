import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndexWhereInput } from "../../../inputs/PokemonGameIndexWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokemonGameIndexArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndexWhereInput, {
    nullable: true
  })
  where?: PokemonGameIndexWhereInput | undefined;
}
