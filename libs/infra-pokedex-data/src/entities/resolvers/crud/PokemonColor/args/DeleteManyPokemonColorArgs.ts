import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorWhereInput } from "../../../inputs/PokemonColorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokemonColorArgs {
  @TypeGraphQL.Field(_type => PokemonColorWhereInput, {
    nullable: true
  })
  where?: PokemonColorWhereInput | undefined;
}
