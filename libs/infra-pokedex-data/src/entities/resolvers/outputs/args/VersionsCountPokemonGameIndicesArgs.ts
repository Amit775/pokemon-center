import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndicesWhereInput } from "../../inputs/PokemonGameIndicesWhereInput";

@TypeGraphQL.ArgsType()
export class VersionsCountPokemonGameIndicesArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereInput, {
    nullable: true
  })
  where?: PokemonGameIndicesWhereInput | undefined;
}
