import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatUpdateInput } from "../../../inputs/PokemonStatUpdateInput";
import { PokemonStatWhereUniqueInput } from "../../../inputs/PokemonStatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonStatArgs {
  @TypeGraphQL.Field(_type => PokemonStatUpdateInput, {
    nullable: false
  })
  data!: PokemonStatUpdateInput;

  @TypeGraphQL.Field(_type => PokemonStatWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatWhereUniqueInput;
}
