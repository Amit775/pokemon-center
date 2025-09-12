import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndicesUpdateInput } from "../../../inputs/PokemonGameIndicesUpdateInput";
import { PokemonGameIndicesWhereUniqueInput } from "../../../inputs/PokemonGameIndicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonGameIndicesArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndicesUpdateInput, {
    nullable: false
  })
  data!: PokemonGameIndicesUpdateInput;

  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndicesWhereUniqueInput;
}
