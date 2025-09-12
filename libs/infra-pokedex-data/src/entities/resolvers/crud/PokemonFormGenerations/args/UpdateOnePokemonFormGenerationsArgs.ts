import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationsUpdateInput } from "../../../inputs/PokemonFormGenerationsUpdateInput";
import { PokemonFormGenerationsWhereUniqueInput } from "../../../inputs/PokemonFormGenerationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonFormGenerationsArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsUpdateInput, {
    nullable: false
  })
  data!: PokemonFormGenerationsUpdateInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationsWhereUniqueInput;
}
