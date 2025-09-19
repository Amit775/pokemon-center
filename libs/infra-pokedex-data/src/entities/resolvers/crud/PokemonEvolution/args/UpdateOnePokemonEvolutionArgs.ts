import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEvolutionUpdateInput } from "../../../inputs/PokemonEvolutionUpdateInput";
import { PokemonEvolutionWhereUniqueInput } from "../../../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonEvolutionArgs {
  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateInput, {
    nullable: false
  })
  data!: PokemonEvolutionUpdateInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;
}
