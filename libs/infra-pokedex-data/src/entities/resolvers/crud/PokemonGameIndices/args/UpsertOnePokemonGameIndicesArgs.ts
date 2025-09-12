import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndicesCreateInput } from "../../../inputs/PokemonGameIndicesCreateInput";
import { PokemonGameIndicesUpdateInput } from "../../../inputs/PokemonGameIndicesUpdateInput";
import { PokemonGameIndicesWhereUniqueInput } from "../../../inputs/PokemonGameIndicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonGameIndicesArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonGameIndicesCreateInput, {
    nullable: false
  })
  create!: PokemonGameIndicesCreateInput;

  @TypeGraphQL.Field(_type => PokemonGameIndicesUpdateInput, {
    nullable: false
  })
  update!: PokemonGameIndicesUpdateInput;
}
